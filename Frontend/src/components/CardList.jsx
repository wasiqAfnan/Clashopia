import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios"; // Import Axios
import CardItem from "./CardItem";
import Loader from "./Loader"; // Import Loader


function CardList() {
  const [cards, setCards] = useState([]); // Store fetched cards
  const [loading, setLoading] = useState(true);

  // for Loader implementation
  const [page, setPage] = useState(1); // Track current page
  const [hasMore, setHasMore] = useState(true); // Track if more cards exist


  useEffect(() => {
    fetchCards(page); // Fetch initial data (page=1)
  }, []);

  // Function to fetch cards based on page
  const fetchCards = async (pageNum) => {
    setLoading(true);
    try {
      console.log(`Fetching: https://your-backend.com/api/cards?page=${pageNum}&limit=15`);
      const response = await axios.get(`https://clashopia.onrender.com/api/cards`, {
        params: { page: pageNum, limit: 15 }
      });
      console.log(response)
      if (response.data.data.length > 0) {
        setCards((prevCards) => [...prevCards, ...response.data.data]); // Append new cards
      } else {
        setHasMore(false); // No more cards to load
      }
    } catch (error) {
      console.error("Error fetching cards:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle Load More button click
  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchCards(nextPage);
  };

  return (
    <Container>
      <h2 className="text-center my-4">Clash Royale Cards</h2>
      {loading && page === 1 ? (
        <Loader loading={loading} /> // Show loader while fetching
      ) : (
        <>
          <Row>
            {cards.map((card, index) => (
              <Col key={`${card.id}-${index}`} sm={12} md={6} lg={4}>
                <CardItem card={card} />
              </Col>
            ))}
          </Row>

          {/* Load More Button - Only show if more cards exist */}
          {hasMore && (
            <div className="text-center mt-4">
              <Button variant="primary" onClick={handleLoadMore} disabled={loading}>
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
