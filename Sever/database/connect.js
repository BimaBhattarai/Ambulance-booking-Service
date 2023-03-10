mongoose.set("steictQuery",false)
const connectDB = (url) => {
    return mongoose.connect(url);
}
module.exports = connectDB;