import express from 'express'

const app= express()
const PORT  = process.env.PORT ?? 8000

app.get('/',(req,res)=>{
    res.send({message:"Server is healthy v4" , status:'GitHub Actions'})
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})