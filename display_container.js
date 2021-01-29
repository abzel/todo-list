let main = document.createElement('main')
main.classList.add('container')

document.body.prepend(main)

let projectName = document.createElement('h1')
projectName.innerHTML = "Let's do it"
main.append(projectName)

let listBlock = document.createElement('div')
listBlock.className = 'mainBlock'
main.append(listBlock)

let firstDiv = document.createElement('div')
listBlock.append(firstDiv)

let textIn = document.createElement('input')
textIn.className = 'textIn'
textIn.setAttribute('placeholder', 'Gonna do ...')
firstDiv.append(textIn)

let setDate = document.createElement('input')
setDate.setAttribute('type', 'date')
firstDiv.append(setDate)

let addBtn = document.createElement('button')
addBtn.innerHTML = "Add"
addBtn.id = 'addBtn'
firstDiv.append(addBtn)

let list = document.createElement('ul')
listBlock.append(list)

let todosArray =
    // {id: 1, text:'Уй тапрышманы аткаруу', checked: false, date: '12-01-2021'},
    // {id: 2, text:'Итке тамак бериш керек', checked: false, date: '12-01-2021'},
    // {id: 3, text:'Эшикти жыйноо', checked: false, date: '12-01-2021'}
    localStorage.getItem('todos') == null ? [] : [...JSON.parse(localStorage.getItem('todos'))]