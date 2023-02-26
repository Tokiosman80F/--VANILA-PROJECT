const quoteBtn = document.getElementById("btn-quote");
quoteBtn.addEventListener("click", generateQuote);
function generateQuote() {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => callApi(data));
}
function callApi(data) {
  const qoutes = document.getElementById("qoutes");
  console.log(data);
  qoutes.innerHTML = `${data.quote} 
  --By Kanye West`;
}

generateQuote();
