let user = document.getElementById("name");
let phone = document.getElementById("phone");
let place = document.getElementById("location");
let dob = document.getElementById("dob");
let img = document.getElementById("pro-img");
console.log(img);
// console.log(user);
// console.log(phone);
// console.log(place);
// console.log(dob);

const randomUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => showResult(data));
};
function showResult(data) {
  let info = data.results[0];
  img.src = `${info.picture.large}`;
  console.log(img.s);
  console.log(info);
  user.innerText = `${info.name.first} ${info.name.last}`;
  place.innerText = `${info.location.city},${info.location.country}`;
  phone.innerText = `${info.phone}`;
  dob.innerText = `${info.dob.age}`;
}
randomUser();
