let tasks = [];
let activeArr = [];
let completedArr = [];
const form = document.querySelector("form");
const addTask = document.querySelector("#add");
const tasksWrap = document.querySelector("#tasks-wrap");
const all = document.querySelector(".all");
const active = document.querySelector(".active");
const completed = document.querySelector(".completed");
const clear = document.querySelector(".clear-completed");
console.log(all, active, completed);
const display = (arr) => {
  tasksWrap.innerHTML = arr.map((v) => {
    return `<div class="single-task flex between">
                <div class="flex">
                  <form class="checked">
                    <input type="checkbox" ${
                      v.state == true ? "checked" : ""
                    } class="state" />
                  </form>
                  <p class=${v.state == true ? "lined" : "notlined"}>${
      v.name
    }</p>
                </div>
                <button class="delete">
                  <img src="./images/icon-cross.svg" alt="icon-cross" />
                </button>
              </div>`;
  });
  const itemsLeft = document.querySelector(".items-left");
  itemsLeft.innerHTML = activeArr.length;
  const state = document.querySelectorAll(".state");
  state.forEach((v, i) => {
    v.addEventListener("change", () => {
      tasks[i].state = v.checked;
      console.log(tasks);
      const done = tasks.filter((v) => v.state == false);
      const unDone = tasks.filter((v) => v.state == true);
      activeArr = done;
      completedArr = unDone;
      console.log(activeArr, completedArr);
      display(tasks);
    });
  });
  const deleteBtn = document.querySelectorAll(".delete");
  deleteBtn.forEach((v, i) => {
    v.addEventListener("click", () => {
      const filtered = tasks.filter((item) => item !== tasks[i]);

      tasks = [...filtered];
      const done = tasks.filter((v) => v.state == false);
      const unDone = tasks.filter((v) => v.state == true);
      activeArr = done;
      completedArr = unDone;
      //  console.log(filtered);
      display(tasks);
    });
  });
};
display(tasks);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = addTask.value;
  tasks.push({ name, state: false });
  activeArr.push({ name, state: false });
  addTask.value = "";
  console.log(tasks);
  display(tasks);
});
active.addEventListener("click", () => {
  display(activeArr);
});
completed.addEventListener("click", () => {
  display(completedArr);
});
all.addEventListener("click", () => {
  display(tasks);
});
clear.addEventListener("click", () => {
  tasks = activeArr;
  completedArr = [];
  display(tasks);
});
const themeSwitcher = document.querySelector(".theme-switcher");
const img = themeSwitcher.querySelector("img");
const body = document.querySelector("body");
themeSwitcher.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  const src = img.getAttribute("src");
  if (src == "./images/icon-sun.svg") {
    img.setAttribute("src", "./images/icon-moon.svg");
  } else {
    img.setAttribute("src", "./images/icon-sun.svg");
  }
});
