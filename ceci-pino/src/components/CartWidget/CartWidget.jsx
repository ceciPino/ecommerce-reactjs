import {cart} from './assets/cart.svg'
function CartWidget() {
    return (
        <div>
            <img src={cart} alt="cart-widget" />
         <span>0</span>
        </div>
    )
}

export default CartWidget