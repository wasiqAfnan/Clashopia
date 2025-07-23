const axios = require("axios");
require("dotenv").config();

const CLASH_API_URL = process.env.CLASH_ROYALE_API_URL;
const API_KEY = process.env.CLASH_ROYALE_API_KEY;


// Function to fetch Clash Royale card data with pagination
const fetchCards = async (page = 1, limit = 15, searchQuery) => {
    try {
        const response = await axios.get(`${CLASH_API_URL}/cards`, {
            headers: {
                "Authorization": `Bearer ${CLASH_ROYALE_API_KEY}`
            },
        });

        const allCards = response.data.items; // Get all cards
        console.log(searchQuery);
        

        if(searchQuery) {
            cards = allCards.filter(card =>
                card.name.toLowerCase().includes(searchQuery)
            );

            console.log(cards);
            
            return{
                cards
            }
        }
        else {
            // Implement pagination logic
            const startIndex = (page - 1) * limit;
            const paginatedCards = allCards.slice(startIndex, startIndex + limit);
            return {
                page: Number(page),
                limit: Number(limit),
                totalCards: allCards.length,
                totalPages: Math.ceil(allCards.length / limit),
                data: paginatedCards
            };
        }

    } catch (error) {
        console.error("Error fetching cards:", error.message);
        throw new Error("Failed to fetch Clash Royale cards");
    }
};

module.exports = { fetchCards };