document.addEventListener("DOMContentLoaded", function() {
    const quotes = [
        "Better than any school, even you Hasmo.",
        "thank you Games for saving my boredom - some random student ",
        "DAN HOW ARE YOU STILL ALIVE?! - blooket haters",
        "Tell everyone at school you love SuperGames",
        "wild fact: dan spent years on a google site, it's still up..",
        "We update almost DAILY! Expect at least a new game every new day.",
        "wild fact: Dan redid this website, it was worth it.",
        "wild fact: Games was infamous for actually getting featured on a schoolwide slideshow video.. wow.",
        "if you read this you need to lose your IQ immediately.",
        "The best uprising game website, mainly for Hasmo.",
        "Fanny Fact: Games was published on my birthday",
        "Fun Fact: Games was supposed to be an extension of Dan's Game Hub",
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
