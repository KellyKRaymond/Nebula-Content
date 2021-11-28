const container = document.querySelector('.container')

for(let i = 0; i < 10; i++){
    const div = document.createElement('div');
    div.className = "box";
    container.appendChild(div)
}


const divs = document.querySelectorAll('.box')
const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']
divs.forEach(div => {
const randomNum = Math.floor(Math.random() * 6)
div.style.backgroundColor = colors[randomNum]
div.innerText = colors[randomNum];})