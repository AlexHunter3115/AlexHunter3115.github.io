let showing = true;

const data = {
  js: [
    {
      name: "Backend Databse for this Website",
      shortDescription: "Short description 1",
      longDescription: "js description 1",
    },
  ],
  py: [
    {
      name: "NFT Collection Creator",
      shortDescription: "Short description 1",
      longDescription: "py description 1",
    },
    {
      name: "Crypto Data Analysis ➡️ Notion board",
      shortDescription: "Short description 2",
      longDescription: "yp description 2",
    },
  ],
  unity: [
    {
      name: "Testing Ideas",
      shortDescription: "Short description 1",
      longDescription: "un description 1",
    },
    {
      name: "Learning Shaders and Compute Shaders",
      shortDescription: "Short description 2",
      longDescription: "un description 2 \nun description 2 \n",
    }
  ],
  cpp: [
    {
      name: "Raylib: Perfect Collision",
      shortDescription: "Short description 1",
      longDescription: "",
      githubLink: "https://github.com/example/repo1",
    },
    {
      name: "Raylib: Asteroid and 2D Physics simulation",
      shortDescription: "Short description 2",
      longDescription: "cpp description 2 jioadjioawdjioadijoasdjiosadijosadjioasdjio"
    }
  ],
  rust: [
    {
      name: "Bevy: Pong",
      shortDescription: "Short description 1",
      longDescription: "ru description 1",
    },
    {
      name: "Raylib: Perfect Collision",
      shortDescription: "Rust version of the C++ task",
      longDescription: "ru description 2",
    },
  ],
};

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll(".divider-h1-toogle").forEach((header) => {
    let projectsContainer = header.nextElementSibling;

    projectsContainer.style.visibility = "visible";
    projectsContainer.style.maxHeight = "none";
    let naturalHeight = `${projectsContainer.offsetHeight + 400}px`;

    let showing = projectsContainer.style.display !== "none";
    if (!showing) {
      projectsContainer.style.maxHeight = "0px";
      projectsContainer.style.visibility = "hidden";
    } else {
      projectsContainer.style.maxHeight = naturalHeight;
    }

    header.addEventListener("click", () => {
      if (showing) {
        showing = false;
        projectsContainer.style.maxHeight = "0px";
        projectsContainer.style.visibility = "hidden";
      } else {
        showing = true;
        projectsContainer.style.maxHeight = naturalHeight;
        projectsContainer.style.visibility = "visible";
      }
    });
  });

  document.querySelectorAll(".list-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      showListForLang(event.target.getAttribute("data-lang"));
    });
  });
});

function showListForLang(lang) {
  const listContainer = document.querySelector(".list-container");
  const tooltip = document.querySelector(".tooltip-section");

  // Clear out the list and tooltip contents
  listContainer.innerHTML = "";
  tooltip.innerHTML = "";

  data[lang].forEach((item) => {
    const listItem = document.createElement("div");
    listItem.classList.add("list-item");

    const itemName = document.createElement("p");
    itemName.textContent = item.name;
    itemName.classList.add("item-name");
    listItem.appendChild(itemName);

    const itemDescription = document.createElement("p");
    itemDescription.textContent = item.shortDescription;
    itemDescription.classList.add("item-description");
    listItem.appendChild(itemDescription);

    listItem.addEventListener("click", (event) => {
      tooltip.innerHTML = ""; // Clear the tooltip on each click

      const longDescription = document.createElement("p");

      if (item.longDescription && item.longDescription.trim() !== "") {
        longDescription.textContent = item.longDescription;
      } else {
        longDescription.textContent =
          "The currently selected item has no more data";
        longDescription.style.color = "orange";
      }

      tooltip.appendChild(longDescription);

      const availability = document.createElement("p");

      if (item.githubLink) {
        const repoLink = document.createElement("a");
        repoLink.href = item.githubLink;
        repoLink.textContent = "Click here for the repo";
        repoLink.style.color = "green";
        repoLink.target = "_blank"; // Opens the link in a new tab
        availability.appendChild(repoLink);
      } else {
        availability.textContent = "Repo not available";
        availability.style.color = "red";
      }

      tooltip.appendChild(availability);
    });

    listContainer.appendChild(listItem);
  });
}
