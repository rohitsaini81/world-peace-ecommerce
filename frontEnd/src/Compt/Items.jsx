import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Card from './Card';
import { CollectionImages, testimage, testimage2 } from './Images';
function Items() {
  const { category } = useParams();
  console.log(category)

  return (<>
    <div className='flex just-items' style={{ width: '80vw', marginTop: "6em", overflowX: "scroll" }}>
      <Link to="/item/:id"><ItemCard /> </Link>
      <Link to="/item/:id"><ItemCard /> </Link>
      <Link to="/item/:id"><ItemCard /> </Link>
      <Link to="/item/:id"><ItemCard /> </Link>
      <Link to="/item/:id"><ItemCard /> </Link>
      <Link to="/item/:id"><ItemCard /> </Link>
      <Link to="/item/:id"><ItemCard /> </Link>
      <Link to="/item/:id"><ItemCard /> </Link>
    </div>


    <div className='flex just-items' style={{ width: '80vw', marginTop: "6em", overflowX: "scroll" }}>
      <Link to="/item/:id"><ItemCard /> </Link>
      <Link to="/item/:id"><ItemCard /> </Link>
      <Link to="/item/:id"><ItemCard /> </Link>
      <Link to="/item/:id"><ItemCard /> </Link>
      <Link to="/item/:id"><ItemCard /> </Link>
      <Link to="/item/:id"><ItemCard /> </Link>
      <Link to="/item/:id"><ItemCard /> </Link>
      <Link to="/item/:id"><ItemCard /> </Link>

    </div>
  </>
  )
}




import "../Css/Items.css"

function ItemCard() {
  return (

    <div className="itemCard boxShadow">
      <div className="part" style={{ height: "50%" }}>
        <img src={testimage2} style={{ objectFit: "cover" }} alt="image" />
      </div>
      <div className="part detail-part" style={{ height: "50%" }}>
        <h4 className='left-title'>Brand</h4>
        <p className='p-title'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum praesentium possimus rem tempora nemo quo. Reiciendis magnam excepturi!</p>
        <div className="left-title price"><p>₹500</p></div>
        <div className="left-title size">
          <span className='span-m'>SIZE</span>
          <div className="flex">
            <span className="span-m">7,</span>
            <span className="span-m">8,</span>
            <span className="span-m">9,</span>
            <span className="span-m">10</span>
          </div>
        </div>
      </div>
    </div>

  )
}


export default Items;