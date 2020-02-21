const quotes = [
    {
        "source": "Elon",
        "quote": "spacex is the best",
        "citation": "The Book, Page 2",
        "year": 2020
    },

    {
        "source": "Gordon",
        "quote": "Gordon is the best",
        "citation": "The Book, Page 3",
        "year": 20110
    },

    {
        "source": "Luis",
        "quote": "luis is the best",
        "citation": "The Book, Page luis",
        "year": 2010
    },
];
console.log(quotes[0]);

// $(document).ready(function () {

//     $("h1").text(quotes[2]);

// });

const getRandomQuote = () => {
    let ranNum = Math.floor(Math.random() * 3);
    let quoteObject = quotes[ranNum];
    console.log(quotes[ranNum]);
    $("h1").text(quotes[ranNum]["source"]);
    $("h2").text(quotes[ranNum]["quote"]);
    $("h3").text(quotes[ranNum]["citation"]);
    $("h4").text(quotes[ranNum]["year"]);


};

console.log(getRandomQuote());



