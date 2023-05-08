const addBtn = document.querySelector('#addButton')
const inputBtn = document.querySelector("#inputButton")
const todoList = document.querySelector('.todoList')

addBtn.addEventListener('click', function (e) {
    e.preventDefault()
    let inputContent = inputBtn.value;
    const content = `
        <p class="todo-item">${inputContent}</p>
    `
    todoList.innerHTML += content
    inputBtn.value = ''
})