
//model imports
const {Roles} = require("../Model/userRoles")



// METHOD -- POST 
// API http://localhost:5000/role



async function createRole(req,res){
    const {RoleName,status} = req.body;

    const roleNameCheck = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;

    if(roleNameCheck.test(RoleName)){

    const exists = await Roles.find({RoleName:RoleName.toLowerCase()})


    if (exists.length > 0 )   return res.send({"error":"role is already exist"})
    
        const newRole = await Roles.create(

        {
            RoleName:RoleName.toLowerCase(),
            status:status
        }
    )



    return res.send({"data":req.body})
}else{
    return res.send({"error":"role name contain only characterz"})
}
}


// METHOD -- GET 
// API http://localhost:5000/role
//des:  get all user roles

async function getAllRoles(req,res){
    
    const allRoles = await Roles.find();
    return res.send({"data":allRoles})
}

// METHOD -- DELETE 
// API http://localhost:5000/role/:rolename
//des:  delete single role

async function deleteRole(req,res){
    console.log(req.params.rolename)
    const delteRole = await Roles.deleteOne({RoleName:req.params.rolename})
    return res.send({"message":"role deleted successfully"})
}





module.exports = {createRole,getAllRoles,deleteRole}