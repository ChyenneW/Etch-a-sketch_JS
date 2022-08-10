const sketchPad = document.getElementById('sketchPad');

const sketchPixel = document.createElement('div');
sketchPixel.setAttribute('style', 'border:5px solid black; background-color: red;');

const sliderValue = document.getElementById('slider');
const gridSliderCount = document.getElementById('gridSliderCount');
gridSliderCount.textContent = `${sliderValue.value} x ${sliderValue.value}`;


sliderValue.addEventListener('change', (event) => {
    gridSliderCount.textContent = `${sliderValue.value} x ${sliderValue.value}`;
});

sketchPad.appendChild(sketchPixel);
