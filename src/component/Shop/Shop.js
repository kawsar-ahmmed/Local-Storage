import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
const handlAddToCart = (selectProduct) => {
    console.log(selectProduct, 'worked')
}
    return (
        <Container>
            <Row>
                {
                    Array.isArray(products) ? (
                        products.map((products) => (
                            <Product
                            key={products.id}
                            products={products}
                            />
                        ))
                    ) : (
                        <p>Loading...</p> // or any other appropriate loading indicator
                    )
                }
            </Row>
        </Container>
    );
};

export default Shop;