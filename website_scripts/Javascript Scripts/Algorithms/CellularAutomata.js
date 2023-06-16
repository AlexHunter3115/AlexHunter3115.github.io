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

  UpdateElements() {
    this.slider = createLabeledSlider("FPS", 1, 20, 3);
  }

  UpdateCall() {
    fill(128, 128, 0);
    this.p5Ref.frameRate(this.slider.value());

    let arrayToModify;

    if (this.currentSelectedArr === this.arrayOfStatesOne) {
      arrayToModify = this.arrayOfStatesTwo;
    } else {
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

    if (this.currentSelectedArr === this.arrayOfStatesOne) {
      this.currentSelectedArr = this.arrayOfStatesTwo;
    } else {
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
      if (this.currentSelectedArr[index]) {
        fill(0);
      } else {
        fill(255);
      }

      this.p5Ref.rect(
        widthCount * this.widthRect,
        heightCount * this.heightRect,
        this.heightRect,
        this.widthRect
      );

      boolean = !boolean;
      widthCount++;
    }
  }

  GuiDrawCall() {
    let fps = this.p5Ref.frameRate();

    fill(255);
    stroke(0);
    textSize(16);
    text("FPS: " + fps.toFixed(2), 40, 30);
  }

  Select() {
    this.p5Ref = window;

    this.widthRect = this.p5Ref.width / this.numberOfQuadrantsWidth;
    this.heightRect = this.p5Ref.height / this.numberOfRectsHeight;

    this.totNumOfQuadrants =
      this.numberOfQuadrantsWidth * this.numberOfRectsHeight;

    this.arrayOfStatesOne = Array.from(
      { length: this.totNumOfQuadrants },
      () => Math.random() >= 0.5
    );
    this.arrayOfStatesTwo = new Array(this.totNumOfQuadrants).fill(false);

    this.currentSelectedArr = this.arrayOfStatesOne; // Corrected line

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
        if (
          neighborRow < 0 ||
          neighborRow >= this.numberOfRectsHeight ||
          neighborCol < 0 ||
          neighborCol >= this.numberOfQuadrantsWidth
        ) {
          continue;
        }

        // Calculate the neighbor's index
        let neighborIndex =
          neighborRow * this.numberOfQuadrantsWidth + neighborCol;

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
