const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoute = require("./routes/user");
const articleRoute = require("./routes/article");
const tagRoute = require("./routes/tag");


const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const databaseConfig = require("./config/keys");
mongoose.connect(databaseConfig, { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(bodyParser.json({ limit: "10mb" }));


app.use("/user", userRoute);
app.use("/blog", articleRoute);
app.use("/tags", tagRoute);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

module.exports = app;