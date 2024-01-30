import express, { response } from "express"
import cors from "cors"
const app = express()
app.use(express.json())
app.use(cors())

app.listen('6060' , () =>
{
    console.log("server started at port 6060")
})

//app.post
app.post('/messages' ,  function(req, res)
{
    res.status(200).json({message: "recieved" , youSent : req.body})
})