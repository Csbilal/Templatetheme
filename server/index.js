const express = require("express");
const app = express();
const connectDB = require("./Config/MongoConfig");
const profileRoutes = require("./routes/routes");

app.use(express.json());

app.use("/api", profileRoutes);

const port = 3000;

app.listen(port, (req, res) => {
  console.log(`server is strated at port ${port}`);
});
