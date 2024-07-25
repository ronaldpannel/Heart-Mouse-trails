const bodyEl = document.querySelector("body");

bodyEl.addEventListener("pointermove", (e) => {
  let mouseX = e.x;
  let mouseY = e.y;
  let spanEl = document.createElement("span");
  spanEl.style.left = mouseX + "px";
  spanEl.style.top = mouseY + "px";
  spanEl.classList.add("heartSpan");
  let size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});

bodyEl.addEventListener("click", (e) => {
  let mouseX = e.x;
  let mouseY = e.y;
  let spanEl = document.createElement("span");
  spanEl.style.left = mouseX + "px";
  spanEl.style.top = mouseY + "px";
  spanEl.classList.add("heartSpan");
  let size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
