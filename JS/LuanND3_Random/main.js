var theImages = [
  {
    src: "https://fastly.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
    width: "300",
    height: "300",
  },
  {
    src: "https://fastly.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE",
    width: "300",
    height: "300",
  },
  {
    src: "https://fastly.picsum.photos/id/1010/5184/3456.jpg?hmac=7SE0MNAloXpJXDxio2nvoshUx9roGIJ_5pZej6qdxXs",
    width: "300",
    height: "300",
  },
  {
    src: "https://fastly.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY",
    width: "300",
    height: "300",
  },
  {
    src: "https://fastly.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w",
    width: "300",
    height: "300",
  },
  {
    src: "https://fastly.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc",
    width: "300",
    height: "300",
  },
];

var btn = document.querySelector(".btn");
var index, index2, index3;
var random, random2;
btn.addEventListener("click", function () {
  index = random = Math.floor(Math.random() * (theImages.length - 1));
  console.log(index, random, theImages.length);
  image(index, "img1");
  do {
    index2 = random2 = Math.floor(Math.random() * (theImages.length - 1));
    
  } while (index2 == random);
  console.log(index2, random2);
  image(index2, "img2");
  do {
    index3 = Math.floor(Math.random() * (theImages.length - 1));
    
  } while (index3 == random || index3 == random2);
  console.log(index3);
  image(index3, "img3");
});
function image(i, string) {
  document.getElementById(string).src = theImages[i].src;
  document.getElementById(string).width = theImages[i].width;
  document.getElementById(string).height = theImages[i].height;
}
