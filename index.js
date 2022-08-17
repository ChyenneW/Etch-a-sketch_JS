// Slider
const sliderValue = document.getElementById('slider');
const gridSliderCount = document.getElementById('gridSliderCount');
gridSliderCount.textContent = `${sliderValue.value} x ${sliderValue.value}`;

sliderValue.addEventListener('change', (event) => {
    console.log(sliderValue.value);
    gridSliderCount.textContent = `${sliderValue.value} x ${sliderValue.value}`;
    changePixelPad();
});

// Random Colors
function makeRainbowColors() {
    let r = Math.floor(Math.random() * 98);
    let g = Math.floor(Math.random() * 98);
    let b = Math.floor(Math.random() * 98);
    let fillerPick = Math.floor(Math.random() * 7)

    r = r.toString();
    g = g.toString();
    b = b.toString();

    let filler = ['a', 'b', 'c', '0', 'd', 'e', 'f'];


    if (r.length == 1) {
        r = filler[fillerPick] + r;
    }
    if (g.length == 1) {
        g = filler[fillerPick] + g;
    }
    if (b.length == 1) {
        b = filler[fillerPick] + b;
    }

    let rainbowColors = `#${r}${g}${b}`;
    return (rainbowColors)
}

// ColorPicker
const colorSelector = document.getElementById('colorSelector');
const colorButton = document.getElementById('colorButton');
const rainbowButton = document.getElementById('rainbowButton');
const eraseButton = document.getElementById('eraseButton');
let currentColor = '#e66465';

colorSelector.addEventListener('change', (event) => {
    let selectorColor = event.target.value;
    console.log(event.target.value)
    currentColor = selectorColor;
})

function activeColor(buttonType) {
    if (buttonType === "colorButton") {
        console.log("hello from active");

        if (colorButton.classList.contains('activeButton')) {
            currentColor = colorSelector.value;
        } else {
            colorButton.classList.toggle('activeButton');

            rainbowButton.classList.remove('activeButton');
            eraseButton.classList.remove('activeButton');
        }

    } else if (buttonType === "rainbowButton") {
        console.log("rainbow");
        console.log(makeRainbowColors());

        if (rainbowButton.classList.contains('activeButton')) {
            let randomColor = makeRainbowColors();
            currentColor = randomColor;
            colorSelector.value = currentColor;
        } else {
            rainbowButton.classList.toggle('activeButton');

            colorButton.classList.remove('activeButton');
            eraseButton.classList.remove('activeButton');
        }

    } else {
        console.log("clear");

        if (eraseButton.classList.contains('activeButton')) {
            currentColor = '#ffffff';
        } else {
            eraseButton.classList.toggle('activeButton');

            rainbowButton.classList.remove('activeButton');
            colorButton.classList.remove('activeButton');
        }
    }
}

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
            document.getElementById(pixelId).style.backgroundColor = `${currentColor}`;
        }
    });
}

// Clear all 
const clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click', () => {
    changePixelPad();
});

changePixelPad();