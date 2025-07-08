import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { Card, Row, Col } from 'react-bootstrap';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products/')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <>
      <h2 className="mb-3">Available Products</h2>
      <Row>
        {products.map(prod => (
          <Col key={prod.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Text>₹{prod.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductList;
