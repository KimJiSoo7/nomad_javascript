const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
];

// const bodyImages = document.querySelector("body");
const bodyImages = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(img/${bodyImages})`;
document.body.style.backgroundSize = `height: auto;`

// const bgImage = document.createElement("img");
// bgImage.className = "imgage";
// bgImage.src = `img/${bodyImages}`;

// document.body.appendChild(bgImage);