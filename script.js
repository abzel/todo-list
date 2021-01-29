addBtn.addEventListener('click', addTodo)

const createItem = (todo, id) => {
    let item = `
    <li
        key='${id}'
        class=${todo.checked ? 'taskItem-done' : 'taskItem'}>
        ${todo.title} ${todo.date ? todo.date : ' '}
        <img class='btn' src='./images/check-icon.png' onclick='completeTodo(event)'/>
        <img class='btn' src='./images/delete-icon.png' onclick='deleteTodo(event)'/>
        </li>
    `

    return item
}

const renderTodoItems = () => {
    list.innerHTML = ' '
    let items = []
        // console.log(todosArray.length)
        // console.log(Boolean(1))

    todosArray.length ?
        todosArray.map((todo, id) => {
            items.unshift(createItem(todo, id))
            list.innerHTML = items.join('')
        }) :
        list.prepend('Учурда тапшырма жок')
}

renderTodoItems()