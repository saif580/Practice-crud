const express=require('express');
const app =express();

app.get('/',(req,res)=>{
    res.send("REstuful routes and crud operation without database");
})


app.listen(8000,()=>{
    console.log("listening");
})