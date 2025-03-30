import React from "react";
import "./CardItem.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardItem({ card }) {
  return (
    <Card bg="light" className="my-3 shadow-sm">
      <Card.Img
        variant="top"
        src={card.iconUrls.medium} // Ensure API provides the correct image URL
        alt={card.name}
        onError={(e) => (e.target.src = "/placeholder.jpg")} // Fallback image
      />
      <Card.Body>
        <Card.Title className="fw-bold">{card.name}</Card.Title>
        <Card.Text> Rarirty: <span className="fw-bold" style={{ textTransform: 'capitalize' }}>{card.rarity}</span></Card.Text>

        {/* Button to navigate to details page */}
        
        <Link to={`/card/${card.id}`} state={{ card }}>
          <Button variant="warning" className="mt-2">View Details</Button>
        </Link>  
              
      </Card.Body>
    </Card>
  );
}

export default CardItem;
