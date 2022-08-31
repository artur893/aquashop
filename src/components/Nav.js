import './nav.css'
import { Cart } from './Cart.js'
import { useState, useEffect } from 'react'

const Nav = (props) => {
    const cart = props.sendToCart
    return (
        <nav>
            <ul className="navlist">
                <li>Home</li>
                <li>Products</li>
                <li>Contact</li>
                <Cart sendCart={cart}/>
            </ul>
        </nav>
    )
}

export { Nav }