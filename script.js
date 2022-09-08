const container = document.querySelector(".container");
const quoteBox = container.querySelector(".quote-box");
const quote = quoteBox.querySelector(".quote");
const author = quoteBox.querySelector(".author");
const newQuoteButton = container.querySelector(".new-quote");
const tweetButton = container.querySelector(".twitter-share-button");

let quotesArr;

const getRandomQuote = function (quotes) {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

const changeQuote = function (quotes) {
  let newQuote = getRandomQuote(quotes);
  quote.textContent = newQuote.quote;
  author.textContent = "- " + newQuote.author;
  tweetButton.href =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent('"' + newQuote.quote + '"' + " - " + newQuote.author);
};

function getRandomColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
}

function animateQuoteBox() {
  quoteBox.style.opacity = 0.5;
  setTimeout(() => {
    quoteBox.style.opacity = 1;
  }, 500);
}

function buttonClick() {
  animateQuoteBox();
  setTimeout(() => {
    changeQuote(quotesArr);
  }, 500);
  container.style.backgroundColor = getRandomColor();
}

newQuoteButton.addEventListener("click", buttonClick);

fetch("./quotes.json")
  .then((response) => response.json())
  .then((quotes) => {
    //Initial random quote and color
    quotesArr = quotes.quotes;
    changeQuote(quotesArr);
    container.style.backgroundColor = getRandomColor();
  });
