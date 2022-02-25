import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

{
  /* <tr key={item.id}>
<td>{item.name}</td>
<td>{item.country}</td>
<td>{item.instock}</td>
<td>{`$${item.cost}`}</td> */
}

const ProdCard = ({ id, name, country, instock, cost, pic }) => {
  console.log('pic:');
  console.log(pic);
  return (
    <div className="m-3 p-1 prod-card" key={id}>
      <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={pic} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
        </Card.Body>
        <ListGroupItem>
          <span className="pull-left">Product: </span>
          <span className="pull-right">{name}</span>
        </ListGroupItem>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <span className="pull-left">Country of Origin:</span>
            <span className="pull-right">{country}</span>
          </ListGroupItem>
          <ListGroupItem>
            <span className="pull-left">Quantity on hand: </span>
            <span className="pull-right">{instock}</span>
          </ListGroupItem>
          <ListGroupItem>
            <span className="pull-left">Cost: </span>
            <span className="pull-right">{`$${cost}`}</span>
          </ListGroupItem>
          <ListGroupItem className="mx-auto">
            <Button variant="primary">Go somewhere</Button>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default ProdCard;
