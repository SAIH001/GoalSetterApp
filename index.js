const express = require("express");

const app = express();

require("dotenv").config();

// Connection

const {DbConnection} = require("./Config/Db")



// model

const {Roles} = require("./Model/userRoles")



app.listen(process.env.PORT,function(){
    console.log(`Server is running on the PORT ${process.env.PORT}`)
    DbConnection();
})