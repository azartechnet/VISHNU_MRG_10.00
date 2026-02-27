const exp=require('express');
const app=exp();
const PORT=3000;

const r1=exp.Router();
const r2=exp.Router();
const r3=exp.Router();

r1.get("/user",function(req,res){
    res.send("User Route");
});

r2.get("/product",function(req,res){
    res.send("Product Route");
});
r3.get("/order",function(req,res){
    res.send("Order Route");
});

app.use("/",r1);
app.use("/",r2);
app.use("/",r3);
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
