const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/audio.wav", (req, res) =>{
    res.sendFile(__dirname+"/views/aduio.wav")
})

app.listen(1000)