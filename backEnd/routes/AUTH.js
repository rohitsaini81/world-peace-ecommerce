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
        }).status(200).json({"status":"Login Succes"});




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






AuthRoute.get('/api/auth/user/verify', async (req, res) => {
    
    console.log(req.cookies)
    if(req.cookies=="" || req.cookies==undefined){
        return res.status(400).send("Please Login")
    }
    const usertoken = req.cookies;

    const secretkey = process.env.JWT_SECRET_KEY
    const isVerifyed = jwt.verify(usertoken, secretkey)

    console.log(isVerifyed)
    // console.log(usertoken)
    res.send("user verifyed").status(400)
})

const verifyToken =(req, res, next)=>{
   
        const userToken = req.cookies;
        const secretkey = process.env.JWT_SECRET_KEY
    
        // const isVerifyed = jwt.verify(userToken, secretkey)
    
        console.log(userToken)
        // console.log(usertoken)
        res.send("user verifyed").status(400)
}

export default AuthRoute