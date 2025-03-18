const cardService = require("../services/cardService");

const getCards = async (req, res) => {
    try {
        let { page = 1, limit = 15} = req.query; // Default page 1, limit 15
        page = Number(page);
        limit = Number(limit);

        // Validate pagination parameters 
        //  If page<1 or limit<1 then return a proper error message
        if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
            return res.status(400).json({
                error: "Invalid pagination parameters. 'page' and 'limit' must be positive numbers.",
            });
        }

        // calling fetchcards function to fetch the data from API
        const data = await cardService.fetchCards(Number(page), Number(limit));
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getCards };
