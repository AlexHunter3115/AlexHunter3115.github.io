const data = {
    js: [
        {
            name: "JavaScript Example 1",
            shortDescription: "Short description 1",
            longDescription: "Long description 1"
        },
        {
            name: "JavaScript Example 2",
            shortDescription: "Short description 2",
            longDescription: "Long description 2"
        },
        // more items...
    ],
    py: [
        {
            name: "Python Example 1",
            shortDescription: "Short description 1",
            longDescription: "Long description 1"
        },
        {
            name: "Python Example 2",
            shortDescription: "Short description 2",
            longDescription: "Long description 2"
        },
    ],
    unity: [
        {
            name: "Unity Example 1",
            shortDescription: "Short description 1",
            longDescription: "Long description 1"
        },
        {
            name: "Unity Example 2",
            shortDescription: "Short description 2",
            longDescription: "Long description 2"
        },
    ],
    cpp: [
        {
            name: "C++ Example 1",
            shortDescription: "Short description 1",
            longDescription: "Long description 1"
        },
        {
            name: "C++ Example 2",
            shortDescription: "Short description 2",
            longDescription: "Long description 2"
        },
        {
            name: "C++ Example 1",
            shortDescription: "Short description 1",
            longDescription: "Long description 1"
        },
        {
            name: "C++ Example 2",
            shortDescription: "Short description 2",
            longDescription: "Long description 2"
        },
        {
            name: "C++ Example 1",
            shortDescription: "Short description 1",
            longDescription: "Long description 1"
        },
        {
            name: "C++ Example 2",
            shortDescription: "Short description 2",
            longDescription: "Long description 2"
        },
        {
            name: "C++ Example 1",
            shortDescription: "Short description 1",
            longDescription: "Long description 1"
        },
        {
            name: "C++ Example 2",
            shortDescription: "Short description 2",
            longDescription: "Long description 2"
        },
    ],
    rust: [
        {
            name: "Rust Example 1",
            shortDescription: "Short description 1",
            longDescription: "Long description 1"
        },
        {
            name: "Rust Example 2",
            shortDescription: "Short description 2",
            longDescription: "Long description 2"
        }
    ],
};


document.querySelectorAll('.list-button').forEach(button => {
    button.addEventListener('click', (event) => {
        showListForLang(event.target.getAttribute('data-lang'));
    });
});

function showListForLang(lang) {
    const listContainer = document.querySelector('.list-container');
    listContainer.innerHTML = '';

    data[lang].forEach(item => {
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');

        const itemName = document.createElement('p');
        itemName.textContent = item.name;
        listItem.appendChild(itemName);

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.shortDescription;
        listItem.appendChild(itemDescription);

        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip-list');
        tooltip.textContent = item.longDescription;

        listItem.appendChild(tooltip);
        listContainer.appendChild(listItem);
    });
}

