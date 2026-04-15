let pages = [];

// 1'den 37'ye kadar otomatik ekler
for (let x = 1; x <= 37; x++) {
  pages.push("pages/" + x + ".png");
}

let i = 0;

const intro = document.getElementById("intro");
const book = document.getElementById("book");
const img = document.getElementById("img");
const frame = document.getElementById("frame");

const music = document.getElementById("music");
const click = document.getElementById("click");

// START
function start() {
  intro.style.display = "none";
  book.classList.remove("hidden");

  music.play().catch(()=>{});
  render();
}

// RENDER
function render() {
  img.src = pages[i];
}

// ANIMATION + SOUND
function animate(callback) {
  frame.classList.remove("fade");
  void frame.offsetWidth;
  frame.classList.add("fade");

  if (click) {
    click.currentTime = 0;
    click.play();
  }

  setTimeout(callback, 120);
}

// NEXT
function next() {
  if (i < pages.length - 1) {
    animate(() => {
      i++;
      render();
    });
  }
}

// PREV
function prev() {
  if (i > 0) {
    animate(() => {
      i--;
      render();
    });
  }
}

// MUSIC
function toggleMusic() {
  if (music.paused) music.play();
  else music.pause();
}