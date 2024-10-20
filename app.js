const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectDB = require("./db/connect");

const products_routes = require("./routes/register")

app.get("/", (req, res) => {
    res.send("Live Now");
});

app.use("/api/products", products_routes);

const start = async() => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Connection Successful to Port ${PORT}`);
        });
        
    } catch (error) {
        console.log(error);
    }
};

start();