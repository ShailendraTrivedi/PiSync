const express = require("express");
const router = express.Router();
const devices = require("../data/devices");

router.get("/", (req, res) => {
  const failedDevices = devices.filter((d) => d.syncStatus === "Failed");
  res.json(failedDevices);
});

module.exports = router;
