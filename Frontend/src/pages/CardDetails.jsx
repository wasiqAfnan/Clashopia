import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

function CardDetails() {
  const location = useLocation();
  const card = location.state?.card; // Get card data from state

  if (!card) {
    return <h2 className="text-center">No Card Data Found</h2>;
  }

  return (
    <Container className="mt-4">
      <Card className="p-4 shadow-lg">
        {/* Row for Images (Normal & Evolution) */}
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
                src={card.iconUrls?.evolutionMedium}
                alt={`${card.name} Evolution`}
                className="troop-image"
              />
            </Col>
          )}
        </Row>

        {/* Card Details */}

        {/* Card Name (Centered) */}
        <Card.Title className="text-center fw-bold fs-2 mt-3">
          {card.name}
        </Card.Title>

        {/* Card Details in a Horizontal Layout */}
        <Row className="text-center card-details">
          <Col md={6}>
            <strong className="fs-5">Rarity:</strong> <span className="fs-5" style={{textTransform: "capitalize"}}>{card.rarity}</span>
          </Col>
          <Col md={6}>
            <strong className="fs-5">Elixir Cost:</strong> <span className="fs-5">{card.elixirCost}</span>
          </Col>
          {card.maxLevel && (
            <>
              <Col md={6}>
                <strong className="fs-5">Max Level:</strong> <span className="fs-5">{card.maxLevel}</span>
              </Col>
            </>
          )}
          {card.maxEvolutionLevel && (
            <Col md={6}>
              <strong className="fs-5">Max Evolution Level:</strong> <span className="fs-5">{card.maxEvolutionLevel}</span>
            </Col>
          )}
        </Row>

        {/* Go Back Button */}
        <div className="text-center mt-4">
          <Button variant="primary" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default CardDetails;
