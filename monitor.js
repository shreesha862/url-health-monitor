const axios = require("axios");
const fs = require("fs");

// Read URLs from JSON file
const urls = JSON.parse(fs.readFileSync("urls.json", "utf-8"));

async function checkURL(url) {
  const start = Date.now();

  try {
    const response = await axios.get(url, { timeout: 5000 });
    const responseTime = Date.now() - start;

    return {
      url,
      status: response.status >= 200 && response.status < 300 ? "UP" : "DOWN",
      responseTime
    };

  } catch (error) {
    const responseTime = Date.now() - start;

    return {
      url,
      status: "DOWN",
      responseTime,
      error: error.message
    };
  }
}

async function monitor() {
  console.log("Checking URLs...\n");

  const results = await Promise.all(
    urls.map(url => checkURL(url))
  );

  const total = results.length;
  const upCount = results.filter(r => r.status === "UP").length;
  const downCount = total - upCount;

  console.log("===== SUMMARY =====");
  console.log(`Total URLs: ${total}`);
  console.log(`UP: ${upCount}`);
  console.log(`DOWN: ${downCount}`);

  console.log("\n===== DETAILS =====");
  results.forEach(result => console.log(result));
}

monitor();