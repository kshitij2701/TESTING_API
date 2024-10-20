const mongoose = require("mongoose");

uri = "mongodb+srv://kshitijshishodia40:7VbyFX6esZwfmRhW@mycluster.cs8kx.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster";

const connectDB = () => {
    console.log(`Connected to Mongodb`);
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;