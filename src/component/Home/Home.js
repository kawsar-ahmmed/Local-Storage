import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col lg={12} className='text-center mt-5'>
                <h1>This is hoome page</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;