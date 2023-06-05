import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handlAddToCart = (selectedProduct) => {
        setCart([selectedProduct])
    }
    console.log(cart)

    const handleClearCart = () => {
        console.log('Cart clear')
    }
    return (
        <Container>
            <Row>
                <Col lg={9}>
                    <Row>
                        {
                            products.map((products) => (
                                <Product
                                    key={products.id}
                                    products={products}
                                    handlAddToCart={handlAddToCart}
                                />
                            ))
                        }
                    </Row>
                </Col>
                <Col lg={3} className='mt-5'>
                    <Cart
                        cart={cart}
                        products={products}
                        handleClearCart={handleClearCart}
                    ></Cart>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;