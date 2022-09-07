import './nav.css'
import { Cart } from './Cart.js'
import { useState, useEffect } from 'react'

const Nav = (props) => {
    const cart = props.sendToCart
    return (
        <nav>
            <ul className="navlist">
                <li><a href='/'>Home</a></li>
                <li><a href='/products'>Products</a></li>
                <li><a href='/contact'>Contact</a></li>
                <Cart sendCart={cart}/>
            </ul>
        </nav>
    )
}

export { Nav }