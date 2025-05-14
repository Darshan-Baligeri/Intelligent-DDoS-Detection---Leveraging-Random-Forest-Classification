// middleware/blockIP.js
const blockedIPs = new Set();

const blockIP = (ip) => {
    blockedIPs.add(ip);
    console.log(`Blocked IP: ${ip}`);
};

const isBlocked = (req, res, next) => {
    if (blockedIPs.has(req.ip)) {
        return res.status(403).json({ message: "Access denied." });
    }
    next();
};

module.exports = { blockIP, isBlocked };
