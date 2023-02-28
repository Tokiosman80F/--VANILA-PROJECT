function loadMeal(searchText) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showFood(data.meals));
}

function showFood(data) {
  const mealsContainer = document.getElementById("meals-container");

  mealsContainer.innerHTML = " ";
  data.forEach((item) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("col");
    cardDiv.innerHTML = `
                        <div class="card border-danger">
                            <img src="${item.strMealThumb}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h4 class="card-title text-center text-danger">${item.strMeal}</h5>
                                <p class="card-text text-justify fw-bold">Tags: <span class="btn btn-outline-danger">${item.strArea}</span> <span class="btn btn-outline-danger">${item.strCategory}</span></p>
                                
                                <button onclick="loadMealDetail(${item.idMeal})" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#mealDetails">
                                Meal Details
                                </button>
                            </div>
                            
                        </div>
    `;
    mealsContainer.appendChild(cardDiv);
    console.log(item);
    console.log(item.strInstructions);
  });
}

const searchMeal = () => {
  const searchFeild = document.getElementById("search-feild").value;
  console.log(searchFeild);
  loadMeal(searchFeild);
};

const loadMealDetail = (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => foodDetail(data.meals[0]))
    .catch((error) => console.log(error));
  console.log(mealId);
};

const foodDetail = (data) => {
  document.getElementById("mealDetailsLabel").innerText = `${data.strMeal}`;
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `${data.strInstructions}`;
};

loadMeal("rice");
