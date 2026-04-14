const pages = [
  {
    title: "Chapter One",
    text: "I prepared this just for you..."
  },
  {
    title: "Memory 1",
    text: "Do you remember the moment we first met?"
  },
  {
    title: "Memory 2",
    text: "As time passes, you became even more valuable."
  },
  {
    title: "Final",
    text: "I'm glad you exist ❤️"
  }
];

let current = 0;

function render() {
  document.getElementById("title").innerText = pages[current].title;
  document.getElementById("text").innerText = pages[current].text;
}

function nextPage() {
  if (current < pages.length - 1) {
    current++;
    render();
  }
}

function prevPage() {
  if (current > 0) {
    current--;
    render();
  }
}

render();