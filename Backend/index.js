const express = require("express");
const multer = require("multer");

const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("", (req, res) => {
  res.send("Backend is working");
});

const categoryRouter = require("./modules/category/router");
const queryRouter = require("./modules/query/router");
const transactionRouter = require("./modules/transaction/router");
const accountRouter = require("./modules/account/router");
const userRouter = require("./modules/user/router");
const authRouter = require("./modules/authentication/router");
const videoRouter = require("./modules/videos/router");
const fs = require("fs");

const path = require("path");

app.use("/auth", authRouter);
app.use("/category", categoryRouter);
app.use("/query", queryRouter);
app.use("/transaction", transactionRouter);
app.use("/account", accountRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

const imageStorage = multer.diskStorage({
  // Destination to store image
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
    // file.fieldname is name of the field (image)
    // path.extname get the uploaded file extension
  },
});

const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 9000000, // 1000000 Bytes = 1 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      // upload only png and jpg format
      return cb(new Error("Please upload a Image"));
    }
    cb(undefined, true);
  },
});

app.post("/blog", imageUpload.single("file"), (req, res) => {
  console.log(req.file);
  res.send("Hello");

  // schema.create({
  //   title:req.body.title,
  //   category:req.body.category,
  //   image:req.file.filename
  // })
});

app.get("/file/:filename", (req, res) => {
  const filePath = path.join(__dirname, `uploads/${req.params.filename}`);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.status(500).send("Error reading file");
      return;
    }
    res.send(data);
  });
});
// getting transactions on the basis of type, account,
// date feb, top 5 transactions,
// transactions over 5000, transactions under 4000

app.listen(8080, async (req, res) => {
  console.log("App is running on port 8080");
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.eqzvuef.mongodb.net/E-learning?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Database is connected");
  } catch (e) {
    console.log(e);
  }
});

// express, nodemon, mongoose, cors, moment, dotenv, bcrypt, jsonwebtoken, passport
