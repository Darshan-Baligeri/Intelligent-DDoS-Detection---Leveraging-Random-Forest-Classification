// routes/detect.js
const express = require('express');
const axios = require('axios');
const { sendAlert } = require('../../servies/alertService');
const router = express.Router();
const blockedIPs = new Set();

// Middleware to block IPs
router.use((req, res, next) => {
    if (blockedIPs.has(req.ip)) {
        return res.status(403).json({ message: "Access denied." });
    }
    next();
});

router.post('/', async (req, res) => {
        try {
        const response = await axios.post('http://localhost:5000/predict', req.body);
        const { prediction } = response.data;

        if (prediction === 'DDoS') {
            //blockedIPs.add(req.ip); // Add IP to blocked list
            sendAlert('DDoS attack detected from source: ' + req.ip); // Call to alert service
            return res.status(403).json({ message: "Traffic is malicious. DDoS detected." });
        }

        res.status(200).json({ message: "Traffic is benign." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing the request.' });
    }
});


module.exports = router;
