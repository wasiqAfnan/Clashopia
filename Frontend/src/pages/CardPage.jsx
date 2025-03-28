import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // Import Axios
import { Container, Card } from "react-bootstrap";
import Loader from "../components/Loader";

function CardPage() {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/api/cards/${id}`);
        setCard(response.data);
      } catch (error) {
        console.error("Error fetching card:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCardDetails();
  }, [id]);

  return (
    <Container className="mt-5">
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <Card className="p-4">
          <Card.Img src={card.imageUrl} style={{ width: "200px" }} />
          <Card.Body>
            <Card.Title>{card.name}</Card.Title>
            <Card.Text>
              <strong>Elixir Cost:</strong> {card.elixirCost}
            </Card.Text>
            <Card.Text>{card.description}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default CardPage;
