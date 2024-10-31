const express = require("express");

const app = express();

require("dotenv").config();


// middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}))

// Connection

const {DbConnection} = require("./Config/Db")



// controllers

const {createRole,getAllRoles} = require("./Controllers/RolesController")


app.route('/role').get(getAllRoles).post(createRole)





app.listen(process.env.PORT,function(){
    console.log(`Server is running on the PORT ${process.env.PORT}`)
    DbConnection();
})