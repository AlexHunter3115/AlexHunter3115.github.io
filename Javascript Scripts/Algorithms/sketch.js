let isAlgorithmsSectionVisible = false;

class BaseAlgorithmStateClass {
  UpdateElements() {}

  UpdateCall() {}

  DrawCall() {
    background(100); // Grey background
    textAlign(CENTER, CENTER);
    textSize(48);
    fill(255, 0, 0); // Red text
    text("Turned Off State", width / 2, height / 2);
  }

  GuiDrawCall() {}

  Select() {}

  Deselect() {}
}

class CellularAutomata extends BaseAlgorithmStateClass {
  
  p5Ref = null;

  slider;

  numberOfQuadrantsWidth = 60;
  numberOfRectsHeight = 60;

  heightRect = 0;
  widthRect = 0;

  totNumOfQuadrants = 0;

  arrayOfStatesOne = [];
  arrayOfStatesTwo = [];

  currentSelectedArr = this.arrayOfStatesOne;

  UpdateElements() 
  {
    this.slider = createLabeledSlider("FPS", 1, 20, 3);
  }

  UpdateCall() 
  {
    fill(128, 128, 0)
    this.p5Ref.frameRate(this.slider.value());

    let arrayToModify;

    if (this.currentSelectedArr === this.arrayOfStatesOne)
    {
      arrayToModify = this.arrayOfStatesTwo;
    }
    else
    {
      arrayToModify = this.arrayOfStatesOne;
    }

    for (let index = 0; index < this.totNumOfQuadrants; index++) {
      let numOfNeighbours = this.CheckNeighbours(index);
    
      // If cell is alive
      if (this.currentSelectedArr[index]) {
        if (numOfNeighbours < 2 || numOfNeighbours > 3) {
          // Cell dies from underpopulation or overpopulation
          arrayToModify[index] = false;
        } else {
          // Cell stays alive
          arrayToModify[index] = true;
        }
      } 
      // If cell is dead
      else {
        if (numOfNeighbours === 3) {
          // Cell becomes alive due to reproduction
          arrayToModify[index] = true;
        } else {
          // Cell stays dead
          arrayToModify[index] = false;
        }
      }
    }
    
  

    if (this.currentSelectedArr === this.arrayOfStatesOne)
    {
      this.currentSelectedArr = this.arrayOfStatesTwo;
    }
    else
    {
      this.currentSelectedArr = this.arrayOfStatesOne;
    }
  }

  DrawCall() {
    this.p5Ref.background(250); 

    let boolean = false;
    let widthCount = 0;
    let heightCount = 0;

    for (let index = 0; index < this.totNumOfQuadrants; index++) {

      if (widthCount >= this.numberOfQuadrantsWidth) {
          widthCount = 0;
          heightCount++;
      }
  
      // If it's the last iteration, set fill to green
      if (this.currentSelectedArr[index])
      {
        fill(0)
      }
      else
      {
        fill(255);
      }
  
      this.p5Ref.rect(widthCount * this.widthRect, heightCount * this.heightRect , this.heightRect, this.widthRect);
  
      boolean = !boolean;
      widthCount++;
    }
  }

  GuiDrawCall() 
  {
    let fps = this.p5Ref.frameRate();

    fill(255);
    stroke(0);
    textSize(16)
    text("FPS: " + fps.toFixed(2), 40, 30);
  }

  Select() 
  {
    this.p5Ref = window;

    this.widthRect = this.p5Ref.width / this.numberOfQuadrantsWidth;
    this.heightRect = this.p5Ref.height / this.numberOfRectsHeight;

    this.totNumOfQuadrants = this.numberOfQuadrantsWidth * this.numberOfRectsHeight;

    this.arrayOfStatesOne = Array.from({length: this.totNumOfQuadrants}, () => Math.random() >= 0.5);
    this.arrayOfStatesTwo = new Array(this.totNumOfQuadrants).fill(false);

    this.currentSelectedArr = this.arrayOfStatesOne;  // Corrected line

    this.p5Ref.frameRate(5);
  }

  Deselect() {}


  CheckNeighbours(index) {
    let totalAlive = 0;
  
    // Calculate the row and column based on the index
    let row = Math.floor(index / this.numberOfQuadrantsWidth);
    let col = index % this.numberOfQuadrantsWidth;
  
    // Loop over the 3x3 grid centered around the cell
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        // Skip the cell itself
        if (i === 0 && j === 0) {
          continue;
        }
  
        // Calculate the neighbor's row and column
        let neighborRow = row + i;
        let neighborCol = col + j;
  
        // Skip if the neighbor is outside the grid
        if (neighborRow < 0 || neighborRow >= this.numberOfRectsHeight || neighborCol < 0 || neighborCol >= this.numberOfQuadrantsWidth) {
          continue;
        }
  
        // Calculate the neighbor's index
        let neighborIndex = neighborRow * this.numberOfQuadrantsWidth + neighborCol;
  
        // Count the neighbor if it's alive
        if (this.currentSelectedArr[neighborIndex]) {
          totalAlive++;
        }
      }
    }
  
    // Return the total number of alive neighbors
    return totalAlive;
  }
  

}

class TestInputs extends BaseAlgorithmStateClass {
  
  p5ref;
  
  UpdateElements() {}

  UpdateCall() {}

  DrawCall() {
    //background(200); // Grey background
    textAlign(CENTER, CENTER);
    textSize(48);
    fill(255, 0, 0); // Red text
    text("Test input", width / 2, height / 2);
  }

  keyPressedEvent() {
    if (key === 'w' || key === 'W') {
      // If the 'W' key is pressed, the background color is set to green
      this.p5Ref.background(0, 255, 0);
    } else if (key === 's' || key === 'S') {
      // If the 'S' key is pressed, the background color is set to red
      this.p5Ref.background(255, 0, 0);
    }
  }

  GuiDrawCall() {}

  Select() 
  {
    this.p5Ref = window;
    this.p5Ref.keyPressed = this.keyPressedEvent.bind(this);

    this.p5Ref.frameRate(60);
  }

  Deselect() {
    this.p5Ref.keyPressed = null;
  }
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
  new TestInputs(),
];

let currentAlgoIndex = 0;

function setup() {
  let canvasWidth = windowWidth / 2;
  let canvasHeight = 800;
  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent("p5js-canvas");


  let algorithmsSection = document.querySelector('#Algorithms');
  let observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
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
    console.log('Frozen');
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
  allStatesArr[currentAlgoIndex].Deselect();
  
  currentAlgoIndex = index;

  document.getElementById("control-container").innerHTML = "";
  allStatesArr[currentAlgoIndex].UpdateElements();

  allStatesArr[currentAlgoIndex].Select();
}
