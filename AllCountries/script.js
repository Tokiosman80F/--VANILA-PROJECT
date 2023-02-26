function loadCountries() {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => countriesDetail(data));
}
function countriesDetail(data) {
  console.log(data);

  data.forEach((element) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <div class="border-2  mx-auto px-4 py-5 rounded-xl mt-5 drop-shadow-2xl text-center ">
        <div> <img src="${element.flags.png}" alt=""> </div>
        <h3 class="font-semibold uppercase">${element.name.common}</h3>
        
        <h4>🏙 :${element.capital[0]}</h4>
        
        <p>👨🏽‍🤝‍👨🏼 : <span>${element.population}</span></p>
        
    </div>
`;

    // console.log(element.capital[0]);
    // console.log(element.population);
    // console.log(element.flags.png);
    document.getElementById("countries").appendChild(div);
  });
}

loadCountries();
//element.name.common
