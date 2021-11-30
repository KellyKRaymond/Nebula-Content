
let toDoInput = document.getElementById("toDoInput")
let form = document.getElementById("toDoForm")
let toDoList = document.getElementById("toDoList")

form.addEventListener("submit" , addNewItems)

function addNewItems(e) {
e.preventDefault();
let newItem = document.createElement('li')
newItem.innerText = e.target.toDoInput.value
toDoList.appendChild(newItem)
}
let listItem = document.querySelector('li')
    toDoList.addEventListener('click', function(e){
        console.log(e.target)
       e.target.style.textDecoration = 'line-through'
    })

toDoList.addEventListener('dblclick', function(e){
    e.target.remove()
})
