import { useState, useEffect } from 'react'
import cartimg from '../images/cart.svg'
import './cart.css'
import uniqid from 'uniqid'

const Cart = (props) => {
    const cart = props.sendCart

    const addActiveClassBasket = () => {
        const basket = document.querySelector('.insidecart')
        basket.classList.toggle('active')
    }

    const totalQuantity = () => {
        if (cart !== undefined) {
            const quantities = cart.map(product => product.quantity)
            let totalQuantity = 0
            quantities.forEach(quantity => {
                totalQuantity = totalQuantity + quantity
            })
            const fixedQuantities = totalQuantity.toFixed(0)
            return fixedQuantities
        }
    }

    return (
        <div className="cart" onClick={addActiveClassBasket}><img src={cartimg} alt='cart symbol'></img><span>{totalQuantity()}</span></div>
    )
}

const OneProduct = (props) => {
    return (<div className='productincart'>
        <div className='name'>{props.name}</div>
        <div className='price'>Price: {props.price} $</div>
        <div className='quantity'>Quantity: {props.quantity}</div>
    </div>)
}

const TotalCart = (props) => {
    const cart = props.sendCart
    const [total, setTotal] = useState({ price: 0, quantity: 0 })

    const updateTotal = () => {
        const price = totalPrice()
        const quantity = totalQuantity()
        const newTotal = { price: price, quantity: quantity }
        setTotal(newTotal)
    }

    const totalPrice = () => {
        const prices = cart.map(product => product.price * product.quantity)
        let totalPrice = 0
        prices.forEach(price => {
            totalPrice = price + totalPrice
        })
        const fixedPrice = totalPrice.toFixed(2)
        return fixedPrice
    }

    const totalQuantity = () => {
        const quantities = cart.map(product => product.quantity)
        let totalQuantity = 0
        quantities.forEach(quantity => {
            totalQuantity = totalQuantity + quantity
        })
        const fixedQuantities = totalQuantity.toFixed(0)
        return fixedQuantities
    }

    const thank = () => { alert('Thank you for testing!') }

    useEffect(() => {
        updateTotal()
    }, [cart])

    return (<div className='totalprice'>
        <div className='price'>Total price: <b>{total.price} $</b></div>
        <div className='quantitysum'>Total quantity: <b>{total.quantity}</b></div>
        <button className='ordernow' onClick={thank}>ORDER NOW!</button>
    </div>)
}

const InsideCart = (props) => {
    const cartTemporary = props.sendCart
    const [cart, setCart] = useState([])


    useEffect(() => {
        setCart(cartTemporary)
    }, [cartTemporary])


    return (

        <div className='insidecart'>
            {cartTemporary.map(product => <OneProduct name={product.name} price={product.price} quantity={product.quantity} key={uniqid()} />)}
            <TotalCart sendCart={cart} />
        </div>
    )
}

export { Cart, InsideCart }