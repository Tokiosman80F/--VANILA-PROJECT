const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");
//global variable
let apiQuote = [];

// showing loader
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
// hiding loader
function complete() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}
function newQuote() {
  loading();
  //picking up one quote
  const quote = apiQuote[Math.floor(Math.random() * apiQuote.length)];
  if (quote.text.length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
  if (!quote.author) {
    authorText.textContent = "Unknow";
  } else {
    authorText.textContent = quote.author;
  }
  complete();
}
async function getQuote() {
  loading();
  const apiUrl = `https://type.fit/api/quotes`;
  try {
    const response = await fetch(apiUrl);
    apiQuote = await response.json();
    newQuote();
  } catch (error) {}
}

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} -${authorText.textContent}`;

  window.open(twitterUrl, "_blank");
}

newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);
//on load
getQuote();

// loader
// loading();
