import express from 'express'
import './DB/conniction.js'
import { userRouter } from './src/Modules/User/user.routes.js'
import { messageRouter } from './src/Modules/Message/message.routes.js'


const app = express()
const port = 3000


app.use(express.json())

app.use("/user" , userRouter)
app.use("/message" , messageRouter)




app.use("*" , (req , res , next) =>{
    next(new AppError(req.originalUrl + "not found" , 404))
})


app.use((err , req , res , next) =>{
    const {message , statusCode} = err
    res.status(statusCode || 500).json({message})
}
)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))