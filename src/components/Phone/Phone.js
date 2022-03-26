import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Phone.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Phone = (props) => {
    const{addToCart,phone} = props;
    const{name,price,id,img} = phone;
    return (
        <div className='phone'>
           
            <img src={img} alt="" />
            <div className='phone-info'>
            <h2>Name: {name}</h2>
            <h3>Price: ${price}</h3>
            <h4>Id: {id}</h4>
            </div>
          
           <button  onClick={()=>addToCart(id)} className='btn'>Add To Cart 
             <FontAwesomeIcon className='btn-icon' icon={faShoppingCart}></FontAwesomeIcon>
            </button>

            

        


            

            
        </div>
    );
};



export default Phone;