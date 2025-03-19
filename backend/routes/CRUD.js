import express from 'express'
const router = express.Router();

router.get('/api/',async(req,res)=>{
    const data = await fetch('https://dummyjson.com/carts')
    .then(res => res.json());

    res.send(data)
})




router.get('/api/collections/:type',async(req,res)=>{
    console.log(req.params.type)
    const data = await fetch('https://fakestoreapi.com/products/category/men%27s%20clothing')
    .then(res => res.json());

    res.send(data)
})



router.get('/api/product/:id',async(req,res)=>{
    const id = req.body.id;
    const data = await fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json());

    res.send(data)
})



export default router;