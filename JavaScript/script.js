const quotes = [
    [
        {
            "source": " - Elon, ",
            "quote": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
            "citation": "The Book, Page 2 ",
            "year": 2020,
            "image": "../images/rsz_aerial.jpeg"
        },

        {
            "source": " - Gordon, ",
            "quote": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
            "citation": "The Book, Page 3 ",
            "year": 20110,
            "image": "../images/rsz_low.jpeg"
        },

        {
            "source": " - Luis, ",
            "quote": "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
            "citation": "The Book, Page 1 ",
            "year": 2010,
            "image": "../images/rsz_person.jpeg"
        },
    ],
    [
        {
            "source": "James",
            "quote": "spacex is the best",
            "citation": "The Book, Page 2",
            "year": 2020,
            "image": "../images/rsz_aerial.jpeg"
        },

        {
            "source": "Jamess",
            "quote": "quote Gordon is the best quote",
            "citation": "The Book, Page 3",
            "year": 20110,
            "image": "../images/rsz_low.jpeg"
        },

        {
            "source": "Jamesss",
            "quote": "quoteluis is the best quote quote",
            "citation": "The Book, Page luis",
            "year": 2010,
            "image": "../images/rsz_person.jpeg"
        },
    ],
    [
        {
            "source": "Jacob",
            "quote": "spacex is the best",
            "citation": "The Book, Page 2",
            "year": 2020,
            "image": "../images/rsz_aerial.jpeg"
        },

        {
            "source": "Jacobb",
            "quote": "Gordon is the best",
            "citation": "The Book, Page 3",
            "year": 20110,
            "image": "../images/rsz_low.jpeg"
        },

        {
            "source": "Jacobbb",
            "quote": "luis is the best",
            "citation": "The Book, Page luis",
            "year": 2010,
            "image": "../images/rsz_person.jpeg"
        },
    ]
];
/**  function creates a random number, accesses object in multi-dimensional array, adds object key values to DOM with jQuery **/
const getRandomQuote = (catgrie) => {
    let ranNum = Math.floor(Math.random() * 3);
    let quoteObject = quotes[ranNum];
    setRandomColor();
    $("#quote").text(quotes[catgrie][ranNum]["quote"]);
    $("#name").text(quotes[catgrie][ranNum]["source"]);
    $("#citation").text(quotes[catgrie][ranNum]["citation"]);
    $("#year").text(quotes[catgrie][ranNum]["year"]);
    $("img").attr("src", quotes[catgrie][ranNum]["image"]);
};
// Generates a random number between 1 - 255  and assigns to each let 
function getRanColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let a = .3;
    let rgbaStr = `rgba( ${r} , ${g} , ${b} , ${a} )`
    return rgbaStr;
};
// access body element, sets background color to getRanColor()
function setRandomColor() {
    $("body").css("background-color", getRanColor());
};

$("#btn-business").click(() => { getRandomQuote(0) });
$("#btn-inspiration").click(() => { getRandomQuote(1) });
$("#btn-humor").click(() => { getRandomQuote(2) });