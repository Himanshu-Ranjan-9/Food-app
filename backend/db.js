
const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://Himanshu:8454@cluster0.akpaikv.mongodb.net/Food_items_data?retryWrites=true&w=majority&appName=Cluster0";

const connectToDB = () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to database");
        return mongoose.connection.db.collection("food_items").find().toArray();
    })
    .then((dataSet) => {
        // console.log(dataSet);
        global.food_items = dataSet ;
    })
    .catch((error) => {
        console.error("Error connecting to database: ", error);
    });
};
module.exports = connectToDB;

