const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");


// router.get("/", (req, res)=>{
//     console.log("connect");
// });


//register user

router.post("/register",async(req,res)=>{   
    // console.log(req.body);
    const {name,email,age,mobile,work,add,desc} = req.body;
    if(!name || !email || !age || !mobile || !work || !add || !desc){
        res.status(404).json("plz fill the data");
    }
    
    try {
        

        const preuser = await users.findOne({email:email});

        if(preuser){
            res.json({code : 404, message : "The User is already exist..."});
        }else{
            const adduser = new users({
                name,email,age,mobile,work,add,desc
            });

            await adduser.save();
            res.json({code : 200, message : "New User added..."});
        }

    } catch (error) {
        res.status(422).json(error)
    }
})


//get userdata

router.get("/getdata",async(req,res)=>{
    try {
        const userdata = await users.find();
        res.status(201).json(userdata);
    } catch (error) {
        res.status(404).json(error);
    }
})

router.get("/getuser/:id",async(req,res)=>{
    try {
        const user_id = req.params.id;
        const userdata = await users.findById(user_id);
        res.status(201).json(userdata);
    } catch (error) {
        res.status(404).json(error);
    }
})

//update userdata

router.patch("/updateuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateuser = await users.findByIdAndUpdate(id,req.body,{
            new:true
        })

        console.log(updateuser);
        res.status(201).json(updateuser);

    } catch (error) {
        res.status(422).json(error);
    }
})



// delete user
router.delete("/deleteuser/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deleteuser = await users.findByIdAndDelete({_id:id})
        console.log(deleteuser);
        res.status(201).json(deleteuser);

    } catch (error) {
        res.status(422).json(error);
    }
})



module.exports = router;