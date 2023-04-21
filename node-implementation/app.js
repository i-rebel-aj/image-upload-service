const express=require('express')
const morgan=require('morgan')
const app=express()


app.use(morgan(":method :url :status :res[content-length] - :response-time ms"))

//Health Route
app.get('/health', (req, res)=>{
    return res.status(200).json({message: 'Service Running'})
})


//Upload Image Route
app.post('/upload', (req, res)=>{
    console.log('req', req)
    return res.status(200).json({message: 'Okay'})
})



app.listen(3000, ()=>{
    console.log('Server Started At Port 3000')
})