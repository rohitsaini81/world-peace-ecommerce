// import React from 'react'
import {  Link, useParams } from 'react-router-dom';
// import Card from './Card';
import { useEffect, useState } from 'react';
import axios from 'axios'
// import { testimage2 } from './Images';
import { sendScrapeRequest } from '../App';
// let item_data;
function Items() {
  const { category } = useParams();
  const targetUrl = 'http://localhost:4000/scrape';

  const [items,setItems] = useState([])
  useEffect(()=>{
    async function sendScrapeRequest() {
      try {
          const response = await axios.post(targetUrl, {
              searchQuery: category,
              minPrice: 0,
              maxPrice: 80000,
              // brand: "HP"
          }, {
              headers: {
                  "Content-Type": "application/json"
              }
          });
  
          // console.log('Response:', response.data);
          setItems(response.data._data)
          return response
      } catch (error) {
        console.log("error ?")
          console.log ('Error:', error.response ? error.response.data : error.message);
      }
  }
  sendScrapeRequest();
  },[])


  console.log('Response:', items);


  return (<>
    <div className='flex just-items' style={{ width: '80vw', marginTop: "6em", overflowX: "scroll" }}>
      {/* <Link to="/item/:id"><ItemCard /> </Link> */}
      {
        items.length>0?items.map((obj,index) =><ItemCard key={index} title={obj.title} image={obj.image} price={obj.price}/>):
        <div></div>
      }

      
    </div>


    <div className='flex just-items' style={{ width: '80vw', marginTop: "6em", overflowX: "scroll" }}>
      {/* <Link to="/item/:id"><ItemCard /> </Link> */}

      {
        items.length>0?items.map((obj,index) =><ItemCard key={index} title={obj.title} image={obj.image} price={obj.price}/>):
        <div></div>
      }
    </div>
  </>
  )
}




import "../Css/Items.css"

function ItemCard(props) {
  return (

    <div className="itemCard boxShadow">
      <div className="part" style={{ height: "50%" }}>
        <img src={props.image} style={{ objectFit: "cover" }} alt="image" />
      </div>
      <div className="part detail-part" style={{ height: "50%" }}>
        <h4 className='left-title'>_____________</h4>
        <p className='p-title'>{props.title}</p>
        <div className="left-title price"><p>{props.price}</p></div>
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