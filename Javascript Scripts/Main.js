let ytPlayer;

function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player('video-iframe', {
    events: {
      'onReady': onPlayerReady,
    }
  });
}

function onPlayerReady(event) {
  checkVideoVisibility();
}

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

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const halfWindowHeight = (window.innerHeight || document.documentElement.clientHeight) / 2;
  const topInView = rect.top >= 0 && rect.top <= halfWindowHeight;
  const bottomInView = rect.bottom >= halfWindowHeight && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);

  return { topInView, bottomInView };
}


function isInViewportWhole(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  const topInView = rect.top >= 0 && rect.top < windowHeight;
  const bottomInView = rect.bottom > 0 && rect.bottom <= windowHeight;

  return { topInView, bottomInView };
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

    gridItem.classList.add('highlight');

    setTimeout(() => {
      gridItem.classList.remove('highlight');
    }, 3000);
  }
}

function copyToClipboard(text) {
  const copiedText = document.getElementById('copiedText');
  const customPopup = document.getElementById('customPopup');

  // Use the Clipboard API
  navigator.clipboard.writeText(text).then(function() {
    console.log('Copying to clipboard was successful!');
    copiedText.textContent = text;
    customPopup.classList.add('show');

    setTimeout(() => {
      customPopup.classList.remove('show');
    }, 3000);
  }, function(err) {
    console.error('Could not copy text: ', err);
  });
}

function openLink(url) {
  window.open(url, '_blank');
}

function checkVideoVisibility() {
  const video = document.querySelector("#video-iframe");
  let visibility = isInViewportWhole(video);

  if (visibility.topInView || visibility.bottomInView) {
    if (ytPlayer && typeof ytPlayer.playVideo === 'function') {
      ytPlayer.playVideo();
    }
  } else {
    if (ytPlayer && typeof ytPlayer.pauseVideo === 'function') {
      ytPlayer.pauseVideo();
    }
  }
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

  let featuredSection = document.querySelector("#Featured");
  let workSection = document.querySelector("#Work");
  let contactSection = document.querySelector("#Contact");
  let algorithmsSection = document.querySelector("#Algorithms");
  let sections = [featuredSection, workSection, contactSection, algorithmsSection];

  function revealSections() {
    for (let section of sections) {
      if (isInViewport(section).topInView || isInViewport(section).bottomInView) {
        if (section.classList.contains("hidden")) {
          section.classList.remove("hidden");
          section.classList.add("reveal");
        }
          else if (section.classList.contains("hidden-right")) {
            section.classList.remove("hidden-right");
            section.classList.add("reveal-right");
          }
        }
      }
    }
  
    // Reveal sections on initial load
    revealSections();
  
    window.addEventListener('scroll', function() {
      var elements = document.querySelectorAll('.fade-in');
      for (var i = 0; i < elements.length; i++) {
        var position = elements[i].getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
          elements[i].classList.add('visible');
        }
      }
  
      // Reveal sections when scrolling
      revealSections();
  
      // Check video visibility
      checkVideoVisibility();
    });
  
    // Check video visibility on initial load
    checkVideoVisibility();
  
    // Load YouTube API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  });