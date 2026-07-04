const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("🚀 Automated Deployment Project is Running!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
app.get("/version", (req, res) => {
    res.send("Version 2");
});
app.get("/health", (req, res) => {
    res.send("Healthy");
});