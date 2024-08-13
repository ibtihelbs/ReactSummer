import { houlou, arrow, tasks } from "./function.js";

const singleTask = tasks.find((task) => task.name == "sport");
console.log(singleTask);
const taskindex = tasks.findIndex((task) => task.name == "suer skills");
console.log(taskindex);
const done = tasks.filter((v) => v.state == true);
console.log(done);
const notDone = tasks.filter((v) => v.state == false);
console.log(notDone);
const urgent = tasks.map((v, i) => {
  if (v.name.length > 5) {
    return { ...v, urgent: true };
  } else {
    return { ...v, urgent: false };
  }
});
console.log(urgent);
const body = document.querySelector("body");
const tasksWrap = document.querySelector("#tasks-wrap");
tasksWrap.innerHTML = tasks.map((v) => {
  return `<div class="single-task flex between">
              <div class="flex">
                <form class="checked">
                  <input type="checkbox" class="state" />
                </form>
                <p class=${v.state == true ? "lined" : "notlined"}>${v.name}</p>
              </div>
              <button class="delete">
                <img src="./images/icon-cross.svg" alt="icon-cross" />
              </button>
            </div>`;
});
if (9 > 5) {
  console.log("hello");
} else {
  console.log("buy");
}
9 > 5 ? console.log("noope") : console.log("hohoh");
