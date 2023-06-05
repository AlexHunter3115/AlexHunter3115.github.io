class BaseAlgorithmStateClass {
  UpdateElements() {}

  UpdateCall() {}

  DrawCall() {
    //background(100); // Grey background
    textAlign(CENTER, CENTER);
    textSize(48);
    fill(255, 0, 0); // Red text
    text("BaseClass", width / 2, height / 2);
  }

  GuiDrawCall() {}

  Select() {}

  Deselect() {}
}

class CellularAutomata extends BaseAlgorithmStateClass {
  
  slider;
  sizeOfelips = 15;
  
  UpdateElements() 
  {
    this.slider = createLabeledSlider("Size of Elipse")
  }

  UpdateCall() 
  {
    fill(128, 128, 0)
    ellipse(mouseX, mouseY, 50, this.slider.value());
  }

  DrawCall() {
    //background(250); // Grey background
    textAlign(CENTER, CENTER);
    textSize(48);
    fill(255, 0, 0); // Red text
    text("Cell", width / 2, height / 2);
  }

  GuiDrawCall() {}

  Select() {}

  Deselect() {}
}

class Test extends BaseAlgorithmStateClass {
  UpdateElements() {}

  UpdateCall() {}

  DrawCall() {
    //background(200); // Grey background
    textAlign(CENTER, CENTER);
    textSize(48);
    fill(255, 0, 0); // Red text
    text("test", width / 2, height / 2);
  }

  GuiDrawCall() {}

  Select() {}

  Deselect() {}
}

class PerlinNoise extends BaseAlgorithmStateClass {
  UpdateElements() {}

  UpdateCall() {}

  DrawCall() {
    
    textAlign(CENTER, CENTER);
    textSize(48);
    fill(255, 0, 0); // Red text
    text("perlin", width / 2, height / 2);
  }

  GuiDrawCall() {}

  Select() {}

  Deselect() {}
}

let allStatesArr = [
  new BaseAlgorithmStateClass(),
  new CellularAutomata(),
  new PerlinNoise(),
  new Test(),
];
let currentAlgoIndex = 0;

function setup() {
  let canvasWidth = windowWidth / 2;
  let canvasHeight = 800;
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("p5js-canvas");

}

function windowResized() {
  let canvasWidth = windowWidth / 2;
  resizeCanvas(canvasWidth, 800);
}

function UpdateCall() {
  if (!window.isFrozen) {
    allStatesArr[currentAlgoIndex].UpdateCall();
  }
}

function DrawCall() {
  if (window.isFrozen) {
    background(200); // Grey background
    textAlign(CENTER, CENTER);
    textSize(48);
    fill(255, 0, 0); // Red text
    text("Frozen", width / 2, height / 2);
    //console.log('Frozen');
  } else {
    allStatesArr[currentAlgoIndex].DrawCall();
  }
}

function GuiDrawCall() {
  if (!window.isFrozen) {
    allStatesArr[currentAlgoIndex].GuiDrawCall();
  }
}

function draw() {
  background(220);

  UpdateCall();
  DrawCall();
  GuiDrawCall();
}


function createLabeledSlider(labelText) {
  let container = createDiv();
  container.parent("control-container");

  let label = createSpan(labelText);
  label.parent(container);

  let slider = createSlider(10, 200, 80);
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
  allStatesArr[currentAlgoIndex].Deselect();
  
  currentAlgoIndex = index;

  document.getElementById("control-container").innerHTML = "";
  allStatesArr[currentAlgoIndex].UpdateElements();

  allStatesArr[currentAlgoIndex].Select();
}
