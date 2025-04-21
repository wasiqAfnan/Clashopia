import React from "react";
import { Modal, Container, Card, Row, Col, Button } from "react-bootstrap";

function CardDetailsModal({ show, handleClose, card }) {
  if (!card) return null;

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered animation style={{transform: "none !important", transition: "none !important"}}>
      <Modal.Body>
        <Container className="mt-3">
          <Card className="p-4 shadow-lg">
            {/* Row for Images */}
            <Row className="justify-content-center text-center">
              <Col md={6}>
                <h5>Normal Troop</h5>
                <Card.Img
                  src={card.iconUrls?.medium || "/placeholder.jpg"}
                  alt={card.name}
                  className="troop-image"
                />
              </Col>

              {card.iconUrls?.evolutionMedium && (
                <Col md={6}>
                  <h5>Evolution</h5>
                  <Card.Img
                    src={card.iconUrls.evolutionMedium}
                    alt={`${card.name} Evolution`}
                    className="troop-image"
                  />
                </Col>
              )}
            </Row>

            {/* Title */}
            <Card.Title className="text-center fw-bold fs-2 mt-3">
              {card.name}
            </Card.Title>

            {/* Card Info */}
            <Row className="text-center card-details">
              <Col md={6}>
                <strong className="fs-5">Rarity:</strong>{" "}
                <span className="fs-5" style={{ textTransform: "capitalize" }}>
                  {card.rarity}
                </span>
              </Col>
              <Col md={6}>
                <strong className="fs-5">Elixir Cost:</strong>{" "}
                <span className="fs-5">{card.elixirCost}</span>
              </Col>

              {card.maxLevel && (
                <Col md={6}>
                  <strong className="fs-5">Max Level:</strong>{" "}
                  <span className="fs-5">{card.maxLevel}</span>
                </Col>
              )}

              {card.maxEvolutionLevel && (
                <Col md={6}>
                  <strong className="fs-5">Max Evolution Level:</strong>{" "}
                  <span className="fs-5">{card.maxEvolutionLevel}</span>
                </Col>
              )}
            </Row>

            {/* Close Button */}
            <div className="text-center mt-4">
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Card>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default CardDetailsModal;
