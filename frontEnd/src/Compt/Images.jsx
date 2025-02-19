const images = [
    {
      title:"IT Enabled Services",
      about:"",
      imgURL:
        "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      imgAlt: "img-1"
    },
    {
      title:"Support Services",
      about:"",
      imgURL:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      imgAlt: "img-2"
    },
    {
      title:"Mobile Application Development",
      about:"",
      imgURL:
        "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      imgAlt: "img-3"
    },
    {
      title:"Website Designing",
      about:"",
      imgURL:
        "https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      imgAlt: "img-4"
    }
  ];
  
const  testimage = images[0].imgURL
import testimage2 from "../assets/shoes/shoes01.jpeg"
export {testimage,testimage2}
  
import shoesimage from "../assets/collections/shoes1.jpg"
import shoes2image from "../assets/collections/shoes2.jpg"
import  tshirtimage from "../assets/collections/tshirt.jpg"
import tshirtsimage from "../assets/collections/tshirts.jpg"
import pantshirtimage from "../assets/collections/pantshirt.jpg"
const CollectionImages = 
[
  {
    title:"Brand New Shoes",
    type: "shoes",
    about:"",
    imgURL:shoesimage,
    imgAlt: "img-1"
  },
  {
    title:"High Quality T-Shirts",
    type:"t-shirts",
    about:"",
    imgURL:tshirtimage,
    imgAlt: "img-2"
  },
  {
    title:"Top Pants and Shirts",
    type:"pant-shirts",
    about:"",
    imgURL:pantshirtimage,
    imgAlt: "img-2"
  },
]





import brandImage1 from "../assets/collections/cloths_and_shoes/bags.jpg"
import brandImage2 from "../assets/collections/cloths_and_shoes/bags2.jpg"
import brandImage3 from "../assets/collections/cloths_and_shoes/salesale.jpg"
import brandImage4 from "../assets/collections/cloths_and_shoes/cloths.jpg"
import brandImage5 from "../assets/collections/cloths_and_shoes/shoeswoman.jpeg"
import brandImage6 from "../assets/collections/cloths_and_shoes/shoesman.jpg"
const brandImages = 
[
  {
    title:"",
    about:"",
    imgURL:brandImage1,
    imgAlt: "img-2"
  },
  {
    title:"",
    about:"",
    imgURL:brandImage2,
    imgAlt: "img-2"
  },
  {
    title:"",
    about:"",
    imgURL:brandImage3,
    imgAlt: "img-2"
  },
  {
    title:"",
    about:"",
    imgURL:brandImage4,
    imgAlt: "img-2"
  },
  {
    title:"",
    about:"",
    imgURL:brandImage5,
    imgAlt: "img-2"
  },
  {
    title:"",
    about:"",
    imgURL:brandImage6,
    imgAlt: "img-2"
  },

]




import cartLogo from "../assets/cart-icon.png"

export default cartLogo
export {CollectionImages, brandImages};