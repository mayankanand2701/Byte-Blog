const {Router}=require("express");
const router=Router();
const User=require("../models/user");

router.get("/siginin",(req,res)=>{
    return res.render("signin");
});


router.get("/signup",(req,res)=>{
    return res.render("signup");
});

router.post("/siginup",async(req,res)=>{
    const {fullName,email,password}=req.body;
    await User.create({
        fullName,
        email,
        password,
    });
    return res.redirect("/");
});

module.exports=router;