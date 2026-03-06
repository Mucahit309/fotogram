const IMAGES = [
  { "url": "./img/alaska2.jpg", "title": "Alaska" },
  { "url": "./img/anime-8788959_1280.png", "title": "Anime" },
  { "url": "./img/atmosphere-8752835_1280.png", "title": "Atmosphere" },
  { "url": "./img/blue-tit-8521052_1280.png", "title": "Blue Tit" },
  { "url": "./img/hurricane-92968_1280.png", "title": "Hurricane" },
  { "url": "./img/lake-2896379_1280.png", "title": "Lake" },
  { "url": "./img/moorente-8783210_1280.png", "title": "Moorente" },
  { "url": "./img/sea-2563389_1280.png", "title": "Sea" },
  { "url": "./img/snow-bunting-6781122_1280.png", "title": "Snow Bunting" },
  { "url": "./img/snow-leopard-cubs-8039138_1280.png", "title": "Snow Leopard Cubs" },
  { "url": "./img/travel-8785493_1280.png", "title": "Travel" },
  { "url": "./img/winter-1675197_1280.png", "title": "Winter" }
];

let currentIndex = 0;

function init() {
  renderGallery();
}

function renderGallery() {
  const container = document.getElementById('gallery-grid');
  container.innerHTML = '';
  
  for (let i = 0; i < IMAGES.length; i++) {
    container.innerHTML += `
      <button class="image-card" onclick="openOverlay(${i})" aria-label="View ${IMAGES[i].title}">
        <img src="${IMAGES[i].url}" alt="${IMAGES[i].title}">
      </button>`;
  }
}

function openOverlay(index) {
  currentIndex = index;
  document.getElementById('overlay').classList.remove('d-none');
  
  updateOverlay();
  document.getElementById('close-overlay-btn').focus();
}

function updateOverlay() {
  const image = IMAGES[currentIndex];
  document.getElementById('overlay-title').innerHTML = image.title;
  document.getElementById('image-counter').innerHTML = `${currentIndex + 1} / ${IMAGES.length}`;
  
  const figure = document.getElementById('overlay-figure');
  figure.innerHTML = `<img src="${image.url}" alt="${image.title}">`;
}

function closeOverlay() {
  document.getElementById('overlay').classList.add('d-none');
}

function closeOverlayOutside(event) {
  if (event.target.id === 'overlay') {
    closeOverlay();
  }
}

function nextImage() {
  currentIndex = (currentIndex + 1) % IMAGES.length;
  updateOverlay();
}

function previousImage() {
  currentIndex = (currentIndex - 1 + IMAGES.length) % IMAGES.length;
  updateOverlay();
}