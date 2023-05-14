//region General Variables
let currentState = '';
let frameSkip = 5;
let frameCounter = 0;
//endregion

const State = {
  CA: 'CA',
  PerlinNoise: 'PerlinNoise',
  Default: 'Default'
};

let sizeSlider;

function setup() {
  let canvasWidth = windowWidth / 2;
  let canvasHeight = 800;
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('p5js-canvas');

  updateControlElements();
}

function draw() {
  background(220);


  if ( window.isFrozen )
  {
    background(200); // Grey background
        textAlign(CENTER, CENTER);
        textSize(48);
        fill(255, 0, 0); // Red text
        text('Frozen', width / 2, height / 2);
        //console.log('Frozen');
  }
  else
  {

  switch (currentState) {
    case State.CA:
    {

      break;
    }

    case State.PerlinNoise:
    {

      break;
    }

    case State.Default:
    {
      let ellipseSize = sizeSlider.value(); // Get the value of the slider
      ellipse(mouseX, mouseY, ellipseSize, ellipseSize);
  
      // Draw text in the middle of the canvas
      textAlign(CENTER, CENTER);
      textSize(24);
      fill(0); // Set the text color to black
      text('Sample Text', width / 2, height / 2);
      break;
    }

    default:
      {
        
        //console.log('No control elements for current state');
      }}
  }

  frameCounter++;
}


function windowResized() {
  let canvasWidth = windowWidth / 2;
  resizeCanvas(canvasWidth, 800);
}

function buttonPressed() {
  console.log('Button pressed!');
}


function updateControlElements() {
  document.getElementById('control-container').innerHTML = '';

  switch (currentState) {
    case State.CA:
      {
        let slider1 = createLabeledSlider('Slider 1: ');
        let slider2 = createLabeledSlider('Slider 2: ');
        break;
      }

    case State.PerlinNoise:
    {
      for (let i = 1; i <= 6; i++) {
        createLabeledSlider(`Slider ${i}: `);
      }
      break;
    }

    case State.Default:
    {
      sizeSlider = createLabeledSlider('Ellipse Size: ');
      let exampleCheckbox = createLabeledCheckbox('Example Checkbox: ');
      let exampleInputField = createLabeledInputField('Example Input: ');
      let exampleButton = createLabeledButton('Example Button: ', buttonPressed);
      let exampleBdutton = createLabeledButton('Example Button: ', buttonPressed);
    }

    default:
      {
        //console.log('No control elements for current state');
      }
  }
}



function createLabeledSlider(labelText) {
  let container = createDiv();
  container.parent('control-container');

  let label = createSpan(labelText);
  label.parent(container);

  let slider = createSlider(10, 200, 80);
  slider.parent(container);

  return slider;
}

function createLabeledCheckbox(labelText) {
  let container = createDiv();
  container.parent('control-container');

  let label = createSpan(labelText);
  label.parent(container);

  let checkbox = createCheckbox();
  checkbox.parent(container);

  return checkbox;
}

function createLabeledInputField(labelText) {
  let container = createDiv();
  container.parent('control-container');

  let label = createSpan(labelText);
  label.parent(container);

  let inputField = createInput();
  inputField.parent(container);

  return inputField;
}

function createLabeledButton(labelText, callback) {
  let container = createDiv();
  container.parent('control-container');

  let label = createSpan(labelText);
  label.parent(container);

  let button = createButton('Click me');
  button.mousePressed(callback);
  button.parent(container);

  return button;
}



function switchToCA() {
  currentState = State.CA;
  updateControlElements();
}

function switchToPerlinNoise() {
  currentState = State.PerlinNoise;
  updateControlElements();
}

function switchToDefault() {
  currentState = State.Default;
  updateControlElements();
}