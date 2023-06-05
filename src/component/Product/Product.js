import React from 'react';
import { Col } from 'react-bootstrap';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = ({ products }) => {
    const { name, price, pairImage } = products;
    const handleProduct = () => {
        console.log('clicked')
    }

    return (
        <Col lg={4} className='mt-5'>
            <div className="product-container">
                <div className="product-image">
                    <img src={pairImage} alt="" className='img-fluid' />
                </div>
                <div className="product-content">
                    <div className="prodecut-info">
                        <h2>{name}</h2>
                        <h3>${price}</h3>
                    </div>
                    <button onClick={handleProduct}><FontAwesomeIcon icon={faCartPlus} /></button>
                </div>
            </div>
        </Col>
    );
};

export default Product;