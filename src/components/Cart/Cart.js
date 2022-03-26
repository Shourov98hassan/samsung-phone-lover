import './Cart.css'

const Cart = ({ phones, cart, chooseBtn, handleReset }) => {
    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <h2>Selected Phone:</h2>
            <ul>
                {Array.isArray(cart) ? cart.map((item) => (
                    <li>{phones[item].name}</li>
                )) : (
                    <li>{phones[cart].name}</li>
                )}
            </ul>
            <input type='button' onClick={chooseBtn} className='choose-btn' value='Choose One' />
            <button className='reset' onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Cart