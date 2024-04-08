import express from "express";
import db from "./database/db.js";
import cors from "cors";

const app = express();
app.use(express.json())
app.use(cors())

app.get('/api/reduxuser', (req,res) => {
    const sql = "SELECT * FROM tbl_user WHERE status= 1";
    db.query(sql, (err,data) => {
        if(!err){
                res.send(data);
        }
        else{
            console.log(err)
        }
    })
    
})

app.post("/api/addreduxuser", (req,res) => {
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;
    const status = 1;


    var sql = `INSERT INTO tbl_user (username,email,phone,address,status) VALUES ("${username}","${email}","${phone}","${address}","${status}")`
    db.query(sql, (err,result) => {
        if(!err){
            res.status(200).json({success: "User Record Inserted Successfully!"})
    } 
    else{
        console.log(err)
    }

    })


})




app.listen(8800, () => console.log("Connected to node_api!"))



