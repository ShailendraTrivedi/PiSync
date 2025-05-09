const express = require("express");
const cors = require("cors");
const devicesRouter = require("./routes/devices");
const errorsRouter = require("./routes/errors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/devices", devicesRouter);
app.use("/api/errors", errorsRouter);

app.get("/", (req, res) => {
  res.send("PiSync Backend Running!");
});

app.listen(PORT, () => {
  console.log(`Backend server started on http://localhost:${PORT}`);
});
