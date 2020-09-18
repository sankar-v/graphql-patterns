/**
 * microservice "Quote"
 */
var { fetch } = require( 'universal-fetch');
const getQuote = () => {
        const url = 'http://quotes.rest/qod.json?category=inspire'
        return fetch(url)
            .then(response => {
                return response.json()
            })
            .then(json => {
                return transform(json)
            })
            .catch(err => {
                console.trace(err)
            })
    }

// Transform the raw microservice output into 
// GraphQL types
const transform = (json) => {
    const
        { contents } = json,
        { quotes } = contents,
        quote = quotes[0]

    return {
        id: quote.id,
        quote: quote.quote,
        author: quote.author,
        date: quote.date
    }
}

module.exports = {getQuote}