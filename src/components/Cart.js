import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Cart = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <i className="bi bi-cart-fill"></i>
          </Accordion.Header>
          <Accordion.Body>
            Apple <i className="bi bi-cart-fill"></i>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Cart;
