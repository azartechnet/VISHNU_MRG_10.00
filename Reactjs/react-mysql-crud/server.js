const express=require('express')
const mysql=require('mysql')
const bodyparse=require('body-parser')
const cors=require('cors')

const app=express()
const port=3001;

//Middleware

app.use(cors())
app.use(bodyparse.json())

//Mysql
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'vishnudb'
})
db.connect((err)=>{
    if(!err)
    {
        console.log('Db Connected..')
    }
    else
    {
        console.log('Db not Connected')
    }
})
//create table
app.get("/createtable", (req, res) => {
    let sql = 'create table posts(id int auto_increment,title varchar(100),body text,primary key(id))';
    db.query(sql, (err, results) => {
        if (!err)
            console.log('Table created')
        res.send('Table Created..')
    })
   
})
app.listen(port,()=>{
    console.log("Server is Running...")
})