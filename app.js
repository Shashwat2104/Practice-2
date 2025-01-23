const express = require("express");
const connectDB = require("./config/db");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const bookRoutes = require("./routes/bookRoutes");
app.use("/books", bookRoutes);

app.listen(3000, async () => {
  try {
    await connectDB();
    console.log("MongoDB is connected to the server");
  } catch (error) {
    console.log("Error: ", error.message);
  }
  console.log("Server is running on port 3000");
});
