import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import ProductList from './pages/ProductList';
import SubscriptionPage from './pages/SubscriptionPage';

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/">EatZoid</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Products</Nav.Link>
            <Nav.Link as={Link} to="/subscribe">Subscriptions</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/subscribe" element={<SubscriptionPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
