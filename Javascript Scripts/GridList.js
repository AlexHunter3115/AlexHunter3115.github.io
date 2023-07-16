const data = {
  js: [
    {
      name: "JavaScript Example 1",
      shortDescription: "Short description 1",
      longDescription: "js description 1",
    },
    {
      name: "JavaScript Example 2",
      shortDescription: "Short description 2",
      longDescription: "js description 2",
    },
  ],
  py: [
    {
      name: "Python Example 1",
      shortDescription: "Short description 1",
      longDescription: "py description 1",
    },
    {
      name: "Python Example 2",
      shortDescription: "Short description 2",
      longDescription: "yp description 2",
    },
  ],
  unity: [
    {
      name: "Unity Example 1",
      shortDescription: "Short description 1",
      longDescription: "un description 1",
    },
    {
      name: "Unity Example 2",
      shortDescription: "Short description 2",
      longDescription: "un description 2 \nun description 2 \n",
      githubLink: "https://github.com/AlexHunter3115/Uni-Py-Projects",
    },
  ],
  cpp: [
    {
      name: "C++ Example 1",
      shortDescription: "Short description 1",
    },
    {
      name: "C++ Example 2",
      shortDescription: "Short description 2",
      longDescription: "cpp description 2",
    },
  ],
  rust: [
    {
      name: "Rust Example 1",
      shortDescription: "Short description 1",
      longDescription: "ru description 1",
    },
    {
      name: "Rust Example 2",
      shortDescription: "Short description 2",
      longDescription: "ru description 2",
    },
    {
      name: "Rust Example 1",
      shortDescription: "Short description 1",
      longDescription: "ru description 1",
    },
    {
      name: "Rust Example 2",
      shortDescription: "Short description 2",
      longDescription: "ru description 2",
    },
    {
      name: "Rust Example 1",
      shortDescription: "Short description 1",
      longDescription: "ru description 1",
    },
    {
      name: "Rust Example 2",
      shortDescription: "Short description 2",
      longDescription: "ru description 2",
    },
  ],
};

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll(".list-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      showListForLang(event.target.getAttribute("data-lang"));
    });
  });
});

function showListForLang(lang) {
  const listContainer = document.querySelector(".list-container");
  listContainer.innerHTML = "";

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

    if (item.longDescription && item.longDescription.trim() !== "") {
      listItem.setAttribute("data-tooltip", item.longDescription);

      listItem.addEventListener("mouseenter", (event) => {
        const tooltip = document.querySelector(".tooltip-list");
        tooltip.innerHTML = event.target.getAttribute("data-tooltip");

        const availability = document.createElement("p");

        if (item.githubLink) {
          listItem.style.cursor = "pointer";
          availability.textContent = "Click here for the repo";
          availability.style.color = "green";
        } else {
          availability.textContent = "Repo not available";
          availability.style.color = "red";
        }
        tooltip.appendChild(availability);
        tooltip.style.visibility = "visible";
      });

      listItem.addEventListener("mouseleave", (event) => {
        const tooltip = document.querySelector(".tooltip-list");
        tooltip.style.visibility = "hidden";
      });

      // Add click event outside of mouseenter event
      if (item.githubLink) {
        listItem.addEventListener("click", () => window.open(item.githubLink));
      }
    }

    listContainer.appendChild(listItem);
  });
}
