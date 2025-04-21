import React, {useState} from "react";
import "./CardItem.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardDetailsModal from "./cardDetailsModal";

function CardItem({ card }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  
  const handleShowModal = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };
  

  return (
    <>
      <Card className="mb-4 shadow-sm">
        <Card.Img
          variant="top"
          src={card.iconUrls?.medium || "/placeholder.jpg"}
          alt={card.name}
          style={{ height: "200px"}}
        />
        <Card.Body>
          <Card.Title className="fw-bold">{card.name}</Card.Title>
          <Card.Text>
            Rarity: <span className="fw-bold" style={{ textTransform: "capitalize" }}>{card.rarity}</span>
          </Card.Text>
          <Button variant="warning" onClick={() => setShowModal(true)}>
            View Details
          </Button>
        </Card.Body>
      </Card>

      {/* Modal */}
      <CardDetailsModal
        show={showModal}
        onHide={() => setShowModal(false)}
        handleClose={handleCloseModal}
        card={card}
      />
    </>
  );
}

export default CardItem;
