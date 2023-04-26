document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = 0;
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const halfWindowHeight = (window.innerHeight || document.documentElement.clientHeight) / 2;

    // Check if the element is at the top of the viewport (first section)
    if (rect.top >= 0 && rect.top <= halfWindowHeight) {
        return true;
    }

    // Check if the element is at the bottom of the viewport (last section)
    if (rect.bottom >= halfWindowHeight && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        return true;
    }

    // Check if the element is in the middle of the viewport (other sections)
    return rect.top <= halfWindowHeight && rect.bottom >= halfWindowHeight;
}

function toggleGif(id, src) {
    const imageElement = document.getElementById(id);
    if (imageElement.src.includes(src)) {
        const originalSrc = src.includes("gifs") ? src.replace("gifs", "pictures").replace(".gif", "_static.png") : src.replace("pictures", "gifs").replace("_static.png", ".gif");
        imageElement.src = originalSrc;
    } else {
        imageElement.src = src;
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

function copyEmailToClipboard() {
    const emailToCopy = document.getElementById('emailToCopy');
    const copiedEmail = document.getElementById('copiedEmail');
    const customPopup = document.getElementById('customPopup');
    emailToCopy.select();
    document.execCommand('copy');
    copiedEmail.textContent = emailToCopy.value;
    customPopup.classList.add('show');

    setTimeout(() => {
        customPopup.classList.remove('show');
    }, 3000);
}

function openLink(url) {
    window.open(url, '_blank');
  }

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button-algo');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const title = button.getAttribute('data-title');
            const description = button.getAttribute('data-description');

            document.getElementById('main-title').textContent = title;
            document.getElementById('main-description').textContent = description;
        });
    });
});

window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.fade-in');
    for (var i = 0; i < elements.length; i++) {
      var position = elements[i].getBoundingClientRect().top;
      if (position < window.innerHeight - 100) {
        elements[i].classList.add('visible');
      }
    }
  });


