const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
let photoArray = [];
// unssplash api
const count = 10;
const apiKey = `tFn4xqfSR3nonGNO9609p-V-4Sxv2JB-tA1RjWLt-FM`;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// create elements for links & photo and add to dom
function displayPhoto() {
  // run function for each object in photoArray
  photoArray.forEach((photo) => {
    // create<a> to link to unsplash
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", _blank);
    // create <img> for photo
    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("title", photo.alt_description);

    // put <img> inside <a > then put both inside imageContainer
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

//get photo
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const photoArray = await response.json();
    console.log(photoArray);
  } catch (error) {
    // catch error
  }
}

// onload
getPhotos();
