function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;
    span.onclick = () => li.classList.toggle("completed");

    const del = document.createElement("button");
    del.textContent = "x";
    del.className = "delete";
    del.onclick = () => li.remove();

    li.appendChild(span);
    li.appendChild(del);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
