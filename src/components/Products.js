import { Nav } from './Nav'
import { InsideCart } from './Cart';
import { useEffect, useState } from 'react';
import './products.css'
import image0 from '../images/f0.jpg'
import image1 from '../images/f1.jpg'
import image2 from '../images/f2.jpg'
import image3 from '../images/f3.jpg'
import image4 from '../images/f4.jpg'
import image5 from '../images/f5.jpg'
import image6 from '../images/f6.jpg'
import image7 from '../images/f7.jpg'
import add from '../images/add.svg'



const Product = (props) => {
    return (
        <div className='card'>
            <div className='buynow'>
                <img src={add} alt="plus symbol"></img>
                <p>Buy now!</p>
            </div>
            <img src={props.img} alt="aquarium fish" data-id={props.id} onClick={props.onClick} />
            <p className='title'>{props.title}</p>
            <p className='price'>{props.price} $</p>
        </div>
    )
}
const Products = (props) => {
    const initialProducts = [
        { id: 0, name: "Fish - Betta splendens - Plakat Koi - Siamese fighting fish", image: image0, price: 23.17, quantity: 1 },
        { id: 1, name: "Fish - Betta splendens - Plakat - Siamese fighting fish", image: image1, price: 10.12, quantity: 1 },
        { id: 2, name: "Fish - Phenacogrammus interruptus - Congo tetra", image: image2, price: 5.19, quantity: 1 },
        { id: 3, name: "Fish - Thayeria boehlkei - Pinguin tetra", image: image3, price: 1.31, quantity: 1 },
        { id: 4, name: "Fish - Pterophyllum scalare - Angelfish", image: image4, price: 5.77, quantity: 1 },
        { id: 5, name: "Fish - Boeseman's rainbowfish Melanotaenia - Boesemani", image: image5, price: 4.90, quantity: 1 },
        { id: 6, name: "Fish - Ram cichlid - Mikrogeophagus ramirezi", image: image6, price: 4.61, quantity: 1 },
        { id: 7, name: "Fish - Corydoras aeneus sp.black venezuela", image: image7, price: 2.87, quantity: 1 },

    ]
    const [products, setProducts] = useState(initialProducts)
    const [toCart, setToCart] = useState([])

    const getProductId = (e) => {
        const idString = e.target.dataset.id
        const id = Number(idString)
        return id
    }

    const getProductById = (e) => {
        const id = getProductId(e)
        const itemFound = products.find(product => product.id === id)
        const foundedOrNot = toCart.some(product => product.id === itemFound.id)
        if (foundedOrNot === false) {
            setToCart([...toCart, itemFound])
        }
        else {
            const index = toCart.find(product => product.id === itemFound.id)
            const newCart = toCart.map(cart => {
                if (cart.id === index.id) {
                    cart.quantity = cart.quantity + 1
                    return cart
                }
                return cart
            })
            setToCart(newCart)
        }

    }

    return (
        <div className="products">
            <Nav sendToCart={toCart} />
            <InsideCart sendCart={toCart} />
            <div className='container'>{products.map((product) => <Product onClick={getProductById} title={product.name} img={product.image} price={product.price} id={product.id} key={product.id} />)}</div>
        </div>
    );
};

export default Products;