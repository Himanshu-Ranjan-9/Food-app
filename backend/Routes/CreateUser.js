
const express = require("express");
const router = express.Router();
const User = require('../models/UserSchema.js');
const { body, validationResult } = require('express-validator');
// import {Link , useNavigate} from 'react-router-dom';
// let navigate = useNavigate();
const jwtSecret = "tpoiuytrewqlkjhgCVFRTGBNH!@#$%^&"
const bcrypt = require ("bcryptjs");
const jwt = require ("jsonwebtoken")
router.post("/createuser", [
    body('email', "incorrect email").isEmail(),//exists
    body("name", "name is required").isLength({ min: 2 }),
    body('password', "incorrect password").isLength({ min: 6 })
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const salt = await bcrypt.genSalt(10);
        let securePassword = await bcrypt.hash(req.body.password,salt)

        try {
            // Check if the email already exists
            const existingUser = await User.findOne({ email: req.body.email });
            if (existingUser) {
                return res.status(400).json({ error: "Email already exists" });
            }

            // Create a new user
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: securePassword,
                location: req.body.location,
            });

            // Send success response
            return res.json({ success: true });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, error: "Internal Server Error" });
        }
    });
// ----------------------------------------------------------------------------------------------------------------
// //login Router
router.post("/loginuser",[
    body('email', "incorrect email").isEmail(),//exists
    body('password', "incorrect password").isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let inputEmail = req.body.email; //email that is entered by the user in login page of input
    let inputPassword = req.body.password;
    try {
        // Check if the email already exists
        const existingUser = await User.findOne({ email: req.body.email });
        const pwdcompare = await bcrypt.compare(inputPassword,existingUser.password)
        if (!existingUser || !pwdcompare ) {
            return  res.status(400).json({ error: "wrong email or password" });
        }
        else{

            const data = {
                user : {
                    id:existingUser.id
                }
            }
            const  authToken = jwt.sign(data,jwtSecret);
            return res.json({ success: true , authToken:authToken});// Send success response 
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});

module.exports = router;
