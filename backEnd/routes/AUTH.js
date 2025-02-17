import express from 'express'
import jwt from 'jsonwebtoken';
import DBpool from '../models/Con.js';


const AuthRoute = express.Router();

const verifyPassword = async (email, password) => {
    const result = await DBpool.query(
        `SELECT * FROM Users WHERE email = $1`,
        [email]
    );
    const user = result.rows[0];


    if (result.rows.length == 0) {
        return res.status(400).json({ error: 'Email not found' });

    }

    if (user.password != password) {
        return res.status(400).json({ error: 'Incorrect Password' });
    }

}
AuthRoute.post('/api/auth/user/login', async (req, res) => {


    try {

        const { email, password } = req.body

        const result = await DBpool.query(
            `SELECT * FROM Users WHERE email = $1`, // $1 is the placeholder for the first parameter
            [email] // Array of values corresponding to placeholders
        );
        const user = result.rows[0];


        if (result.rows.length == 0) {
            return res.status(400).json({ error: 'Email not found' });
        }

        if (user.password != password) {
            return res.status(400).json({ error: 'Incorrect Password' });
        }





        console.log("correct password")
        const secretkey = process.env.JWT_SECRET_KEY
        const user_id = email;
        const data = {
            date: Date(),
            userId: user_id
        }
        const userToken = jwt.sign(data, secretkey)


        res.cookie('token', userToken, {
            httpOnly: true,  // Cannot be accessed via JavaScript (protects from XSS)
            secure: true,    // Only sent over HTTPS (protects from MITM attacks)
            sameSite: 'Strict', // Prevents sending cookies on cross-site requests
        }).status(200).json({ "status": "Login Succes" });




    } catch (error) {
        res.send(error)

    }





})


AuthRoute.post('/api/auth/user/register', async (req, res) => {

    const secretkey = process.env.JWT_SECRET_KEY
    const { Name, age, email, password, gender } = req.body;

    // Validate the input data
    if (!Name || !age || !email || !password || gender === undefined) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    if (typeof age !== 'number') {
        return res.status(400).json({ error: 'Age must be a number' });
    }
    if (typeof gender !== 'boolean') {
        return res.status(400).json({ error: 'Gender must be true or false' });
    }

    try {

        const result = await DBpool.query(
            'INSERT INTO Users (name, age, email, password, gender) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [Name, age, email, password, gender]
        );



        const data = {
            date: Date(),
            userId: email
        }
        const userToken = jwt.sign(data, secretkey)
        res.status(200).cookie('sessionToken', userToken, {
            httpOnly: true,  // Cannot be accessed via JavaScript (protects from XSS)
            secure: true,    // Only sent over HTTPS (protects from MITM attacks)
            // sameSite: 'Strict', // Prevents sending cookies on cross-site requests
        }).send("register succes");

    } catch (err) {


        if (err.code === '23505') {  // PostgreSQL error code for unique violation
            res.status(400).json({ error: 'Email already exists' });
        } else {
            console.error('Error inserting user:', err);
            res.status(500).json({ error: 'Failed to create user' });


        }
    }


})






AuthRoute.get('1/api/auth/user/verify', async (req, res) => {


    try {

        if (!req.cookies) {
            return res.status(400).send("Please Login")
        }



        const usertoken = req.cookies;
        const secretkey = process.env.JWT_SECRET_KEY
        const isVerifyed = jwt.verify(usertoken.token, secretkey)
        console.log(isVerifyed)
        res.send("user verifyed").status(200)
    } catch (error) {
        res.send("login please").status(400)
    }
})



AuthRoute.get("/*",(req,res,next)=>{
    try {

        if (!req.cookies) {
            // return res.status(400).send("Please Login")
            // return res.redirect("/api/auth/user/login")
            return res.redirect("/")

        }
        const usertoken = req.cookies;
        const secretkey = process.env.JWT_SECRET_KEY
        const isVerifyed = jwt.verify(usertoken.token, secretkey)
        if(req.path=="/login" && isVerifyed){
            res.redirect("/dashboard")
        }else if(isVerifyed) next();

    } catch (error) {
        console.log(error)
        res.redirect("/")
    }
})

export default AuthRoute
