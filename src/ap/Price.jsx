import './Price.css';

function Price({oldprice, newprice}) {
  return (
    <>
    <div className="price">
    <span>{oldprice}</span>{" "}
    <span>{newprice}</span>
    </div>
    
    </>
  )
}

export default Price;
