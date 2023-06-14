class Tile {
  oneLineCoord = 0;

  coordX = 0;
  coordY = 0;

  color = [255, 255, 255];

  taken = false;
}

class Tetris extends BaseAlgorithmStateClass {
  p5ref;

  tiles = [];

  numberOfQuadrantsWidth = 15;
  numberOfRectsHeight = 30;

  heightRect = 0;
  widthRect = 0;

  totNumOfQuadrants = 0;

  arrayForCurrentShape = [];
  randomColor = [255, 255, 255];

  interval = 5;

  gameStopped = false;

  UpdateElements() {}

  UpdateCall() {
    if (frameCount % this.interval == 0 && !this.gameStopped) {
      this.MovePlayerPiece();

      // this.interval = this.interval -2;

      // if (this.interval < 60)
      // {
      //     this.interval = 60;
      // }
    }
  }

  MovePlayerPiece() {
    let allowedMove = true;

    for (let index = 0; index < this.arrayForCurrentShape.length; index++) {
      if (this.arrayForCurrentShape[index].y + 1 >= 30) {
        allowedMove = false;
        break;
      }

      let arrayIndex =
        this.arrayForCurrentShape[index].x +
        (this.arrayForCurrentShape[index].y + 1) * this.numberOfQuadrantsWidth;

      if (arrayIndex >= 0) {
        if (this.tiles[arrayIndex].taken === true) {
          allowedMove = false;
          break;
        }
      }
    }

    if (allowedMove) {
      for (let index = 0; index < this.arrayForCurrentShape.length; index++) {
        this.arrayForCurrentShape[index].y =
          this.arrayForCurrentShape[index].y + 1;
      }
    } else {
      let lose = false;

      for (let index = 0; index < this.arrayForCurrentShape.length; index++) {
        let arrayIndex =
          this.arrayForCurrentShape[index].x +
          this.arrayForCurrentShape[index].y * this.numberOfQuadrantsWidth;
        this.tiles[arrayIndex].taken = true;
        this.tiles[arrayIndex].color = this.randomColor;

        if (
          this.arrayForCurrentShape[index].y * this.numberOfQuadrantsWidth <
          height / 6
        ) {
          console.log("should lose");
          this.gameStopped = true;
        }
      }

      if (this.gameStopped === false) {
        this.SetShape();
      }
    }
  }

  DrawCall() {
    background(200);
    fill(100);
    rect(0, 0, width / 4, height);
    rect(width - width / 4, 0, width / 4, height);

    let widthCount = 0;
    let heightCount = 0;

    for (let index = 0; index < this.totNumOfQuadrants; index++) {
      let tile = this.tiles[index];

      if (widthCount >= this.numberOfQuadrantsWidth) {
        widthCount = 0;
        heightCount++;
      }

      fill(tile.color[0], tile.color[1], tile.color[2]);

      if (tile.taken) {
        stroke(0);
      }

      rect(
        tile.coordX * this.widthRect + width / 4,
        tile.coordY * this.heightRect + 1,
        this.heightRect,
        this.widthRect
      );

      widthCount++;
    }

    for (let index = 0; index < this.arrayForCurrentShape.length; index++) {
      fill(this.randomColor[0], this.randomColor[1], this.randomColor[2]);

      stroke(255, 0, 0);

      rect(
        this.arrayForCurrentShape[index].x * this.widthRect + width / 4,
        this.arrayForCurrentShape[index].y * this.heightRect + 1,
        this.heightRect,
        this.widthRect
      );
    }

    fill(255, 0, 0);
    line(0, height / 6, width, height / 6);
  }

  keyPressedEvent() {
    if (key === "a" || key === "A") {
      let canMove = true;

      for (let index = 0; index < this.arrayForCurrentShape.length; index++) {
        if (this.arrayForCurrentShape[index].x - 1 < 0) {
          canMove = false;
          break;
        }
      }

      if (canMove) {
        for (let index = 0; index < this.arrayForCurrentShape.length; index++) {
          this.arrayForCurrentShape[index].x =
            this.arrayForCurrentShape[index].x - 1;
        }
      }
    } else if (key === "d" || key === "D") {
      let canMove = true;

      for (let index = 0; index < this.arrayForCurrentShape.length; index++) {
        if (this.arrayForCurrentShape[index].x + 1 >= 15) {
          canMove = false;
          break;
        }
      }

      if (canMove) {
        for (let index = 0; index < this.arrayForCurrentShape.length; index++) {
          this.arrayForCurrentShape[index].x =
            this.arrayForCurrentShape[index].x + 1;
        }
      }
    }

    if (key === "a" || key === "A") {
    } else if (key === "d" || key === "D") {
    }
  }

  SetShape() {
    let ranIndex = Math.floor(Math.random() * 5);

    let r = random(255);
    let g = random(255);
    let b = random(255);
    this.randomColor = [r, g, b];

    this.arrayForCurrentShape.length = 0;

    switch (ranIndex) {
      case 0:
        {
          // 0 x 0
          // x x x
          // 0 x 0

          let vector1 = createVector(7, 0);

          let vector2 = createVector(6, -1);
          let vector3 = createVector(8, -1);
          let vector4 = createVector(7, -1);

          let vector5 = createVector(7, -2);

          this.arrayForCurrentShape.push(vector1);
          this.arrayForCurrentShape.push(vector2);
          this.arrayForCurrentShape.push(vector3);
          this.arrayForCurrentShape.push(vector4);
          this.arrayForCurrentShape.push(vector5);
        }
        break;

      case 1:
        {
          // x x x

          let vector2 = createVector(6, 0);
          let vector3 = createVector(8, 0);
          let vector4 = createVector(7, 0);

          this.arrayForCurrentShape.push(vector4);
          this.arrayForCurrentShape.push(vector2);
          this.arrayForCurrentShape.push(vector3);
        }
        break;

      case 2:
        // x x x
        // 0 x 0
        {
          let vector2 = createVector(6, -1);
          let vector3 = createVector(8, -1);
          let vector4 = createVector(7, -1);

          let vector1 = createVector(7, 0);

          this.arrayForCurrentShape.push(vector4);
          this.arrayForCurrentShape.push(vector2);
          this.arrayForCurrentShape.push(vector3);

          this.arrayForCurrentShape.push(vector1);
        }
        break;

      case 3:
        {
          let vector2 = createVector(8, 0);
          let vector3 = createVector(8, -1);
          let vector4 = createVector(7, -1);

          let vector1 = createVector(7, 0);

          this.arrayForCurrentShape.push(vector4);
          this.arrayForCurrentShape.push(vector2);
          this.arrayForCurrentShape.push(vector3);

          this.arrayForCurrentShape.push(vector1);
        }
        // x x
        // x x

        break;

      case 4:
        // x x 0
        // x 0 0
        // x 0 0
        {
          let vector2 = createVector(8, -2);
          let vector3 = createVector(7, -2);
          let vector4 = createVector(7, -1);

          let vector1 = createVector(7, 0);

          this.arrayForCurrentShape.push(vector4);
          this.arrayForCurrentShape.push(vector2);
          this.arrayForCurrentShape.push(vector3);

          this.arrayForCurrentShape.push(vector1);
        }
        break;

      default:
        break;
    }
  }

  GuiDrawCall() {}

  Select() {
    this.p5Ref = window;
    this.p5Ref.keyPressed = this.keyPressedEvent.bind(this);

    frameRate(60);

    this.widthRect = (width - (width / 4) * 2) / this.numberOfQuadrantsWidth;
    this.heightRect = height / this.numberOfRectsHeight;

    this.totNumOfQuadrants =
      this.numberOfQuadrantsWidth * this.numberOfRectsHeight;

    this.ResetMap();
    this.SetShape();
  }

  Deselect() {}

  ResetMap() {
    this.tiles.length = 0;

    let widthCount = 0;
    let heightCount = 0;

    for (let index = 0; index < this.totNumOfQuadrants; index++) {
      if (widthCount >= this.numberOfQuadrantsWidth) {
        widthCount = 0;
        heightCount++;
      }

      widthCount++;

      let tile = new Tile(); // Create the tile
      tile.oneLineCoord = index;
      tile.coordX = widthCount - 1;
      tile.coordY = heightCount;

      this.tiles.push(tile); // Push the tile to the array
    }
  }
}
