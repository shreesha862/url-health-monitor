# URL Health & Performance Monitor

A CLI-based Node.js tool that evaluates the health of multiple URLs concurrently.

## 🚀 Features

- Concurrent URL checking using Promise.all
- Determines if a site is UP (HTTP 200–299) or DOWN
- Measures response time in milliseconds
- Handles invalid URLs and timeouts safely
- Displays a summary report

## 📦 Installation

Clone the repository:

```bash
git clone <your-repo-url>
cd url-health-monitor
```

Install dependencies:

```bash
npm install
```

## ▶️ Run the Application

```bash
node monitor.js
```

## 📥 Sample Input (urls.json)

```json
[
  "https://www.google.com",
  "https://www.github.com",
  "https://en.wikipedia.org/saecs/Saweascasce"
]
```

## 🧠 Technical Details

- Built with Node.js
- Uses async/await
- Uses Promise.all for concurrency
- Demonstrates non-blocking I/O