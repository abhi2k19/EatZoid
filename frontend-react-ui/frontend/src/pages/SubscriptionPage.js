import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import { Form, Button, Card } from 'react-bootstrap';

const SubscriptionPage = () => {
  const [boxes, setBoxes] = useState([]);
  const [selectedBox, setSelectedBox] = useState('');

  useEffect(() => {
    axios.get('/api/subscriptions/boxes/')
      .then(res => setBoxes(res.data))
      .catch(err => console.error('Failed to load boxes', err));
  }, []);

  const handleSubscribe = () => {
    axios.post('/api/subscriptions/', {
      user: 1,
      box: selectedBox,
      start_date: new Date().toISOString().slice(0, 10),
      status: "Active"
    }).then(() => alert("Subscribed!"))
      .catch(err => console.error("Subscription error", err));
  };

  return (
    <Card className="p-4">
      <h2 className="mb-3">Subscribe to a Box</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Select a Subscription Box</Form.Label>
          <Form.Select onChange={(e) => setSelectedBox(e.target.value)}>
            <option value="">-- Select a box --</option>
            {boxes.map(box => (
              <option key={box.id} value={box.id}>
                {box.name} - ₹{box.price}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button variant="primary" onClick={handleSubscribe} disabled={!selectedBox}>
          Subscribe
        </Button>
      </Form>
    </Card>
  );
};

export default SubscriptionPage;
