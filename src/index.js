const taskTable = document.createElement('table')
const tableHeaders = document.createElement('tr')
tableHeaders.id = 'headers'
const headerRow = document.getElementById('headers')
headerRow.innerHTML = '<th id="title>Title</th><th id="description">Description"</th>'

// tableHeaderTitle.innerText = 'Title'
// tableHeaderDescription.innerText = 'Description'
// taskTable.appendChild(tableHeaders)

document.addEventListener('DOMContentLoaded', () => {
  const newTaskForm = document.getElementById('create-task-form')
  newTaskForm.addEventListener('submit', createNewTask)
})

const createNewTask = (event) => {
  event.preventDefault()

// grab main
  const mainContent = document.getElementById('main-content')

// grab title
  const newTaskTitle = document.querySelector('body div form input#task-title')

// grab description
  const newTaskDescription = document.querySelector('body div form input#task-description')

// create table rows
  const newRow = document.createElement('tr')
  newRow.innerHTML = '<td id="task-title"></td><td id="task-description"></td>'

// create table data

  mainContent.appendChild(taskTable)
  taskTable.appendChild(tableHeaderTitle)
  taskTable.appendChild(tableHeaderDescription)
  taskTable.appendChild(newRow)
  
  // titleData.innerText = newTaskTitle.value
  // descriptionData.innerText = newTaskDescription.value

  
  // newTask.title.innerText = newTaskTitle.value
  // newTask.description.innerText = newTaskDescription.value

  // appendNewTask(newTask)
  event.target.reset()
}

const appendNewTask = (task) => {
  document.getElementById('tasks').appendChild(task)
}


