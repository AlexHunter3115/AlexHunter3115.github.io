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
      console.log("S was pressed and this is for the new version");

      let ranNum = this.getRandomInt(1, 200);

      let newScores = {
        player: "Alice",
        score: ranNum,
      };

      this.getScores().then((success) => {
        if (success) {
          console.log("Successfully fetched scores.");
        } else {
          console.log("Failed to fetch scores.");
        }
      });

      this.updateScores(newScores).then((success) => {
        if (success) {
          console.log("Successfully updated scores.");
        } else {
          console.log("Failed to update scores.");
        }
      });

      // Use the updateScores function with some example data
    }
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

  getScores() {
    // Use the fetch function to send a GET request to the /scores endpoint
    return (
      fetch("http://localhost:3000/scores")
        // Parse the response as JSON
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        // Log the data to the console (or do something else with it)
        .then((data) => {
          console.log(data);
          return true; // return true if successfully fetched data
        })
        // Catch any errors and log them to the console
        .catch((error) => {
          console.error("Error:", error);
          return false; // return false in case of an error
        })
    );
  }

  // Define a function to update scores on the server
  updateScores(newScores) {
    // Use the fetch function to send a POST request to the /scores endpoint
    // We're including the new scores in the body of the request, and setting the Content-Type header to application/json
    return (
      fetch("http://localhost:3000/scores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newScores),
      })
        // Parse the response as JSON
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        // Log the data to the console (or do something else with it)
        .then((data) => {
          console.log(data);
          return true; // return true if successfully updated data
        })
        // Catch any errors and log them to the console
        .catch((error) => {
          console.error("Error:", error);
          return false; // return false in case of an error
        })
    );
  }
}
