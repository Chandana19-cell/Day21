import PropTypes from 'prop-types';
import { notifybadge} from './cart.module.css'
import { useState } from 'react';
// import React from 'react';

function cart(props){

    const {imgURL, product_name, price, insale, onAddToCart, onRemoveFromCart} = props;
    // const [clicked, afterClicked] = useState(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    // const onBtnClick = ()=>{
    //     afterClicked(!clicked);
    // }

    const handleAddToCart = () => {
        setIsAddedToCart(true);
        onAddToCart();
      };
    
      const handleRemoveFromCart = () => {
        setIsAddedToCart(false);
        onRemoveFromCart();
      };
    

    return(

    <div className='card col-xl-2 col-xs-12 col-sm-12 col-md-4 col-lg-3' style={{ padding: '5px', margin:'5px', border:'1px solid black'}}>
        {insale ? <span className={notifybadge} >sale</span> : null}
        <img src={imgURL} className="card-img-top"  alt="Mobile" />
        {/* {insale ? <span className="badge text-bg-primary">insale</span> : null} */}
        {/* {   insale ? (
        <button type="button" className="btn btn-primary position-relative">
        {insale}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
        </span>
        <span className="visually-hidden">unread messages</span>
        </button>
        )
     : null} */}
     
        <div className="card-body">
        <h5 className="card-title">{product_name}</h5>
        <h5>{price}</h5>
        {/* <button href="#" className="btn btn-primary" onClick={onBtnClick}>
            {clicked ? "Add to cart" : "Remove from cart"}
            </button> */}

        {isAddedToCart ? (
          <button className="btn btn-danger" onClick={handleRemoveFromCart}>
            Remove from Cart
          </button>
        ) : (
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
        )}

    </div>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossOrigin="anonymous"></script>
    </div>
    )
}

cart.prototype = {
    imgURL : PropTypes.string.isRequired,
    product_name : PropTypes.string.isRequired,
    price : PropTypes.string.isRequired,
    insale : PropTypes.bool.isRequired,
    onAddToCart: PropTypes.func,
    onRemoveFromCart: PropTypes.func
}
   
export default cart;