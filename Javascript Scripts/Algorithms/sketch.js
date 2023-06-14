//add buttons for the CA    restart and mouse click stuff   insteda of controlling from the FPS control from a timer
//put everything in its own script

let isAlgorithmsSectionVisible = false;

let allStatesArr = [
  new BaseAlgorithmStateClass(),
  new CellularAutomata(),
  new TestInputs(),
  new Tetris(),
];

let currentAlgoIndex = 0;

function setup() {
  let canvasWidth = windowWidth / 2;
  let canvasHeight = 800;
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("p5js-canvas");

  let algorithmsSection = document.querySelector("#Algorithms");
  let observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      isAlgorithmsSectionVisible = entry.isIntersecting;
    });
  });
  observer.observe(algorithmsSection);
}

function windowResized() {
  let canvasWidth = windowWidth / 2;
  resizeCanvas(canvasWidth, 800);
}

function UpdateCall() {
  if (isAlgorithmsSectionVisible) {
    allStatesArr[currentAlgoIndex].UpdateCall();
  }
}

function DrawCall() {
  if (!isAlgorithmsSectionVisible) {
    background(200); // Grey background
    textAlign(CENTER, CENTER);
    textSize(48);
    fill(255, 0, 0); // Red text
    text("Frozen", width / 2, height / 2);
    console.log("Frozen");
  } else {
    allStatesArr[currentAlgoIndex].DrawCall();
  }
}

function GuiDrawCall() {
  if (isAlgorithmsSectionVisible) {
    allStatesArr[currentAlgoIndex].GuiDrawCall();
  }
}

function draw() {
  background(220);

  UpdateCall();
  DrawCall();
  GuiDrawCall();
}

function createLabeledSlider(labelText, minVal, maxVal, initVal) {
  let container = createDiv();
  container.parent("control-container");

  let label = createSpan(labelText);
  label.parent(container);

  let slider = createSlider(minVal, maxVal, initVal);
  slider.parent(container);

  return slider;
}

function createLabeledCheckbox(labelText) {
  let container = createDiv();
  container.parent("control-container");

  let label = createSpan(labelText);
  label.parent(container);

  let checkbox = createCheckbox();
  checkbox.parent(container);

  return checkbox;
}

function createLabeledInputField(labelText) {
  let container = createDiv();
  container.parent("control-container");

  let label = createSpan(labelText);
  label.parent(container);

  let inputField = createInput();
  inputField.parent(container);

  return inputField;
}

function createLabeledButton(labelText, callback) {
  let container = createDiv();
  container.parent("control-container");

  let label = createSpan(labelText);
  label.parent(container);

  let button = createButton("Click me");
  button.mousePressed(callback);
  button.parent(container);

  return button;
}

function switchAlgoState(index) {
  frameRate(60);

  allStatesArr[currentAlgoIndex].Deselect();

  currentAlgoIndex = index;

  document.getElementById("control-container").innerHTML = "";
  allStatesArr[currentAlgoIndex].UpdateElements();

  allStatesArr[currentAlgoIndex].Select();
}
