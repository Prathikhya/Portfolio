// import React from 'react'
import Product from './Product';
function ProductTab() {
  
  let description = ["fine","good","excelent","grand"];
  let styles = {
    "display": "flex",
    "width": "25px",
    "height": "250px"    
    
  }
  return (
    < >
    <div style={styles}>
    <Product title="laptop" idx={0} description={description[0]}/>
      <Product title="keyboard" idx={1} description={description[1]}/>
      <Product  title="mouse" idx={2} description={description[2]}/>
      <Product title="setup" idx={3} description={description[3]}/>
    </div>
      
    </>
  )
}

export default ProductTab
