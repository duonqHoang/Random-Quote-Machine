import * as data from "./quotes.json" assert { type: "json" };

const container = document.querySelector(".container");
const quoteBox = container.querySelector(".quote-box");
const quote = quoteBox.querySelector(".quote");
const author = quoteBox.querySelector(".author");
const newQuoteButton = container.querySelector(".new-quote");
const tweetButton = container.querySelector(".twitter-share-button");

//get quotes from json file
const quotes = data.default.quotes;

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

function changeQuote() {
  let newQuote = getRandomQuote();
  quote.textContent = newQuote.quote;
  author.textContent = "- " + newQuote.author;
  tweetButton.href =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent('"' + newQuote.quote + '"' + " - " + newQuote.author);
}

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
    changeQuote();
  }, 500);
  container.style.backgroundColor = getRandomColor();
}

newQuoteButton.addEventListener("click", buttonClick);

//Initial random quote and color
changeQuote();
container.style.backgroundColor = getRandomColor();
