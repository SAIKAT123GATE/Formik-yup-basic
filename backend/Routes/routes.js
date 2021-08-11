const express=require("express");
const usercontroller=require("../Controllers/usercontroller");
var router=express.Router();
router.route("/signup").post(usercontroller.signup);
router.route("/login").post(usercontroller.signup);
module.exports=router;
