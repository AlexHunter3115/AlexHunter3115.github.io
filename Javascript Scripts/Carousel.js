const text1_options = [
  "Mesh Destruction",
  "Dungeon Forge",
  "Civ Game",
  "GGJ 2023"
];
const text2_options = [
  "69 min. read",
  "7 min. read",
  "8 min. read",
  "87,658.1277 min. read"
];
const color_options = ["#EBB9D2", "#FE9968", "#7FE0EB", "#6CE5B1"];
const image_options = [
  "https://images.unsplash.com/photo-1524721696987-b9527df9e512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1190&q=80",
  "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1506073828772-2f85239b6d2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
  "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
];
const buttonText_options = [
  "Go to the mesh destruction card!!",
  "Go to the dungeon forge card!!",
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


function updateButtonAction(index) {
  switch (index) {
    case 0:
      todoButton.onclick = function () {
        scrollToGridItem('Mesh-Dest-Highlight');
      };
      break;
    case 1:
      todoButton.onclick = function () {
        scrollToGridItem('Dissertation-Highlight');
      };
      break;
    case 2:
      todoButton.onclick = function () {
        scrollToGridItem('Civ-Highlight');
      };
      break;
    case 3:
      todoButton.onclick = function () {
        scrollToGridItem('GGJ-Highlight');
      };
      break;
  }
}



function scrollToGridItem(itemId) {
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


updateButtonAction(i);