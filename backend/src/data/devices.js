const devices = Array.from({ length: 100 }, (_, index) => {
  const statuses = ["Success", "Pending", "Failed"];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

  return {
    id: `device-${index + 1}`,
    lastSyncTime: new Date(
      Date.now() - Math.floor(Math.random() * 100000000)
    ).toISOString(),
    syncStatus: randomStatus,
  };
});

module.exports = devices;
