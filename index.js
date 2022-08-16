// Slider
const sliderValue = document.getElementById('slider');
const gridSliderCount = document.getElementById('gridSliderCount');
gridSliderCount.textContent = `${sliderValue.value} x ${sliderValue.value}`;

sliderValue.addEventListener('change', (event) => {
    console.log(sliderValue.value);
    gridSliderCount.textContent = `${sliderValue.value} x ${sliderValue.value}`;
    changePixelPad();
});

// ColorPicker
const colorSelector = document.getElementById('colorSelector');
const colorButton = document.getElementById('colorButton');
let newColor = '#e66465';

colorSelector.addEventListener('change', (event) => {
    console.log(event.target.value)
    newColor = event.target.value;
})

function activeColor(buttonType) {
    if (buttonType === "colorButton") {
    } else if (buttonType === "rainbowButton") {
        console.log("rainbow")
    } else {
        console.log("clear");
    }
}
// console.log("color mode activated");
// colorButton.classList.add('activeButton');

colorButton.addEventListener('click', activeColor);

// SketchPad and Pixels
const sketchPad = document.getElementById('sketchPad');
let sketchPixel;

function createPixelId() {
    let pixelId = `${Math.floor(Math.random() * 100)}-${Math.floor(Math.random() * 100)}`;
    return pixelId;
}

function changePixelPad() {
    sketchPad.style.gridTemplateColumns = `repeat(${sliderValue.value}, 1fr)`;

    sketchPad.textContent = '';

    for (let index = 0; index < sliderValue.value * sliderValue.value; index++) {
        sketchPixel = document.createElement('div');
        sketchPixel.classList.add('sketchPixel');
        sketchPixel.setAttribute('id', createPixelId());
        sketchPad.appendChild(sketchPixel);
    };

    sketchPad.addEventListener('click', function (e) {
        if (e.target.classList.contains('sketchPixel')) {
            let pixelId = e.target.id;
            console.log(e.target.id);
            document.getElementById(pixelId).style.backgroundColor = `${newColor}`;
        }
    });
}

changePixelPad();