


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



let videoList2 = document.querySelectorAll(".videos_section .videos_list ol li")
let videoShow = document.querySelector("section.videos_section .video_show video")



videoList2.forEach(e=>{




    e.addEventListener("click", function(){


        videoList2.forEach((e)=>{
            e.classList.remove("active")
        })


        let video = e.querySelector("video")

    e.classList.add("active")

        videoShow.src = video.src

        videoShow.play()
    })
})