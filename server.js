const crypto = require("crypto");
global.crypto = crypto;

const express = require("express");
const mongoose = require("mongoose");
const shortid = require("shortid");
const cors = require("cors");
require("dotenv").config();

const Url = require("./models/Url");

const app = express();
app.use(cors());
app.use(express.json());

const cors = require("cors");
app.use(cors());

// 🔌 Connect to MongoDB
mongoose.connect("mongodb://mongodb:27017/urlshortener")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));


// 🔥 Route 1: Create short URL
app.post("/shorten", async (req, res) => {
    const { longUrl } = req.body;

    const shortCode = shortid.generate();

    const newUrl = new Url({
        longUrl,
        shortCode
    });

    await newUrl.save();

    res.json({
        shortUrl: `http://localhost:3000/${shortCode}`
    });
});


// 🔥 Route 2: Redirect
app.get("/:code", async (req, res) => {
    const urlData = await Url.findOne({ shortCode: req.params.code });

    if (!urlData) {
        return res.status(404).send("URL not found");
    }

    urlData.clicks++;
    await urlData.save();

    res.redirect(urlData.longUrl);
});

app.get("/", (req, res) => {
    res.send("URL Shortener API is running 🚀");
});

// 🚀 Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});