const text1_options = [
  "Mesh Destruction",
  "Dungeon Forge",
  "Civ Game",
  "Global Game Jam 2023"
];

const text2_options = [
  "This project showcases a potential way to create a destructible wall system in the Unity game engine, directed towards FPS games. The wall is dynamic with many public variables that change the way the walls react depending on the designer's needs for the level in which the wall is implemented.\n\n\nThe algorithms used are:\n\n• Marching Square: To draw the wall mesh\n• Flood Fill: To find floating sections to spawn as debris\n• Voronoi: in case the designer wants the debris to split into more pieces\n• Convex Hull Algorithm: To create objects from the points signaled by the Flood Fill algorithm.",
  "Dungeon Forge is an asset pack for the Unity game engine that anyone can download. It aids in the creation of procedurally generated dungeons for games in 2D or 3D using a built-in editor and many options to choose from.\n\nThe list of algorithms used in this project are the following:\n\nMarching Square -- A* pathfinding -- Bezier Curves -- Dijkstra -- Poisson -- Voronoi -- Delaunay Triangulation -- Prim's Algorithm -- Perlin Noise and Worms -- Cellular Automata -- BSP -- Flood Fill -- Diamond Square -- Wave Function Collapse -- L-System -- Differential limitation aggregation -- Random Walk",
  "This project showcases a simulation of a civilization running in the Unity game engine.\nThe player places the 'council' (the starting building) and from there, every night the game will make a decision whether to build new buildings or not, and which type of building to build, different buidlings gather different resources. This is all dictated by a formula which prioritizes specific resourcesneeded to grow the civilization.\n\nThis project also consists of a graphing system that the user can use to check correlation between different data points, such as food consumption and entities currently in the world.",
  "A team of 3 people created this game with the theme 'Roots'."
];

const color_options = ["#1F1E10", "#212341", "#1F1E10", "#212341"];
const image_options = [
  "pictures/mesh_dest.png",
  "pictures/dungeonforge.png",
  "pictures/civ_game.png",
  "pictures/rootwars.png"
];

const buttonText_options = [
  "Go to the Mesh Destruction card!!",
  "Go to the Dungeon Forge card!!",
  "Go to the Civilization card!!",
  "Go to Root Wars' card!!"
];

var i = 0;
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carousel-wrapper");
const mainMenu = document.getElementById("menu");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");
const todoButton = document.getElementById("todo-button");

currentOptionText1.innerText = text1_options[i];
currentOptionText2.innerText = text2_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.background = color_options[i];
todoButton.innerText = buttonText_options[i];

optionNext.onclick = function () {
  i = i + 1;
  i = i % text1_options.length;
  currentOptionText1.dataset.nextText = text1_options[i];

  currentOptionText2.dataset.nextText = text2_options[i];

  mainMenu.style.background =color_options[i];
  carousel.classList.add("anim-next");
  
  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);
  
  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-next");
  }, 650);

  // Update the button text
  todoButton.innerText = buttonText_options[i];
};

optionPrevious.onclick = function () {
  if (i === 0) {
    i = text1_options.length;
  }
  i = i - 1;
  currentOptionText1.dataset.previousText = text1_options[i];

  currentOptionText2.dataset.previousText = text2_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-previous");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);
  
  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-previous");
  }, 650);

  // Update the button text
  todoButton.innerText = buttonText_options[i];
};


function updateButtonAction() {

  switch (i) {
    case 0:
      todoButton.onclick = function () {
        scrollToGridItem();
      };
      break;
    case 1:
      todoButton.onclick = function () {
        scrollToGridItem();
      };
      break;
    case 2:
      todoButton.onclick = function () {
        scrollToGridItem();
      };
      break;
    case 3:
      todoButton.onclick = function () {
        scrollToGridItem();
      };
      break;
  }
}



function scrollToGridItem() {
  
  itemId = "Mesh-Dest-Highlight";
  switch (i) {
    case 0:
      
        itemId ='Mesh-Dest-Highlight';
      
      break;
    case 1:
      
        itemId ='Dissertation-Highlight';
      
      break;
    case 2:
      
        itemId ='Civ-Highlight';
      
      break;
    case 3:
     
        itemId ='GGJ-Highlight';
      
      break;
  }

  const gridItem = document.getElementById(itemId);

  if (gridItem) {
      gridItem.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Add a class to highlight the grid item
      gridItem.classList.add('highlight');

      // Remove the class after a certain duration (e.g. 3 seconds)
      setTimeout(() => {
          gridItem.classList.remove('highlight');
      }, 3000);
  }
}


updateButtonAction();