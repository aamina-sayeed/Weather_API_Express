import express from "express"
import userAPI from "./controller/users.js"
import config from "config"

const app=express()

app.use(express.json())
app.use("/users",userAPI)


app.use((req,res)=>{
    res.status(500).send("Internal Server Error")
})
app.listen(config.get("port"),(req,res)=>{
    console.log(`Server is listening at port no:${config.get("port")}`)
})