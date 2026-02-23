//delayed Response

const e1=require("express");
const app=e1();

app.get("/",(req,res)=>{
    setTimeout(()=>{
        res.send("Hello World");
    },5000);
}
);
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});