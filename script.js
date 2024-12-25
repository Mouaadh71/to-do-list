const list = document.getElementById("list-conrainer");
const taskInput = document.getElementById("task");

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}
function addtask() {
    if (taskInput.value == ""){
        alert("please entar something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        taskInput.value = "";
        saveData()
    }
}
list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
});
function getData() {
    list.innerHTML = localStorage.getItem("data");
}
getData();
