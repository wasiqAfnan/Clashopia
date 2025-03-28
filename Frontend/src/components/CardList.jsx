import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios"; // Import Axios
import CardItem from "./CardItem";
import Loader from "./Loader"; // Import Loader

function CardList() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:5050/api/cards"); // API Endpoint
        console.log(response.data.data)
        setCards(response.data.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return (
    <Container>
      <h2 className="text-center my-4">Clash Royale Cards</h2>
      {loading ? (
        <Loader loading={loading} /> // Show loader while fetching
      ) : (
        <Row>
          {cards.map((card) => (
            <Col key={card.id} sm={12} md={6} lg={4}>
              <CardItem card={card} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default CardList;
