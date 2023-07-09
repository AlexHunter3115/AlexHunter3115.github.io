//rotation

//score databse name
//deletion on full thing

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

  oneFourthPoint = 0;
  threeFourthPoint = 0;

  tilesAmountX = 20;
  tilesAmountY = 30;

  tilesWidth = 0;
  tilesHeight = 0;

  totAmountOfTiles = 0;

  tilesArr = [];

  centerPoint2D = [0, 0];

  interval = 60;


  currentPieceColour = [0, 0, 0];
  shapeMatrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];


  gameStopped = false;

  UpdateElements() { }

  UpdateCall() {
    if (frameCount % this.interval == 0 && !this.gameStopped) {
      //this.MovePlayer();

      // this.interval = this.interval -2;

      // if (this.interval < 60)
      // {
      //     this.interval = 60;
      // }
    }
  }

  DrawCall() {
    background(200);
    fill(100);

    stroke(0);

    fill(40);
    rect(0, 0, this.oneFourthPoint, height);
    rect(this.threeFourthPoint, 0, this.oneFourthPoint, height);

    for (let i = 0; i < this.totAmountOfTiles; i++) {
      let tile = this.tilesArr[i];

      fill(tile.color[0], tile.color[1], tile.color[2]);

      rect(tile.coordX * this.tilesWidth + this.oneFourthPoint, tile.coordY * this.tilesHeight,this.tilesWidth, this.tilesHeight);
    }


    let xInMatrix = 0;
    let yInMatrix = 0;

    for (let y = this.centerPoint2D[1] - 1; y < this.centerPoint2D[1] + 2; y++) {
      for (let x = this.centerPoint2D[0] - 1; x < this.centerPoint2D[0] + 2; x++) {

        if (yInMatrix === 1 && xInMatrix === 1) {
          fill(255, 0, 0);
        }
        else {
          fill(this.currentPieceColour[0], this.currentPieceColour[1], this.currentPieceColour[2]);
        }

        if (this.shapeMatrix[yInMatrix][xInMatrix] === 1) {
          rect(x * this.tilesWidth + this.oneFourthPoint, y * this.tilesHeight, this.tilesWidth,this.tilesHeight );
        }
        xInMatrix += 1;
      }
      yInMatrix += 1;
      xInMatrix = 0;
    }
  }

  keyPressedEvent() {
    if (key === "a" || key === "A") {
      if (this.SideCheckCollisionOfPiece(-1, this.shapeMatrix)) {
        this.centerPoint2D[0] -= 1;

      }
    }

    if (key === "d" || key === "D") {
      if (this.SideCheckCollisionOfPiece(1, this.shapeMatrix)) {
        this.centerPoint2D[0] += 1;

      }
    }


    if (key === "s" || key === "S") {

      this.centerPoint2D[1] += 1;

    }

    if (key === "r" || key === "R") {
      this.Rotate();
    }

    if (key === "v" || key === "V") {
      this.Set();
    }
  }

  Set() {
    let xInMatrix = 0;
    let yInMatrix = 0;
    console.log(this.centerPoint2D);
    for (let y = this.centerPoint2D[1] - 1; y < this.centerPoint2D[1] + 2; y++) {
      for (let x = this.centerPoint2D[0] - 1; x < this.centerPoint2D[0] + 2; x++) {
        if (this.shapeMatrix[yInMatrix][xInMatrix] === 1) {

          let oneCoordPos = (x) + (y) * this.tilesAmountX;

          console.log(oneCoordPos);

          let tile = this.tilesArr[oneCoordPos];

          tile.color[0] = this.currentPieceColour[0];
          tile.color[1] = this.currentPieceColour[1];
          tile.color[2] = this.currentPieceColour[2];
          tile.taken = true;
          console.log(tile.oneLineCoord);
        }

        xInMatrix += 1;
      }
      yInMatrix += 1;
      xInMatrix = 0;
    }

    this.GenerateShape();
  }

  GuiDrawCall() { }

  Select() {
    this.p5Ref = window;
    this.p5Ref.keyPressed = this.keyPressedEvent.bind(this);

    frameRate(60);

    this.oneFourthPoint = 0.25 * width; 
    this.threeFourthPoint = 0.75 * width; 

    let widthGameplaySpace = this.threeFourthPoint - this.oneFourthPoint;  

    this.tilesWidth = widthGameplaySpace / this.tilesAmountX; 

    this.tilesHeight = height / this.tilesAmountY;

    this.totAmountOfTiles = this.tilesAmountX * this.tilesAmountY;

    this.ResetMap();
    this.GenerateShape();
  }

  ResetMap() {
    this.tilesArr.length = 0;

    let x = 0;
    let y = 0;

    for (let i = 0; i < this.totAmountOfTiles; i++) {
      let tile = new Tile(); // Create a new instance of Tile

      if (x >= this.tilesAmountX) {
        x = 0;
        y = y + 1;
      }

      tile.coordX = x;
      tile.coordY = y;

      tile.oneLineCoord = i;

      tile.color[0] = 255;
      tile.color[1] = 255;
      tile.color[2] = 255;

      this.tilesArr.push(tile); // Add the tile object to the array

      x = x + 1;
    }
  }

  Deselect() { }

  GenerateShape() {
    let ranNum = Math.floor(Math.random() * 4) + 1;

    this.currentPieceColour[0] = Math.floor(Math.random() * 210) + 40;
    this.currentPieceColour[1] = Math.floor(Math.random() * 210) + 40;
    this.currentPieceColour[2] = Math.floor(Math.random() * 210) + 40;

    this.centerPoint2D[0] = Math.floor(this.tilesAmountX / 2);
    this.centerPoint2D[1] = -1;

    switch (ranNum) {
      case 1:
        this.shapeMatrix = [
          [0, 0, 0],
          [1, 1, 1],
          [0, 1, 0]
        ];
        break;

      case 2:
        this.shapeMatrix = [
          [0, 0, 0],
          [0, 1, 1],
          [0, 1, 1]
        ];
        break;


      case 3:
        this.shapeMatrix = [
          [0, 1, 0],
          [0, 1, 0],
          [0, 1, 0]
        ];
        break;


      case 4:
        this.shapeMatrix = [
          [0, 1, 0],
          [0, 1, 0],
          [0, 1, 1]
        ];
        break;



      default:
        break;
    }
  }

  MovePlayer() {
    this.centerPoint2D[1] += 1;
  }

  Transpose(matrix) {
    return matrix[0].map((_, i) => matrix.map(row => row[i]));
  }

  Rotate() {
    let transposed = this.Transpose(this.shapeMatrix);
    let newShape = transposed.map(row => row.reverse());

    if (this.SideCheckCollisionOfPiece(0,newShape))
    {
      this.shapeMatrix = newShape;
    }
  }

  SideCheckCollisionOfPiece(direction, shape) {
    let xInMatrix = 0;
    let yInMatrix = 0;

    for (let y = this.centerPoint2D[1] - 1; y < this.centerPoint2D[1] + 2; y++) {
      for (let x = this.centerPoint2D[0] - 1; x < this.centerPoint2D[0] + 2; x++) {
        if (shape[yInMatrix][xInMatrix] === 1) {
          let newPos = x + direction;

          let oneCoordPos = newPos + y * this.tilesAmountX;

          if (this.tilesArr[oneCoordPos].taken) {
            return false;
          }

          if (newPos < 0 || newPos >= this.tilesAmountX) {
            return false;
          }
        }

        xInMatrix += 1;
      }
      yInMatrix += 1;
      xInMatrix = 0;
    }

    return true;
  }

}
