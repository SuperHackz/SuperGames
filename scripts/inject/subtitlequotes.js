document.addEventListener("DOMContentLoaded", function() {
    const quotes = [
        "Better than any school, even you Labay.",
        "thank you X-88 for saving my boredom - some random student ",
        "SCOTT HOW ARE YOU STILL ALIVE?! - blooket haters",
        "Thank you for checking out our website!!",
        "wild fact: scott spends years on a google site, it's still up..",
        "We update almost DAILY! Expect atleast a new game every new day.",
        "wild fact: Opium was planned to be the next cybriagames, then corrupted LOL",
        "wild fact: X-88 redid this website, it was worth it.",
        "wild fact: Opium was infamous for actually getting featured on a schoolwide slideshow video.. wow.",
        "Deployed on Firebase AKA web.app by SC0TT!",
        "if you read this you need to lose your IQ immediately.",
        "The best uprising game website, mainly for CFISD.",
        "Potato! - SC0TT",
        "Suggest a new game to add on the widgetbot server or https://discord.gg/c3AmKk67vt",
        "Submit a custom splash to the widgetbot server!",
        "Fanny Fact: CybriaGames was published on my birthday",
        "Fun Faact: CybriaGames was supposed to be an extension of Tam's Game Hub",
        "does this actually work?",
        "oh wait NVM it's not that automatic lol"
    ];

    const subtitleElement = document.querySelector('.subtitle');

    function randomizeQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        subtitleElement.textContent = quotes[randomIndex];
        subtitleElement.style.display = 'block';
    }

    randomizeQuote();
s
    setInterval(randomizeQuote, 5000);
});
