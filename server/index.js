const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userRoute = require("./Routes/userRoute")
const chatRouter = require("./Routes/chatRoute")
const messageRouter = require("./Routes/messageRoute")

const app = express()
require("dotenv").config()

//middleware funtion
app.use(express.json())
app.use(cors())
app.use("/api/users", userRoute)
app.use("/api/chats", chatRouter)
app.use("/api/messages", messageRouter)

app.get("/", (req, res) =>{
    res.send("Welcome to our chat app APIs")
});

const PORT = process.env.PORT || 9090;
const uri = process.env.ATLAS_URI;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  console.log(`Server is running on http://localhost:${PORT}`);
});

mongoose
.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected!"))
.catch((error) => console.log("MongoDB connection failed: ", error.message)); 