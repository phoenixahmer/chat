const mongoose = require("mongoose")
const config = require("config")
const URI = config.get("URI")

const dbConnect = async () => {
  try {
    await mongoose.connect(URI,
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      }
    )

    console.log("connected to database")
  } catch (error) {
    console.log("database error : ", error.message)
    process.exit(1);
  }
}

module.exports = dbConnect()