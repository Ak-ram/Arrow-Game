let all = document.body.querySelectorAll("div");
for (let i = 0; i < all.length; i++) {
  all[i].addEventListener("click", (event) => {
    // console.log(`Event in element Num: ${i + 1}  is Trigger`);
    console.log(all[i].id);
  });
}

////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////
////////////////////////////

let boxBoundingRect = flow.getBoundingClientRect(),
  arrow = {
    x: boxBoundingRect.left + boxBoundingRect.width / 2,
    y: boxBoundingRect.top + boxBoundingRect.height / 2
  };

document.addEventListener("click", (e) => {
  let setup = {
    angle:
      Math.atan2(e.pageX - arrow.x, -(e.pageY - arrow.y)) * (180 / Math.PI),
    reversed: 90,
    motion: (rotation, reversed, translation = 200, scale = 1) => {
      return `rotate(${
        rotation - reversed
      }deg) translate(${translation}px) scale(${scale})`;
    }
  };

  flow.style.transform = setup.motion(setup.angle, setup.reversed, 0);
  setTimeout(() => {
    flow.style.transform = setup.motion(setup.angle, setup.reversed, 200, 1.5);
  }, 1000);
  setTimeout(() => {
    flow.style.transform = setup.motion(0, 0, 0, 1);
  }, 2000);
});