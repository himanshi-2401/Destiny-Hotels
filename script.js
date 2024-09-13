// Slideshow script
let indexValue = 1;
showImg(indexValue);

function btm_slide(e) {
  showImg(indexValue = e);
}

function side_slide(e) {
  showImg(indexValue += e);
}

function showImg(e) {
  const img = document.querySelectorAll('.S_SHOW img');
  const sliders = document.querySelectorAll('.btm-sliders span');

  if (e > img.length) {
    indexValue = 1;
  } else if (e < 1) {
    indexValue = img.length;
  }

  img.forEach((image) => {
    image.style.display = 'none';
  });

  sliders.forEach((slider) => {
    slider.style.background = 'blue';
  });

  img[indexValue - 1].style.display = 'block';
  sliders[indexValue - 1].style.background = 'white';
}