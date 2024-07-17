let header = document.getElementsByClassName("fix")[0]
let body = document.body
let home = document.getElementById("home")
let contact = document.getElementById("contact")
let skill = document.getElementsByClassName("skill")
let headbutton = document.getElementById("headbutton")
let slidebar = document.getElementById("sidebartoggle")


let slide = ()=>{
    slidebar.classList.toggle("ulnone")
}

headbutton.addEventListener("click", slide)


let skillscroll = ()=>{ window.scroll({
    top: 850,
    behavior: "smooth"
})}

let contactscroll = ()=>{ window.scroll({
    top: 2000,
    behavior: "smooth"
})}

let homescroll = ()=>{ window.scroll({
    top: 0,
    behavior: "smooth"
})}

contact.addEventListener("click", contactscroll)

for(let i=0; i<skill.length; i++){
    skill[i].addEventListener("click", skillscroll)
}

home.addEventListener("click", homescroll)
