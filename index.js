const express = require("express");

const app = express();

require("dotenv").config();


// middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}))

// Connection

const {DbConnection} = require("./Config/Db")



// controllers

const {createRole,getAllRoles,deleteRole} = require("./Controllers/RolesController")

// [METHOD : GET , POST ] USER ROLES 
app.route('/role').get(getAllRoles).post(createRole)

// [METHOD : DELETE , UPDATE ] USER ROLES 
app.route("/role/:rolename").delete(deleteRole)





app.listen(process.env.PORT,function(){
    console.log(`Server is running on the PORT ${process.env.PORT}`)
    DbConnection();
})