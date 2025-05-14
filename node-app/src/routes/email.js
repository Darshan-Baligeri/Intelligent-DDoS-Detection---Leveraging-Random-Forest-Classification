const express = require('express');
const router = express.Router();
const { updateAlertEmail } = require('../../servies/alertService');

// Define the POST route for updating the email
router.post('/', (req, res) => {
    const { email } = req.body;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        return res.status(400).json({ error: 'Valid email is required' });
    }

    try {
        updateAlertEmail(email); // Function to update email in alertService
        res.status(200).json({ message: 'Alert email updated successfully!' });
    } catch (error) {
        console.error('Error updating email:', error);
        res.status(500).json({ error: 'Failed to update email.' });
    }
});

module.exports = router;
