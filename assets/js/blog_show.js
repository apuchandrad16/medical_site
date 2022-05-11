const shareBtn = document.querySelectorAll(".share_btns_blog_show ul > li > a")


shareBtn.forEach(e =>{
    e.addEventListener("click", function(){
        let newEl = document.createElement("div")
        newEl.innerHTML = `
        <div style="position: fixed; border-radius: .4rem; left: 1rem; bottom: 1rem; padding: .5rem 1rem; text-align: center; background-color: var(--c1); color: var(--c2);">
         <span>Link Copied</span>
          </div>
        `
        document.body.appendChild(newEl)
        
        
        setTimeout(() => {
            newEl.remove()
        }, 800);

    })
})






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