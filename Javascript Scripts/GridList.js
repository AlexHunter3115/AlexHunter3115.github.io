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
      name: "Crypto Data Analysis -> Notion board",
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
    },
  ],
  cpp: [
    {
      name: "Raylib: Perfect Collision",
      shortDescription: "Short description 1",
      longDescription: "",
    },
    {
      name: "Raylib: Asteroid and 2D Physics simulation",
      shortDescription: "Short description 2",
      longDescription: "cpp description 2",
    },
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
    let naturalHeight = `${projectsContainer.offsetHeight}px`;

    let showing = (projectsContainer.style.display !== "none");
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
  listContainer.innerHTML = "";

  let hideTooltipTimeout;
  let isTooltipVisible = false;

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

    const availability = document.createElement("p");

    if (item.longDescription && item.longDescription.trim() !== "") {
      listItem.setAttribute("data-tooltip", item.longDescription);

      listItem.addEventListener("mouseenter", (event) => {
        const tooltip = document.querySelector(".tooltip-list");

        clearTimeout(hideTooltipTimeout); // clear any previous timeouts

        // Update the tooltip content even if it's currently visible
        tooltip.innerHTML = event.target.getAttribute("data-tooltip");

        if (item.githubLink) {
          availability.style.cursor = "pointer";
          availability.textContent = "Click here for the repo";
          availability.style.color = "green";
        } else {
          availability.textContent = "Repo not available";
          availability.style.color = "red";
        }
        tooltip.appendChild(availability);
        tooltip.style.visibility = "visible";
        isTooltipVisible = true;
      });

      listItem.addEventListener("mouseleave", (event) => {
        if (isTooltipVisible) {
          // if the tooltip is visible
          hideTooltipTimeout = setTimeout(() => {
            const tooltip = document.querySelector(".tooltip-list");
            tooltip.style.visibility = "hidden";
            isTooltipVisible = false;
          }, 3000);
        }
      });

      if (item.githubLink) {
        availability.addEventListener("click", () =>
          window.open(item.githubLink)
        );
      }
    }

    listContainer.appendChild(listItem);
  });

  const tooltip = document.querySelector(".tooltip-list");
  tooltip.addEventListener("mouseenter", () => {
    clearTimeout(hideTooltipTimeout);
  });
  tooltip.addEventListener("mouseleave", () => {
    hideTooltipTimeout = setTimeout(() => {
      tooltip.style.visibility = "hidden";
      isTooltipVisible = false;
    }, 3000);
  });
}
