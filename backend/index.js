require('dotenv').config();
const express = require("express");
// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./db/database");

const app = express();
  
app.use(cors({
    origin: '*',
    credentials: true // Allow sending cookies
  }));

    app.use(express.json({ limit: '30mb' }));
    // app.use(cookieParser());
    // app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
    // app.use(express.urlencoded({ extended: true }));

    connectDB();

    //import routes
    const lesson = require("./Controllers/lessonController");
    const order = require("./Controllers/orderController");


    app.use("/api", lesson);
    app.use("/api", order);


    app.all("*", (req, res) => {
        return res.status(404).json({ message: `Route ${req.originalUrl} not found` });
    });

    app.listen(process.env.PORT, () => {
        console.clear();
        // console.log(`Worker ${cluster.worker.id} running on PORT ${process.env.PORT}`)
        console.log(`Server running on PORT ${process.env.PORT}`)
    });
