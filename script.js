function addTodo() {
    const todoElement = document.getElementById("new-todo");
    const todo = todoElement.value;
        todoElement.value = "";
        

    if (todo.length < 3) {
        return alert("You must have at least 3 characters for your TODO item.")
    }
    const list = document.getElementById("list");
    const li = document.createElement("li");
    const text = document.createTextNode(todo);
    
    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    li.setAttribute("onclick", "this.remove()");
    
    li.appendChild(text);
    li.appendChild(deleteBtn);
    list.appendChild(li);
}

document.getElementById("new-todo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTodo();
    }
});