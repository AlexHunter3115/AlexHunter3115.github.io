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
