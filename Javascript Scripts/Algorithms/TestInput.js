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
    if (key === "w" || key === "W") {
      // If the 'W' key is pressed, the background color is set to green
      console.log("W was pressed");
      this.p5Ref.background(0, 255, 0);
    } else if (key === "s" || key === "S") {
      // If the 'S' key is pressed, the background color is set to red
      this.p5Ref.background(255, 0, 0);
      console.log("S was pressed");
    }
  }

  GuiDrawCall() {}

  Select() {
    this.p5Ref = window;
    this.p5Ref.keyPressed = this.keyPressedEvent.bind(this);

    this.p5Ref.frameRate(60);
  }

  Deselect() {
    this.p5Ref.keyPressed = null;
  }
}
