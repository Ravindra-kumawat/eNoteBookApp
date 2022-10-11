const mongoose = require('mongoose');

//require('dotenv/config')
require('dotenv').config();
const mongooseUri = process.env.DATABASE_CONNECTION_STRING;
const connectToMongo = () => {
    mongoose.connect(mongooseUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'mentoring' //database name
    })
        .then(() => {
            console.log('connect to database successfully...');
        })
        .catch((err) => {
            console.log(err);
        })
}
//-------------- OR //---------------
// const connectToMongo = () => {
//     mongoose.connect(mongooseUri, () => {
//         console.log("connect to mongodb");
//     })
// }
module.exports = connectToMongo;
