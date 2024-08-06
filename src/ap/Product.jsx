// import React from 'react'
import './Product.css';
import Price from './Price';


function Product({title, idx, description}) {
  let oldprice = ["12,000","50000","2304","1230"];
  let newprice = ["10,000","20000","2000","1250"];
  let styles = {
    "backgroundColor": "lightblue",
    "padding" : "3rem"
  }
  return (
    <>
    <div className='product' style={styles}>
      <h1>{title}</h1>
      <p>{description}</p>
      <Price oldprice={oldprice[idx]} newprice={newprice[idx]}/>
    </div>
    </>
    
  )
}

export default Product
