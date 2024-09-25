let item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-list");

toDoBox.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
});

function addTask() {
  if (item.value === "") alert("You must write something");
  else {
    let li = document.createElement("li");
    li.innerHTML = item.value;
    toDoBox.appendChild(li);

    let span = document.createElement("button");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  console.log(toDoBox);
}
