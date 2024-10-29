const mongoose = require("mongoose");


const userRole_MOdel = mongoose.Schema(

    {

        RoleName:{
            type:String,
            required:[true,"Role name must be enter"],
            
        },

        status:{
            type:String,
            required:[true,"status must be there"]
        }
        
    }
)  
        

module.exports = mongoose.model("Roles",userRole_MOdel)
      





