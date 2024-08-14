let tasks = [
  { name: "vaisselle", state: false },
  {
    name: "sport",
    state: true,
  },
  {
    name: "super skills",
    state: false,
  },
];

const form = document.querySelector("form");
const addTask = document.querySelector("#add");
const tasksWrap = document.querySelector("#tasks-wrap");

const display = () => {
  tasksWrap.innerHTML = tasks.map((v) => {
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
  const state = document.querySelectorAll(".state");
  state.forEach((v, i) => {
    v.addEventListener("change", () => {
      tasks[i].state = v.checked;
      console.log(tasks);
      display();
    });
  });
  const deleteBtn = document.querySelectorAll(".delete");
  deleteBtn.forEach((v, i) => {
    v.addEventListener("click", () => {
      const filtered = tasks.filter((item) => item !== tasks[i]);
      tasks = [...filtered];
      //  console.log(filtered);
      display();
    });
  });
};
display();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = addTask.value;
  tasks.push({ name, state: false });
  addTask.value = "";
  console.log(tasks);
  display();
});
