const express = require("express");
const router = express.Router();
const devices = require("../data/devices");

router.get("/", (req, res) => {
  res.json(devices);
});

router.post("/sync/:deviceId", (req, res) => {
  const { deviceId } = req.params;
  const device = devices.find((d) => d.id === deviceId);

  if (device) {
    device.lastSyncTime = new Date().toISOString();
    device.syncStatus = "Success";
    setTimeout(
      () => res.json({ message: `Sync triggered for ${deviceId}`, device }),
      3000
    );
  } else {
    res.status(404).json({ message: "Device not found" });
  }
});

module.exports = router;
