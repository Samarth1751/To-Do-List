const inputField = document.querySelector(".input textarea");
let todoLists = document.querySelector(".todolist");
let pendingNum = document.querySelector(".pendingno");
let clearButton = document.querySelector(".clear");

function allTasks() {
    let tasks = document.querySelectorAll(".pending");

    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

    let allList = document.querySelectorAll(".list");
    if (allList.length > 0) {
        todoLists.style.marginTop = "20px";
        clearButton.style.pointerEvents = "auto";
        return;
    }
    todoLists.style.marginTop = "0px";
    clearButton.style.pointerEvents = "none";
}

inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim();

    if (e.key === "Enter" && inputVal.length > 0) {
        let liTag = `<li class="list pending" onclick="handleStatus(this)">
                        <input type="checkbox" />
                        <span class="task">${inputVal}</span>
                        <i class="uil uil-trash" onclick="deleteTask(this)"></i>
                    </li>`;

        todoLists.insertAdjacentHTML("beforeend", liTag);
        inputField.value = "";
        allTasks();
    }
});

function handleStatus(e) {
    const checkBox = e.querySelector("input");
    checkBox.checked = checkBox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
}

function deleteTask(e) {
    e.parentElement.remove();
    allTasks();
}

clearButton.addEventListener("click", () => {
    todoLists.innerHTML = "";
    allTasks();
});
