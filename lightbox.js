// lightbox - click a photo to see it bigger, then move through the gallery
const photos = document.querySelectorAll(".hero-images img");
const lightbox = document.getElementById("lightbox");
const bigPhoto = document.getElementById("lightbox-img");
const caption = document.getElementById("lightbox-caption");
let current = 0;

// shows the photo at the given position (wraps around at both ends)
function showPhoto(position) {
  if (position < 0) {
    position = photos.length - 1;
  } else if (position >= photos.length) {
    position = 0;
  }
  current = position;

  // currentSrc is the file the browser really loaded (the best size for this screen)
  bigPhoto.src = photos[current].currentSrc || photos[current].src;
  bigPhoto.alt = photos[current].alt;
  caption.textContent = photos[current].alt + " (" + (current + 1) + " of " + photos.length + ")";
}

function openLightbox(position) {
  showPhoto(position);
  lightbox.classList.add("open");
}

function closeLightbox() {
  lightbox.classList.remove("open");
}

// every photo opens the lightbox when it is clicked
photos.forEach(function (photo, index) {
  photo.addEventListener("click", function () {
    openLightbox(index);
  });
});

// the arrows move through the photos (stopPropagation keeps the lightbox open)
document.getElementById("lightbox-prev").addEventListener("click", function (event) {
  event.stopPropagation();
  showPhoto(current - 1);
});
document.getElementById("lightbox-next").addEventListener("click", function (event) {
  event.stopPropagation();
  showPhoto(current + 1);
});

// click the dark background (or the X) to close
lightbox.addEventListener("click", function (event) {
  if (event.target !== bigPhoto) {
    closeLightbox();
  }
});

// keyboard: Escape closes, left and right arrows change the photo
document.addEventListener("keydown", function (event) {
  if (!lightbox.classList.contains("open")) {
    return;
  }
  if (event.key === "Escape") {
    closeLightbox();
  } else if (event.key === "ArrowLeft") {
    showPhoto(current - 1);
  } else if (event.key === "ArrowRight") {
    showPhoto(current + 1);
  }
});
