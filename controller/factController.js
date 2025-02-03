const axios = require("axios");

async function getFunFact(num) {
    try {
        const response = await axios.get(`http://numbersapi.com/${num}/trivia?json`);
        console.log(response.data.text);
        return response.data.text;
    } catch (error) {
        console.error('Error fetching fun fact:', error);
        return 'No fun fact available';
        
    }
}

module.exports = { getFunFact };