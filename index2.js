const container = document.querySelector(".scroller");
const scenes = document.querySelectorAll(".scene");
const images = document.querySelectorAll(".photo");
console.log(images);
console.log(images[0]);
console.log(images[1]);
console.log(images[2]);
console.log(images[3]);

const scroller = new window.Scroller({
  container: container,
  scenes: scenes
});

scroller.on("scene:enter", d => {
  const currentIndex = d.index;
  console.log(`currentIndex: ${d.index}`);
  images.forEach((d, i) => {
    console.log(`loop index: ${i}`);
    if (i == currentIndex) {
      images[i].classList.add("active");
      images[i].classList.remove("inactive");
    } else {
      images[i].classList.add("inactive");
      images[i].classList.remove("active");
    }
  });
});

// starts up the IntersectionObserver
scroller.init();
