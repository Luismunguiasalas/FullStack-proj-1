const quotes = [
    [
        {
            "source": "Elon",
            "quote": "spacex is the best",
            "citation": "The Book, Page 2",
            "year": 2020,
            "image": "../images/rsz_aerial.jpeg"
        },

        {
            "source": "Gordon",
            "quote": "Gordon is the best",
            "citation": "The Book, Page 3",
            "year": 20110,
            "image": "../images/rsz_low.jpeg"
        },

        {
            "source": "Luis",
            "quote": "luis is the best",
            "citation": "The Book, Page luis",
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
            "quote": "Gordon is the best",
            "citation": "The Book, Page 3",
            "year": 20110,
            "image": "../images/rsz_low.jpeg"
        },

        {
            "source": "Jamesss",
            "quote": "luis is the best",
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

//***** */ function creates a random number, 
//***** */ accesses object in multi-dimensional array
//***** */ adds object key values to DOM with jQuery
const getRandomQuote = (cat) => {
    let ranNum = Math.floor(Math.random() * 3);
    let quoteObject = quotes[ranNum];
    // console.log(quotes[0][ranNum]);

    window.setTimeout(function () {

        setRandomColor();

        $("h1").text(quotes[cat][ranNum]["source"]);
        $("h2").text(quotes[cat][ranNum]["quote"]);
        $("h3").text(quotes[cat][ranNum]["citation"]);
        $("h4").text(quotes[cat][ranNum]["year"]);
        $("img").attr("src", quotes[cat][ranNum]["image"]);

    }, 150);

};
// Generates a random number between 1 - 255  and assigns to each let //
function getRanColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let a = .3;
    let rgbaStr = `rgba( ${r} , ${g} , ${b} , ${a} )`
    return rgbaStr;
};
// access body element, sets background color to getRanColor()  //
function setRandomColor() {
    $("body").css("background-color", getRanColor());
};
// console.log(getRanColor());

$("#0").click((() => { window.setTimeout(getRandomQuote(0), 1500) }));
$("#1").click((() => { window.setTimeout(getRandomQuote(1), 1500) }));
$("#2").click((() => { window.setTimeout(getRandomQuote(2), 1500) }));