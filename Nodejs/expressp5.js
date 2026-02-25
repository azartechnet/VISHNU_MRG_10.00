const exp=require('express');
const app=exp();
const PORT=3000;
app.get("/",(req,res)=>{
    res.send(`<div><h2>Welcome to Express JS</h2></div>`);
}).listen(PORT);
console.log(`Server started at port ${PORT}`);