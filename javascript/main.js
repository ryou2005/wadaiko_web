const images = ["images/slideshow/slideshow1.jpeg", "images/slideshow/slideshow2.jpeg", "images/slideshow/slideshow3.jpeg"];
let count = 0;

function changeImage() {
  count = (count + 1) % images.length;
  document.getElementById("slideshow").src = images[count];
}

// 5秒ごとに画像を切り替える
setInterval(changeImage, 5000);
