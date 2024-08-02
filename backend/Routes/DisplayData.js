const express = require("express");
const router = express.Router();

router.post("/foodData",(req,res)=>{
    try {
        res.send(global.food_items);
        
    } catch (error) {
        // console.error("Error connecting to database to display data: ", error);
        res.send("Server Error")
        
        
    }
})
module.exports = router;