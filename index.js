const sliderValue = document.getElementById('slider');
const gridSliderCount = document.getElementById('gridSliderCount');
gridSliderCount.textContent = `${sliderValue.value} x ${sliderValue.value}`;

sliderValue.addEventListener('change', (event) => {
    console.log(sliderValue.value);
    gridSliderCount.textContent = `${sliderValue.value} x ${sliderValue.value}`;
    changePixelPad();
});

const sketchPad = document.getElementById('sketchPad');

function changePixelPad() {
    sketchPad.style.gridTemplateColumns = `repeat(${sliderValue.value}, 1fr)`;

    sketchPad.textContent = '';

    for (let index = 0; index < sliderValue.value * sliderValue.value; index++) {
        const sketchPixel = document.createElement('div');
        sketchPixel.classList.add('sketchPixel');
        sketchPad.appendChild(sketchPixel);
    }

}

changePixelPad();

// Color Button
const colorButton = document.getElementById('colorButton');
