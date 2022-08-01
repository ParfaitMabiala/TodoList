let btnAdd = document.getElementById("add");
let input = document.getElementById("inputText");
let row = document.querySelector(".row");
let btnDone = document.getElementById("#Done");

row.addEventListener("click", function (e) {
  if (e.target.classList.contains("done")) {
    e.target.innerHTML == "Done"
      ? (e.target.innerHTML = "Undo")
      : (e.target.innerHTML = "Done");
  }
});

btnAdd.addEventListener("click", function () {
  let lisTask = document.createElement("div");
  lisTask.classList.add("listTask");
  lisTask.innerHTML = `
    <h2>${input.value}</h2>
    <div class="btns">
        <button id="Done" class="done">Done</button>
        <button id="Delete">Delete</button>
    </div>
  `;
  row.appendChild(lisTask);
  input.value = "";
});

btnDone.addEventListener("click", function () {});
