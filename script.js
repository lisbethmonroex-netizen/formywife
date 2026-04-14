let pages = [
  "pages/1.png",
  "pages/2.png",
  "pages/3.png",
  "pages/4.png",
  "pages/5.png",
  "pages/6.png",
  "pages/7.png",
  "pages/8.png",
  "pages/9.png",
  "pages/10.png",
  "pages/11.png",
  "pages/12.png",
  "pages/13.png",
  "pages/14.png",
  "pages/15.png",
  "pages/16.png",
  "pages/17.png",
  "pages/18.png",
  "pages/19.png",
  "pages/20.png",
  "pages/21.png",
  "pages/22.png",
  "pages/23.png",
  "pages/24.png",
  "pages/25.png"
];

let i = 0;

const intro = document.getElementById("intro");
const book = document.getElementById("book");
const img = document.getElementById("img");
const frame = document.getElementById("frame");
const music = document.getElementById("music");
const click = document.getElementById("click");

function start() {
  intro.style.display = "none";
  book.classList.remove("hidden");

  music.play().catch(()=>{});
  render();
}

function render() {
  img.src = pages[i];
}

function animate(callback) {
  frame.classList.remove("fade");
  void frame.offsetWidth;
  frame.classList.add("fade");

  if (click) {
    click.currentTime = 0;
    click.play();
  }

  setTimeout(callback, 150);
}

function next() {
  if (i < pages.length - 1) {
    animate(() => {
      i++;
      render();
    });
  }
}

function prev() {
  if (i > 0) {
    animate(() => {
      i--;
      render();
    });
  }
}

function toggleMusic() {
  if (music.paused) music.play();
  else music.pause();
}