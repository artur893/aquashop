import { useState, useEffect } from 'react'
import cartimg from '../images/cart.svg'
import './cart.css'

const Cart = (props) => {
    const cart = props.sendCart

    return (
        <div className="cart"><img src={cartimg} alt='cart symbol'></img><span>{cart.length}</span></div>
    )
}

const OneProduct = (props) => {
    return (<div>{props.name} Price: {props.price}</div>)
}

const InsideCart = (props) => {
    const cart = props.sendCart

    return (
        <div className='insidecart'>{cart.map(product => <OneProduct name={product.name} price={product.price} key={product.id}/>)}</div>
    )
}

export { Cart, InsideCart }