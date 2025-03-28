import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardItem from "./CardItem";

function CardList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/cards") // Replace with your API URL
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching cards:", error));
  }, []);

  return (
    <Container>
      <h2 className="text-center my-4">Clash Royale Cards</h2>
      <Row>
        {cards.map((card) => (
          <Col key={card.id} sm={12} md={6} lg={4}>
            <CardItem card={card} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardList;
