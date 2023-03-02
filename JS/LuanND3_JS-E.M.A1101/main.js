const images = ['./images/img1.jpg', './images/img2.png', './images/img3.png'];
let index = 0;
 
// Add your code here
// Task 1
var imageContainer = document.querySelector('.img-container')
var backBtn = document.querySelector('.back')
var nextBtn = document.querySelector('.next')

backBtn.addEventListener('click', function() {
  // Add your code here
  // Task 3.1
  index = (index - 1 < 0) ? images.length - 1 : index - 1
  renderImage()
});

nextBtn.addEventListener('click', function() {
  // Add your code here
  // Task 3.2
  index = (index + 1) % images.length
  renderImage()
});

// Add your code here
// Task 2
function renderImage() {
  imageContainer.innerHTML = "<img src='" + images[index] + "'>"
}
renderImage()
