const quotes = [
    {
        "source": " - Stuart H. Britt",
        "quote": '"Doing Business  without Advertising is like winking at a guy/girl in the dark. You know what you\'re doing..but nobody else does."',
        "citation": "",
        "year": ""
    },

    {
        "source": " - Warren Buffett ",
        "quote": '"Some is sitting in the shade today because someone planted a tree a long time ago."',
        "citation": "",
        "year": ""
    },

    {
        "source": " - Philippians, ",
        "quote": '"I can do everything through Christ who give me strength."',
        "citation": "4:13",
        "year": ""
    },

    {
        "source": " - Richard Branson",
        "quote": '"Respect is how you treat everyone, not just those you want to impress."',
        "citation": "",
        "year": ""
    },

    {
        "source": " - Napoleon Hill",
        "quote": '"Don\'t wait, the time will never be just right."',
        "citation": "",
        "year": ""
    },

    {
        "source": " - Elon Musk ",
        "quote": '"When something is Important enough, you do it even if the odds are against you"',
        "citation": "",
        "year": ""
    },

    {
        "source": " - Abraham Lincoln ",
        "quote": '"It\'s not the years in your life that count. It\'s the life in your years."',
        "citation": "",
        "year": ""
    },

    {
        "source": " - Mahatma Gandhi",
        "quote": '"Be the change you want to see in the world."',
        "citation": "",
        "year": ""
    },

    {
        "source": " - Psalm, ",
        "quote": '"I have not failed, I\'ve just found 10,000 ways that won\'t work."',
        "citation": "34:10b",
        "year": ""
    },

    {
        "source": " - Henry Ford",
        "quote": '"Whether you think you can or think you cant, your probably right."',
        "citation": "",
        "year": ""
    },

    {
        "source": " - Elon Musk, ",
        "quote": '"Rockets are cool. There\'s no getting around that."',
        "citation": "",
        "year": "2013"
    },

    {
        "source": " - Albert Einstein, ",
        "quote": '"I Fear the day that technology will surpass our human interaction. The world will have a generation of idiots."',
        "citation": "",
        "year": "1956"
    },

    {
        "source": " - Mark Twain, ",
        "quote": '"Don\'t go around saying the world owes you a living. The world owes you nothing, it was here first."',
        "citation": "",
        "year": "1925"
    },

    {
        "source": " - Salvador Dali",
        "quote": '"I don\'t do drugs, I am drugs."',
        "citation": "",
        "year": ""
    },

    {
        "source": " - Sarah Silverman, ",
        "quote": '"So I\'m licking jelly off my boyfriend and all of a sudden, I\'m thinking.. I\'m turning into my mother!"',
        "citation": "",
        "year": "2014"
    },
];

/**  function creates a random number, accesses object in multi-dimensional array, adds object key values to DOM with jQuery **/
const getRandomQuote = () => {
    let ranNum = Math.floor(Math.random() * 15);
    setRandomColor();
    $("#quote").text(quotes[ranNum]["quote"]);
    $("#name").text(quotes[ranNum]["source"]);
    $("#citation").text(quotes[ranNum]["citation"]);
    $("#year").text(quotes[ranNum]["year"]);
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

$("#btn").click(() => { getRandomQuote() });