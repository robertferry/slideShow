//step 1. grab the next button element.
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
//3.keep track of what image is currently showing.👇
let currentImgIndex = 0;
let previousImgIndex = 0;
//4.Create a variable that will hold all the images.
const images = document.getElementsByClassName('images');
//2.add event listener for buttons.
next.addEventListener('click', () => {
    event.preventDefault()
    previousImgIndex = currentImgIndex;
    currentImgIndex += 1;
    images[previousImgIndex].style.display = 'none';
    if(currentImgIndex >= images.length) {
        currentImgIndex = 0;
       }       
    images[currentImgIndex].style.display = 'block';
});

prev.addEventListener('click', () => {
    event.preventDefault()
    previousImgIndex = currentImgIndex;
    currentImgIndex -= 1;
    images[previousImgIndex].style.display = 'none';
    if(currentImgIndex < 0) {
        currentImgIndex = images.length - 1;
       }
    images[currentImgIndex].style.display = 'block';
  })
  