//контекст this
var courseGeeks = {
    name: 'Geeks',
    foundingDate: 2017,
    address: {
        street: 'Ibraimova 103',
        number: null,
    },
    branches: undefined,
    showInfo() {
        // console.log(`Курсы - ${courseGeeks.name} `)
        console.log(`Курсы - ${this.name} `)
    },
    showInfo2(){
        function info() {
            console.log(`Курсы - ${this.name} `)
        }
        info()
    }
}
courseGeeks.showInfo()
courseGeeks.showInfo2()

//DOM

const input = document.querySelector('#input')
const creatButton = document.querySelector('#create_button')
const todoList = document.querySelector("#todo_list")

const createTodo = () => {
    if(input.value.trim() === ''){
        return alert('Нельзя вводить пустоту или пробелы')
    }

    const div = document.createElement('div')
    div.setAttribute('class', 'block_text')

    const divButtons = document.createElement('button')
    divButtons.setAttribute('class', 'div_buttons')

    const text = document.createElement('h3')

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'delete_button')

    const editButton = document.createElement('button')
    editButton.setAttribute('class', 'edit_button')

    deleteButton.innerHTML = 'DELETE'
    editButton.innerHTML = 'EDIT'
    text.innerHTML = input.value
    divButtons.append(deleteButton,editButton)
    div.append(text, divButtons)

    deleteButton.onclick = () => div.remove()
    text.addEventListener('click', () => text.classList.toggle('toggle'))


    const modal = document.querySelector(".modal")
    const modal_inp = document.querySelector("#modal_input")
    const modal_button = document.querySelector(".modal_edit")
    const modal_text = document.querySelector(".modal_text")
    editButton.onclick=()=>{
        modal.style.display = "block"
        modal_button.onclick=()=>{
            if (modal_inp.value.length>1 && modal_inp.value!==" "){
                text.innerHTML = modal_inp.value
                modal.style.display="none"
                modal_text.style.display="none"
                modal_inp.value = ""
            }else{
                modal_text.style.display="block"
            }
        }

    }
    todoList.prepend(div)
    input.value = ''


}

creatButton.onclick = () => createTodo()
window.onkeydown = (event) => {
    // console.log(event.code)
    if(event.code === 'Enter'){
        createTodo()
    }
}

const count_inp = document.querySelector("#counter_inp")
const incr = document.querySelector(".incr")
const decr = document.querySelector(".decr")
let answer = 0

incr.onclick=()=>{
    answer++
    count_inp.value = answer
    if(answer>0){
        count_inp.style.background ="green"
    }else if(answer === 0){
        count_inp.style.background ="gray"
    }
}

decr.onclick=()=>{
    answer--
    count_inp.value = answer
    if(answer<0){
        count_inp.style.background="red"
    }else if(answer === 0){
        count_inp.style.background ="gray"
    }

}



