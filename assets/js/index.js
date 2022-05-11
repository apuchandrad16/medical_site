


let navShow = document.querySelector(".nav_bar_icon i")


navShow.addEventListener("click", showNavbar)

function showNavbar(){
    let navMenu = document.querySelector("nav .left")

    if(navMenu.classList.contains("active")){
        navMenu.classList.remove("active")
    }else{
        navMenu.classList.add("active")
    }
}