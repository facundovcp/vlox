import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

//-----------------------------------------------------------------
//Initial variables, initial configurations.
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
//Every route inside postRoutes will start with /posts.
app.use("/posts", postRoutes);

//-----------------------------------------------------------------
//DataBase connection.
const CONNECTION_URL =
  "mongodb+srv://flopez:cho1927lop@maincluster.dn1fi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });
