const exp=require('express');
const app=exp();
app.use(exp.json())
app.post("/",(req,res)=>{
    const {name,age}=req.body;
    console.log(name,age);
    res.send("data received");
});
app.listen(3000,()=>{
    console.log("server started at port 3000");
})