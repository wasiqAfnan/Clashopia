import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import CardItem from "./CardItem";
import Loader from "./Loader";

import { InputGroup, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

import { FaArrowUp } from "react-icons/fa";



function CardList() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchMode, setSearchMode] = useState(false);
  const [showGoUp, setShowGoUp] = useState(false);



  useEffect(() => {
    fetchCards(); // loads page 1
  }, []);


  // Fetch cards for a given page number
  const fetchCards = async (pageParam = page) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://clashopia-6ihh.onrender.com/api/cards`, {
        params: { page: pageParam, limit: 15 },
      });

      // const response = await axios.get(`http://localhost:5050/api/cards`, {
      //   params: { page: pageParam, limit: 15 },
      // });

      const newCards = response.data.data;
      // console.log(response.data);


      // Prevent duplicates using Set

      if (newCards.length > 0) {
        // If it's the first page (reset), replace cards entirely
        if (pageParam === 1) {
          setCards(newCards);
        } else {
          setCards((prevCards) => {
            const existingIds = new Set(prevCards.map((card) => card.id));
            const uniqueCards = newCards.filter((card) => !existingIds.has(card.id));
            return [...prevCards, ...uniqueCards];
          });
        }

        if (newCards.length < 15) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }
      } else {
        setHasMore(false);
      }

      // Update the page state only if not search reset
      setPage(pageParam + 1);

    } catch (error) {
      console.error("Error fetching cards:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    setShowGoUp(true);
    fetchCards(); // will auto use latest `page` state
  };

  const handleSearchClick = async () => {
    setLoading(true);
    const trimmed = searchTerm.trim();
    if (trimmed === '') {
      // If search input is empty, fallback to default flow
      setSearchMode(false);
      setCards([]);
      setPage(1);
      setHasMore(true);
      fetchCards(1); // re-fetch page 1
      return;
    }

    try {
      const res = await axios.get('http://localhost:5050/api/cards', {
        params: { search: trimmed },
      });

      setCards(res.data.cards);
      // console.log(res.data.cards);
      // Set the matched cards
      setSearchMode(true);        // Enable search mode
      setHasMore(false);          // Disable load more during search
    } catch (err) {
      console.error('Search error:', err);
      setCards([]); // clear cards if something goes wrong
    } finally {
      setLoading(false);
    }
  };



  return (
    <Container>
      <h2 className="text-center my-4">Clash Royale Cards</h2>
      <InputGroup className="mb-4" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <FormControl
          className="border border-dark "
          placeholder="Search cards by name..."
          aria-label="Search cards"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearchClick();
          }}
        />
        <Button
          variant="dark"
          onClick={handleSearchClick}
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <FaSearch size={16} />
        </Button>
        {/* Clear/reset button */}
        <Button
          variant="outline-primary"
          onClick={() => {
            setSearchTerm('');
            setSearchMode(false);
            setCards([]);
            setPage(1);
            setHasMore(true);
            fetchCards(1);
          }}
          style={{
            marginLeft: '8px',
            color: 'black',
            backgroundColor: 'white',
            border: '2px solid black',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'black';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.color = 'black';
          }}
        >
          Reset
        </Button>
      </InputGroup>


      {/*  */}
      {loading && (cards.length === 0 || searchMode) ? (
        <Loader loading={loading} />
      ) : (
        <>
          <Row>
            {cards.length > 0 ? (
              cards.map((card) => (
                <Col key={card.id} sm={12} md={6} lg={4}>
                  <CardItem card={card} />
                </Col>
              ))
            ) : (
              !loading && <p className="text-center text-muted mt-4">No cards found.</p>
            )}
          </Row>
          {/*  */}
          {hasMore && !searchMode && (
            <div className="text-center mt-4 mb-4">
              <Button variant="dark" onClick={handleLoadMore} disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Loading...
                  </>
                ) : (
                  "Load More"
                )}
              </Button>
            </div>
          )}

        </>
      )}

      {/* Go up button */}
      {showGoUp && (
        <Button
          className="fade-in"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            backgroundColor: 'black',
            border: '2px solid white',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          <FaArrowUp color="white" />
        </Button>
      )}

    </Container>
  );
}

export default CardList;
