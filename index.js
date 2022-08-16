const sliderValue = document.getElementById('slider');
const gridSliderCount = document.getElementById('gridSliderCount');
gridSliderCount.textContent = `${sliderValue.value} x ${sliderValue.value}`;

sliderValue.addEventListener('change', (event) => {
    console.log(sliderValue.value);
    gridSliderCount.textContent = `${sliderValue.value} x ${sliderValue.value}`;
    changePixelPad();
});

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
            document.getElementById(pixelId).style.backgroundColor = "red";
        }
    });
}

changePixelPad();

const colorButton = document.getElementById('colorButton');

function activateColor() {
    console.log("color mode activated");
}

colorButton.addEventListener('click', activateColor);

