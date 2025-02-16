import express from 'express'
const router = express.Router();

router.get('/get',async(req,res)=>{
    const data = await fetch('https://dummyjson.com/carts')
    .then(res => res.json());

    res.send(data)
})

export default router;