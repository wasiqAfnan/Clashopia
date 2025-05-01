import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import CardItem from "./CardItem";
import Loader from "./Loader";

function CardList() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchCards(); // loads page 1
  }, []);


  // Fetch cards for a given page number
  const fetchCards = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://clashopia-6ihh.onrender.com/api/cards`, {
        params: { page, limit: 15 },
      });

      const newCards = response.data.data;
      console.log(newCards);
      

      // Prevent duplicates using Set

      if(newCards.length > 0){
        setCards((prevCards) => {
          const existingIds = new Set(prevCards.map((card) => card.id));
          const uniqueCards = newCards.filter((card) => !existingIds.has(card.id));
          return [...prevCards, ...uniqueCards];
        });

        if(newCards.length < 15){
          setHasMore(false);
        }
      }
      

      // If no new cards, we stop further loading
      if (newCards.length === 0) {
        setHasMore(false);
      } else {
        setPage((prev) => prev + 1); // Only increase if data comes
      }
    } catch (error) {
      console.error("Error fetching cards:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    fetchCards(); // will auto use latest `page` state
  };

  return (
    <Container>
      <h2 className="text-center my-4">Clash Royale Cards</h2>
      {loading && page === 1 ? (
        <Loader loading={loading} />
      ) : (
        <>
          <Row>
            {cards.map((card) => (
              <Col key={card.id} sm={12} md={6} lg={4}>
                <CardItem card={card} />
              </Col>
            ))}
          </Row>

          {hasMore && (
            <div className="text-center mt-4 mb-4">
              <Button variant="dark" onClick={handleLoadMore} disabled={loading}>
                {loading ? "Loading..." : "Load More"}
              </Button>
            </div>
          )}
        </>
      )}
    </Container>
  );
}

export default CardList;
