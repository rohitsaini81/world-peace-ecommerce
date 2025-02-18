import React from 'react'
import { useParams } from 'react-router-dom';
import Card from './Card';
import { CollectionImages } from './Images';
function Items() {
  const { category } = useParams();
  console.log(category)

  return (<>
    <div>Items</div>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. A recusandae nam exercitationem molestiae quis perspiciatis, beatae quae quasi iusto numquam provident iste et eius ipsam explicabo, optio eos aut non qui voluptatibus?
    <br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste provident explicabo aliquid amet exercitationem nobis, sapiente aliquam labore repellendus veritatis officiis consectetur esse! Consectetur autem molestiae corrupti tempore blanditiis expedita ea ipsa?

    {
      CollectionImages.map((data) =>
        <Card Data={data} type={category} />
    )
    }
  </>
  )
}

export default Items