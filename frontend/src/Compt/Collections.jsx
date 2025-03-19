import React from 'react'
import { CollectionImages } from './Images';
import { Link } from 'react-router-dom';
import Items from './Items';
import Card from './Card';

function Collections() {
  return (
    <>
    <div className='container'>
		{CollectionImages.map((data,index)=>
		<Link to={`/items/${data.type}`} key={index}><Card Data={data} type="collections" /></Link>
		)}


    </div>

     </>
  )
}

export default Collections







