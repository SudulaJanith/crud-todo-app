const express = require("express");

const app = express();
app.use(express.json());

const routes = require("./routes");
app.use("/api", routes)

const connectDb = require("./connectDb");



const port = 5000;


const startServer = async () => {
  await connectDb();

  app.listen(port, () => {
    console.log(`Server is listening on https://localhost:${port}`);
  });

};

startServer();