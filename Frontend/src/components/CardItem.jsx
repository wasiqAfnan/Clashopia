import React from "react";
import { Card } from "react-bootstrap";

function CardItem({ card }) {
  return (
    <Card className="my-3 shadow-sm">
      <Card.Img
        variant="top"
        src={card.image} // Ensure API provides the correct image URL
        alt={card.name}
        onError={(e) => (e.target.src = "/placeholder.jpg")} // Fallback image
        style={{ height: "200px", objectFit: "cover" }} // Ensure consistent size
      />
      <Card.Body>
        <Card.Title>{card.name}</Card.Title>
        <Card.Text>{card.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
