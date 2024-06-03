import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://plaguser:p%40%40n1m@clusterplag.dgenmdi.mongodb.net/"
// const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017"

const connectToMongoDB = () => {
    try {
        mongoose.connect(MONGO_URI)
        console.log("Connected to Mongoose.")
    } catch (err) {
        console.log("Could not connect: " + err)
    }
    const dbConnection = mongoose.connection

    dbConnection.on("error", (err: Error) => {
        console.log(`Connection Error: ${err}`)
    })

    dbConnection.once("open", () => {
        console.log("Connected to DB!");
    })
}

export default connectToMongoDB