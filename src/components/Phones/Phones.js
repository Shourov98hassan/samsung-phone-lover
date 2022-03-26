import { useState } from 'react';
import Cart from '../Cart/Cart';
import Phone from '../Phone/Phone';
import './Phones.css'

const Phones = () => {
    const phones = [
        { id: 0, name: 'samsung1', price: 50, img: 'https://www.notebookcheck.net/fileadmin/Notebooks/Samsung/Galaxy_A22_5G/4_zu_3_Samsung_Galaxy_A22_5G.jpg' },
        { id: 1, name: 'samsung2', price: 60, img: 'https://images.samsung.com/is/image/samsung/assets/bd/2201/home/PCD_Galaxy-S21-FE_KV_Merchandising_264X264.png?$264_264_PNG$' },
        { id: 2, name: 'samsung3', price: 70, img: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note7-usa.jpg' },
        { id: 3, name: 'samsung4', price: 80, img: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-quantum-2-sm-a826s.jpg' },
        { id: 4, name: 'samsung5', price: 90, img: 'https://static.digit.in/product/thumb_168773_product_td_300.jpeg' },
        { id: 5, name: 'samsung6', price: 100, img: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-note7-usa.jpg' },
        { id: 6, name: 'samsung7', price: 110, img: 'https://static-www.o2.co.uk/sites/default/files/product_images/samsung/samsung_galaxy_s7_32gb_gold_perfect_like_new/samsung_galaxy_s7_32gb_gold-sku-header.png' },
        { id: 7, name: 'samsung8', price: 120, img: 'https://www.mobiledokan.com/wp-content/uploads/2021/03/Samsung-Galaxy-A72-image.jpg' },
        { id: 8, name: 'samsung9', price: 130, img: 'https://images-eu.ssl-images-amazon.com/images/I/41wYWio6oML._SX220_.jpg' },
    ];

    const [cart, setCart] = useState([]);

    const addToCart = (phoneId) => {
        console.log(phones[phoneId].name);
        const newCart = [...cart, phoneId];

        if (cart.length === 4) {
            alert('you cannot select more than 4 items')
        }
        else {
            setCart(newCart)

        }
    };

    const chooseRandom = () => {
        const randomItem = Math.floor(Math.random() * cart.length)
        if (cart.length > 1) {
            setCart(cart[randomItem])
        }
        else {
            alert('nothing to choose from only one item')
        }
    }

    const handleReset = () => {
        console.log('reset');
        setCart([])
    }


    return (
        <div className='phones-container'>
            <div className="phone-container">
                {phones.map(phone => <Phone
                    phone={phone}
                    key={phone.id}
                    addToCart={addToCart}
                ></Phone>
                )}


            </div>

            <div className="cart-container">
                <Cart
                    cart={cart}
                    phones={phones}
                    chooseBtn={chooseRandom}
                    handleReset={handleReset}
                ></Cart>
            </div>

            <h1>How react works?<br />
               <span className='answer1'> Answer: </span> React works in declarative code. To show what we mean by declarative code, we want you to imagine the following code expressed as an app. What you picture could look like the screen below, with a navbar, a header, a filter, and a list. That's because each line of code declares what each element of the app is.

               <h2>what is the difference between state and props?</h2>
               <span className='answer1'>Props:</span>
               
               1.The Data is passed from one component to another.
               2.It is Immutable (cannot be modified).
               3.Props can be used with state and functional components.
               4.Props are read-only.
            
               <br />
               <br />

               <span className='answer1'>State:</span>
            


            </h1>

           
            

        </div>

       
    );
};



export default Phones;
