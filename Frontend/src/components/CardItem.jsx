import React from "react";
import { Card, Button } from "react-bootstrap";

function CardItem({ card }) {
  return (
    <Card style={{ width: "18rem", marginBottom: "20px" }}>
      <Card.Img variant="top" src={card.imageUrl} />
      <Card.Body>
        <Card.Title>{card.name}</Card.Title>
        <Card.Text>Elixir Cost: {card.elixirCost}</Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
