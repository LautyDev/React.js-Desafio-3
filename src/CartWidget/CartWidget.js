import React from "react";
import './CartWidget.css'
import 'boxicons'

const CartWidget = () => {
    return(
        <div className='CartWidget'>
            <box-icon name='cart' type='solid' color='#fffefe' ></box-icon>
            <a href='/cart'>5</a>
        </div>
    )
}

export default CartWidget