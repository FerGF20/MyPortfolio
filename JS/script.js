const main = document.querySelector(".main")
const menu = document.querySelector(".menu")
const list = document.querySelectorAll(".nav__list li")

menu.onclick = () => {
    main.classList.toggle('active')
}

list.forEach(element => 
        element.onclick = () =>{
            main.classList.toggle("active")
        }
    )