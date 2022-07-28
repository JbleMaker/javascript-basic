const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);

const bgImage = document.createElement("style");

bgImage.innerText = `body {
	background-image: url(img/${chosenImage}); 
	background-position:center; 
	background-repeat: no-repeat; 
	background-size:cover;
}`;

document.head.appendChild(bgImage);
