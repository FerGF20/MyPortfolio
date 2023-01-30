const main = document.querySelector(".main")
const menu = document.querySelector(".menu")
const list = document.querySelectorAll(".nav__list li")

// const listHome = document.querySelector(".list_home")
// const listAbout = document.querySelector(".list_about")
// const listSkills = document.querySelector(".list_skills")
// const listProjects = document.querySelector(".list_projects")
// const listCert = document.querySelector(".list_cert")
// const listContact = document.querySelector(".list_contact")

// const sections = document.querySelectorAll("section, footer")

// const home = document.getElementById("home")
// const about = document.getElementById("about")
// const skills = document.getElementById("skills")
// const projects = document.getElementById("projects")
// const cert = document.getElementById("cert")
// const contact = document.getElementById("contact")


/* Mobile menu */

menu.onclick = () => {
    main.classList.toggle('active')
}

list.forEach(element => 
        element.onclick = () =>{
            main.classList.toggle("active")
        }
    )

/* Show and Hidde sections */

// listHome.onclick = () => {
//     sections.forEach(element => {
//         if(element !== home){
//             element.classList.remove("show")
//             element.classList.add("hidde")
//         }else{
//             element.classList.remove("hidde")
//             element.classList.add("show")
//         }
//     })
// }

// listAbout.onclick = () => {
//     sections.forEach(element => {
//         if(element !== about){
//             element.classList.remove("show")
//             element.classList.add("hidde")
//         }else{
//             element.classList.remove("hidde")
//             element.classList.add("show")
//         }
//     })
// }

// listSkills.onclick = () => {
//     sections.forEach(element => {
//         if(element !== skills){
//             element.classList.remove("show")
//             element.classList.add("hidde")
//         }else{
//             element.classList.remove("hidde")
//             element.classList.add("show")
//         }
//     })
// }

// listProjects.onclick = () => {
//     sections.forEach(element => {
//         if(element !== projects){
//             element.classList.remove("show")
//             element.classList.add("hidde")
//         }else{
//             element.classList.remove("hidde")
//             element.classList.add("show")
//         }
//     })
// }

// listCert.onclick = () => {
//     sections.forEach(element => {
//         if(element !== cert){
//             element.classList.remove("show")
//             element.classList.add("hidde")
//         }else{
//             element.classList.remove("hidde")
//             element.classList.add("show")
//         }
//     })
// }

// listContact.onclick = () => {
//     sections.forEach(element => {
//         if(element !== contact){
//             element.classList.remove("show")
//             element.classList.add("hidde")
//         }else{
//             element.classList.remove("hidde")
//             element.classList.add("show")
//         }
//     })
// }