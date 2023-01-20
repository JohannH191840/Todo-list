// DOM Elements

const todoForm = document.getElementById("todoForm");
const todoscontainer = document.querySelector(".todos");
const todoInput = todoForm["name"];
const dateInput = todoForm["date"];


const todos = JSON.parse(localStorage.getItem("todos")) || [];

const addTodo = (name, date) => {
    todos.push({
        name,
        date,
    })

    localStorage.setItem("todos", JSON.stringify(todos));
    return{name, date};
};

const createTodoElement = ({ name, date }) => {
    //Create Elements
    const todoDiv = document.createElement("div");
    const todoName = document.createElement("h2");
    const todoDate = document.createElement("p");
    const todoDel = document.createElement("h3");

    

    

  

    

    //FIll the content
    todoDiv.innerText = "What to do: "
    todoName.innerText = "" + name;
    todoDate.innerText = "Date/Time:" + date;

    
    

   

    // Add to the DOM

    todoDiv.append(todoName, todoDate);
    todoscontainer.appendChild(todoDiv);
    todoscontainer.style.display = todos.length === 0 ? "none" : "flex"; 
};

todoscontainer.style.display = todos.length === 0 ? "none" : "flex";
todos.forEach(createTodoElement);
todoForm.onsubmit = e => {
    e.preventDefault();
    const newTodo = addTodo(
        todoInput.value, 
        dateInput.value,
    );

    createTodoElement(newTodo);
    todoInput.value = "";
    dateInput.value = ""

};

function alldeleteTodos(){
    localStorage.clear()
    window.location.reload()
}

function delteNote(newTodo) {
    let conformDel = confirm("Are you Sure you want to delete this?");
    if (!confirmDel) return;
    notes.splice(noteId, 1);
    localStorage.setItem("todos", JSON.stringify(todos));

}