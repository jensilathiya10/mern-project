const express = require("express"); 
const app = express();
const path = require("path");
const db = require("./config");
const userrouter = require('./routers/users');
const productRouter = require('./routers/products'); // Added product routes
const staticrouter = require('./routers/static');
const cookieParser = require('cookie-parser');
const verifyisloggedin = require("./middlewares/verifylogin");

db();
var cors = require('cors');
app.use(cors());
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", staticrouter);
app.use('/user', verifyisloggedin, userrouter);
app.use('/products', productRouter); // New product routes

app.listen(8000, () => {
    console.log("App running on port 8000");
});
