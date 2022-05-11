const shareBtn = document.querySelectorAll(".big_box  > ul > li > ul > li > a")


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



let allContent = document.getElementById("all-content")
let health = document.getElementById("health")
let surgery = document.getElementById("surgery")
let dental = document.getElementById("dental")
let mother = document.getElementById("mother")
let baby = document.getElementById("baby")
let old = document.getElementById("old")


let List = document.querySelectorAll(".blogs_page_html .blog_navigation ul li a")

List.forEach(e=>{
    // e.classList.remove("active")
    e.addEventListener("click", function(){
        List.forEach(e=>{
            e.classList.remove("active")
        })
        e.classList.add("active")
    })
})



let contentShow = document.getElementById("all-content-show")





allContent.addEventListener("click", function(e){
    // contentShow.style.flexDirection = "column"
    
    contentShow.innerHTML = `
    <div class="content_container" >
                <div class="left_small_blog">
                    <h2>Recent Post</h2>
    
                    <div class="sm_boxes">
                        <div class="sm_box">
                            <img src="../img/3.jpg" alt="">
                            <div class="details">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, porro.</p>
                                <a href="./blog_show.html" >See Details <i class="fa-solid fa-arrow-right-long"></i> </a>
                            </div>
                        </div>
                        <div class="sm_box">
                            <img src="../img/3.jpg" alt="">
                            <div class="details">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, porro.</p>
                                <a href="./blog_show.html" >See Details <i class="fa-solid fa-arrow-right-long"></i> </a>
                            </div>
                        </div>
                        <div class="sm_box">
                            <img src="../img/3.jpg" alt="">
                            <div class="details">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, porro.</p>
                                <a href="./blog_show.html" >See Details <i class="fa-solid fa-arrow-right-long"></i> </a>
                            </div>
                        </div>
                    </div>
    
    
                    <h2>Popular</h2>
                    <div class="sm_boxes">
                        <div class="sm_box">
                            <img src="../img/3.jpg" alt="">
                            <div class="details">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, porro.</p>
                                <a href="./blog_show.html" >See Details <i class="fa-solid fa-arrow-right-long"></i> </a>
                            </div>
                        </div>
                        <div class="sm_box">
                            <img src="../img/3.jpg" alt="">
                            <div class="details">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, porro.</p>
                                <a href="./blog_show.html" >See Details <i class="fa-solid fa-arrow-right-long"></i> </a>
                            </div>
                        </div>
                        <div class="sm_box">
                            <img src="../img/3.jpg" alt="">
                            <div class="details">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, porro.</p>
                                <a href="./blog_show.html" >See Details <i class="fa-solid fa-arrow-right-long"></i> </a>
                            </div>
                        </div>
                        <div class="sm_box">
                            <img src="../img/3.jpg" alt="">
                            <div class="details">
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, porro.</p>
                                <a href="./blog_show.html" >See Details <i class="fa-solid fa-arrow-right-long"></i> </a>
                            </div>
                        </div>
                    </div>
    
    
                </div>
                <div class="right_big_blog" >
                    <div class="big_boxes">
                         <div  class="big_box">
                        <img src="../img/3.jpg" alt="">
                            <ul>
                        
                        <li><i class="fa-solid fa-share-nodes"></i>
                        
                            <ul>
                                <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                                <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                                <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                                <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                                <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                                <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                            </ul>
                        
                        </li>
                            </ul>                    
                        <a href="./blog_show.html"  class="details">
    
                            <span class="catagory">UI/UX Design</span>
    
                            <h2>
                                New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                            </h2>
    
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>
    
    
                            <div class="d_for_bg">
                                    <p><span>24 December</span> | <span>7 min read</span></p>
                            </div>
                            
                        </a>
                    </div>
                        <div  class="big_box">
                        <img src="../img/3.jpg" alt="">
                            <ul>
                        
                        <li><i class="fa-solid fa-share-nodes"></i>
                        
                            <ul>
                                <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                                <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                                <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                                <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                                <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                                <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                            </ul>
                        
                        </li>
                            </ul>                    
                        <a href="./blog_show.html"  class="details">
    
                            <span class="catagory">UI/UX Design</span>
    
                            <h2>
                                New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                            </h2>
    
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>
    
    
                            <div class="d_for_bg">
                                    <p><span>24 December</span> | <span>7 min read</span></p>
                            </div>
                            
                        </a>
                    </div>
                        <div  class="big_box">
                        <img src="../img/3.jpg" alt="">
                            <ul>
                        
                        <li><i class="fa-solid fa-share-nodes"></i>
                        
                            <ul>
                                <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                                <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                                <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                                <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                                <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                                <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                            </ul>
                        
                        </li>
                            </ul>                    
                        <a href="./blog_show.html"  class="details">
    
                            <span class="catagory">UI/UX Design</span>
    
                            <h2>
                                New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                            </h2>
    
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>
    
    
                            <div class="d_for_bg">
                                    <p><span>24 December</span> | <span>7 min read</span></p>
                            </div>
                            
                        </a>
                    </div>
                        <div  class="big_box">
                        <img src="../img/3.jpg" alt="">
                            <ul>
                        
                        <li><i class="fa-solid fa-share-nodes"></i>
                        
                            <ul>
                                <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                                <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                                <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                                <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                                <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                                <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                            </ul>
                        
                        </li>
                            </ul>                    
                        <a href="./blog_show.html"  class="details">
    
                            <span class="catagory">UI/UX Design</span>
    
                            <h2>
                                New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                            </h2>
    
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>
    
    
                            <div class="d_for_bg">
                                    <p><span>24 December</span> | <span>7 min read</span></p>
                            </div>
                            
                        </a>
                    </div>
                    </div>
                </div>
            </div>
    
    
    
            <div class="others_big_boxes container">
                <div class="big_boxes">
                     <div  class="big_box">
                        <img src="../img/3.jpg" alt="">
                            <ul>
                        
                        <li><i class="fa-solid fa-share-nodes"></i>
                        
                            <ul>
                                <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                                <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                                <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                                <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                                <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                                <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                            </ul>
                        
                        </li>
                            </ul>                    
                        <a href="./blog_show.html"  class="details">
    
                            <span class="catagory">UI/UX Design</span>
    
                            <h2>
                                New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                            </h2>
    
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>
    
    
                            <div class="d_for_bg">
                                    <p><span>24 December</span> | <span>7 min read</span></p>
                            </div>
                            
                        </a>
                    </div>
                     <div  class="big_box">
                        <img src="../img/3.jpg" alt="">
                            <ul>
                        
                        <li><i class="fa-solid fa-share-nodes"></i>
                        
                            <ul>
                                <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                                <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                                <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                                <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                                <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                                <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                            </ul>
                        
                        </li>
                            </ul>                    
                        <a href="./blog_show.html"  class="details">
    
                            <span class="catagory">UI/UX Design</span>
    
                            <h2>
                                New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                            </h2>
    
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>
    
    
                            <div class="d_for_bg">
                                    <p><span>24 December</span> | <span>7 min read</span></p>
                            </div>
                            
                        </a>
                    </div>
                     <div  class="big_box">
                        <img src="../img/3.jpg" alt="">
                            <ul>
                        
                        <li><i class="fa-solid fa-share-nodes"></i>
                        
                            <ul>
                                <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                                <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                                <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                                <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                                <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                                <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                            </ul>
                        
                        </li>
                            </ul>                    
                        <a href="./blog_show.html"  class="details">
    
                            <span class="catagory">UI/UX Design</span>
    
                            <h2>
                                New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                            </h2>
    
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>
    
    
                            <div class="d_for_bg">
                                    <p><span>24 December</span> | <span>7 min read</span></p>
                            </div>
                            
                        </a>
                    </div>
                     <div  class="big_box">
                        <img src="../img/3.jpg" alt="">
                            <ul>
                        
                        <li><i class="fa-solid fa-share-nodes"></i>
                        
                            <ul>
                                <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                                <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                                <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                                <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                                <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                                <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                            </ul>
                        
                        </li>
                            </ul>                    
                        <a href="./blog_show.html"  class="details">
    
                            <span class="catagory">UI/UX Design</span>
    
                            <h2>
                                New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                            </h2>
    
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>
    
    
                            <div class="d_for_bg">
                                    <p><span>24 December</span> | <span>7 min read</span></p>
                            </div>
                            
                        </a>
                    </div>
                    <div  class="big_box">
                        <img src="../img/3.jpg" alt="">
                            <ul>
                        
                        <li><i class="fa-solid fa-share-nodes"></i>
                        
                            <ul>
                                <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                                <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                                <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                                <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                                <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                                <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                            </ul>
                        
                        </li>
                            </ul>                    
                        <a href="./blog_show.html"  class="details">
    
                            <span class="catagory">UI/UX Design</span>
    
                            <h2>
                                New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                            </h2>
    
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>
    
    
                            <div class="d_for_bg">
                                    <p><span>24 December</span> | <span>7 min read</span></p>
                            </div>
                            
                        </a>
                    </div>
                     <div  class="big_box">
                        <img src="../img/3.jpg" alt="">
                            <ul>
                        
                        <li><i class="fa-solid fa-share-nodes"></i>
                        
                            <ul>
                                <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                                <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                                <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                                <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                                <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> WhatsApp</a></li>
                                <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                            </ul>
                        
                        </li>
                            </ul>                    
                        <a href="./blog_show.html"  class="details">
    
                            <span class="catagory">UI/UX Design</span>
    
                            <h2>
                                New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                            </h2>
    
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>
    
    
                            <div class="d_for_bg">
                                    <p><span>24 December</span> | <span>7 min read</span></p>
                            </div>
                            
                        </a>
                    </div>
                </div>
            </div>
    
    
    `
   
})
old.addEventListener("click", function(){
    // contentShow.style.flexDirection = "column"
    
    contentShow.innerHTML = `

    <h1 class="inside_title">Old</h1>
    
    <div class="big_boxes">
                     <div  class="big_box">
                    <img src="../img/3.jpg" alt="">
                        <ul>
                    
                    <li><i class="fa-solid fa-share-nodes"></i>
                    
                        <ul>
                            <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                            <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                            <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                        </ul>
                    
                    </li>
                        </ul>                    
                    <a href="./blog_show.html"  class="details">

                        <span class="catagory">UI/UX Design</span>

                        <h2>
                            New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>


                        <div class="d_for_bg">
                                <p><span>24 December</span> | <span>7 min read</span></p>
                        </div>
                        
                    </a>
                </div>
                    <div  class="big_box">
                    <img src="../img/3.jpg" alt="">
                        <ul>
                    
                    <li><i class="fa-solid fa-share-nodes"></i>
                    
                        <ul>
                            <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                            <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                            <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                        </ul>
                    
                    </li>
                        </ul>                    
                    <a href="./blog_show.html"  class="details">

                        <span class="catagory">UI/UX Design</span>

                        <h2>
                            New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>


                        <div class="d_for_bg">
                                <p><span>24 December</span> | <span>7 min read</span></p>
                        </div>
                        
                    </a>
                </div>
                    <div  class="big_box">
                    <img src="../img/3.jpg" alt="">
                        <ul>
                    
                    <li><i class="fa-solid fa-share-nodes"></i>
                    
                        <ul>
                            <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                            <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                            <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                        </ul>
                    
                    </li>
                        </ul>                    
                    <a href="./blog_show.html"  class="details">

                        <span class="catagory">UI/UX Design</span>

                        <h2>
                            New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>


                        <div class="d_for_bg">
                                <p><span>24 December</span> | <span>7 min read</span></p>
                        </div>
                        
                    </a>
                </div>
                    <div  class="big_box">
                    <img src="../img/3.jpg" alt="">
                        <ul>
                    
                    <li><i class="fa-solid fa-share-nodes"></i>
                    
                        <ul>
                            <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                            <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                            <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                        </ul>
                    
                    </li>
                        </ul>                    
                    <a href="./blog_show.html"  class="details">

                        <span class="catagory">UI/UX Design</span>

                        <h2>
                            New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>


                        <div class="d_for_bg">
                                <p><span>24 December</span> | <span>7 min read</span></p>
                        </div>
                        
                    </a>
                </div>
                </div>
    
    
    `
})
baby.addEventListener("click", function(){
    // contentShow.style.flexDirection = "column"
    
    contentShow.innerHTML = `

    <h1 class="inside_title">Baby</h1>
    
    <div class="big_boxes">
                     <div  class="big_box">
                    <img src="../img/3.jpg" alt="">
                        <ul>
                    
                    <li><i class="fa-solid fa-share-nodes"></i>
                    
                        <ul>
                            <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                            <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                            <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                        </ul>
                    
                    </li>
                        </ul>                    
                    <a href="./blog_show.html"  class="details">

                        <span class="catagory">UI/UX Design</span>

                        <h2>
                            New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>


                        <div class="d_for_bg">
                                <p><span>24 December</span> | <span>7 min read</span></p>
                        </div>
                        
                    </a>
                </div>
                    <div  class="big_box">
                    <img src="../img/3.jpg" alt="">
                        <ul>
                    
                    <li><i class="fa-solid fa-share-nodes"></i>
                    
                        <ul>
                            <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                            <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                            <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                        </ul>
                    
                    </li>
                        </ul>                    
                    <a href="./blog_show.html"  class="details">

                        <span class="catagory">UI/UX Design</span>

                        <h2>
                            New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>


                        <div class="d_for_bg">
                                <p><span>24 December</span> | <span>7 min read</span></p>
                        </div>
                        
                    </a>
                </div>
                    <div  class="big_box">
                    <img src="../img/3.jpg" alt="">
                        <ul>
                    
                    <li><i class="fa-solid fa-share-nodes"></i>
                    
                        <ul>
                            <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                            <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                            <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                        </ul>
                    
                    </li>
                        </ul>                    
                    <a href="./blog_show.html"  class="details">

                        <span class="catagory">UI/UX Design</span>

                        <h2>
                            New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>


                        <div class="d_for_bg">
                                <p><span>24 December</span> | <span>7 min read</span></p>
                        </div>
                        
                    </a>
                </div>
                    <div  class="big_box">
                    <img src="../img/3.jpg" alt="">
                        <ul>
                    
                    <li><i class="fa-solid fa-share-nodes"></i>
                    
                        <ul>
                            <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                            <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                            <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                        </ul>
                    
                    </li>
                        </ul>                    
                    <a href="./blog_show.html"  class="details">

                        <span class="catagory">UI/UX Design</span>

                        <h2>
                            New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>


                        <div class="d_for_bg">
                                <p><span>24 December</span> | <span>7 min read</span></p>
                        </div>
                        
                    </a>
                </div>
                </div>
    
    
    `
})
mother.addEventListener("click", function(){
    // contentShow.style.flexDirection = "column"
    
    contentShow.innerHTML = `

    <h1 class="inside_title">Mother</h1>
    
    <div class="big_boxes">
                     <div  class="big_box">
                    <img src="../img/3.jpg" alt="">
                        <ul>
                    
                    <li><i class="fa-solid fa-share-nodes"></i>
                    
                        <ul>
                            <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                            <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                            <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                        </ul>
                    
                    </li>
                        </ul>                    
                    <a href="./blog_show.html"  class="details">

                        <span class="catagory">UI/UX Design</span>

                        <h2>
                            New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>


                        <div class="d_for_bg">
                                <p><span>24 December</span> | <span>7 min read</span></p>
                        </div>
                        
                    </a>
                </div>
                    <div  class="big_box">
                    <img src="../img/3.jpg" alt="">
                        <ul>
                    
                    <li><i class="fa-solid fa-share-nodes"></i>
                    
                        <ul>
                            <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                            <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                            <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                        </ul>
                    
                    </li>
                        </ul>                    
                    <a href="./blog_show.html"  class="details">

                        <span class="catagory">UI/UX Design</span>

                        <h2>
                            New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>


                        <div class="d_for_bg">
                                <p><span>24 December</span> | <span>7 min read</span></p>
                        </div>
                        
                    </a>
                </div>
                    <div  class="big_box">
                    <img src="../img/3.jpg" alt="">
                        <ul>
                    
                    <li><i class="fa-solid fa-share-nodes"></i>
                    
                        <ul>
                            <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                            <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                            <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                        </ul>
                    
                    </li>
                        </ul>                    
                    <a href="./blog_show.html"  class="details">

                        <span class="catagory">UI/UX Design</span>

                        <h2>
                            New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>


                        <div class="d_for_bg">
                                <p><span>24 December</span> | <span>7 min read</span></p>
                        </div>
                        
                    </a>
                </div>
                    <div  class="big_box">
                    <img src="../img/3.jpg" alt="">
                        <ul>
                    
                    <li><i class="fa-solid fa-share-nodes"></i>
                    
                        <ul>
                            <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                            <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                            <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                        </ul>
                    
                    </li>
                        </ul>                    
                    <a href="./blog_show.html"  class="details">

                        <span class="catagory">UI/UX Design</span>

                        <h2>
                            New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>


                        <div class="d_for_bg">
                                <p><span>24 December</span> | <span>7 min read</span></p>
                        </div>
                        
                    </a>
                </div>
                </div>
    
    
    `
})
dental.addEventListener("click", function(){
    // contentShow.style.flexDirection = "column"
    
    contentShow.innerHTML = `

    <h1 class="inside_title">Dental</h1>
    
    <div class="big_boxes">
                     <div  class="big_box">
                    <img src="../img/3.jpg" alt="">
                        <ul>
                    
                    <li><i class="fa-solid fa-share-nodes"></i>
                    
                        <ul>
                            <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                            <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                            <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                        </ul>
                    
                    </li>
                        </ul>                    
                    <a href="./blog_show.html"  class="details">

                        <span class="catagory">UI/UX Design</span>

                        <h2>
                            New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>


                        <div class="d_for_bg">
                                <p><span>24 December</span> | <span>7 min read</span></p>
                        </div>
                        
                    </a>
                </div>
                    <div  class="big_box">
                    <img src="../img/3.jpg" alt="">
                        <ul>
                    
                    <li><i class="fa-solid fa-share-nodes"></i>
                    
                        <ul>
                            <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                            <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                            <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                        </ul>
                    
                    </li>
                        </ul>                    
                    <a href="./blog_show.html"  class="details">

                        <span class="catagory">UI/UX Design</span>

                        <h2>
                            New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>


                        <div class="d_for_bg">
                                <p><span>24 December</span> | <span>7 min read</span></p>
                        </div>
                        
                    </a>
                </div>
                    <div  class="big_box">
                    <img src="../img/3.jpg" alt="">
                        <ul>
                    
                    <li><i class="fa-solid fa-share-nodes"></i>
                    
                        <ul>
                            <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                            <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                            <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                        </ul>
                    
                    </li>
                        </ul>                    
                    <a href="./blog_show.html"  class="details">

                        <span class="catagory">UI/UX Design</span>

                        <h2>
                            New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>


                        <div class="d_for_bg">
                                <p><span>24 December</span> | <span>7 min read</span></p>
                        </div>
                        
                    </a>
                </div>
                    <div  class="big_box">
                    <img src="../img/3.jpg" alt="">
                        <ul>
                    
                    <li><i class="fa-solid fa-share-nodes"></i>
                    
                        <ul>
                            <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                            <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                            <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                        </ul>
                    
                    </li>
                        </ul>                    
                    <a href="./blog_show.html"  class="details">

                        <span class="catagory">UI/UX Design</span>

                        <h2>
                            New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>


                        <div class="d_for_bg">
                                <p><span>24 December</span> | <span>7 min read</span></p>
                        </div>
                        
                    </a>
                </div>
                </div>
    
    
    `
})
surgery.addEventListener("click", function(){
    // contentShow.style.flexDirection = "column"
    
    contentShow.innerHTML = `

    <h1 class="inside_title">Surgery</h1>
    
    <div class="big_boxes">
                     <div  class="big_box">
                    <img src="../img/3.jpg" alt="">
                        <ul>
                    
                    <li><i class="fa-solid fa-share-nodes"></i>
                    
                        <ul>
                            <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                            <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                            <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                        </ul>
                    
                    </li>
                        </ul>                    
                    <a href="./blog_show.html"  class="details">

                        <span class="catagory">UI/UX Design</span>

                        <h2>
                            New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>


                        <div class="d_for_bg">
                                <p><span>24 December</span> | <span>7 min read</span></p>
                        </div>
                        
                    </a>
                </div>
                    <div  class="big_box">
                    <img src="../img/3.jpg" alt="">
                        <ul>
                    
                    <li><i class="fa-solid fa-share-nodes"></i>
                    
                        <ul>
                            <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                            <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                            <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                        </ul>
                    
                    </li>
                        </ul>                    
                    <a href="./blog_show.html"  class="details">

                        <span class="catagory">UI/UX Design</span>

                        <h2>
                            New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>


                        <div class="d_for_bg">
                                <p><span>24 December</span> | <span>7 min read</span></p>
                        </div>
                        
                    </a>
                </div>
                    <div  class="big_box">
                    <img src="../img/3.jpg" alt="">
                        <ul>
                    
                    <li><i class="fa-solid fa-share-nodes"></i>
                    
                        <ul>
                            <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                            <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                            <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                        </ul>
                    
                    </li>
                        </ul>                    
                    <a href="./blog_show.html"  class="details">

                        <span class="catagory">UI/UX Design</span>

                        <h2>
                            New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>


                        <div class="d_for_bg">
                                <p><span>24 December</span> | <span>7 min read</span></p>
                        </div>
                        
                    </a>
                </div>
                    <div  class="big_box">
                    <img src="../img/3.jpg" alt="">
                        <ul>
                    
                    <li><i class="fa-solid fa-share-nodes"></i>
                    
                        <ul>
                            <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                            <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                            <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                        </ul>
                    
                    </li>
                        </ul>                    
                    <a href="./blog_show.html"  class="details">

                        <span class="catagory">UI/UX Design</span>

                        <h2>
                            New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>


                        <div class="d_for_bg">
                                <p><span>24 December</span> | <span>7 min read</span></p>
                        </div>
                        
                    </a>
                </div>
                </div>
    
    
    `
})
health.addEventListener("click", function(){
    // contentShow.style.flexDirection = "column"
    
    contentShow.innerHTML = `

    <h1 class="inside_title">Health</h1>
    
    <div class="big_boxes">
                     <div  class="big_box">
                    <img src="../img/3.jpg" alt="">
                        <ul>
                    
                    <li><i class="fa-solid fa-share-nodes"></i>
                    
                        <ul>
                            <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                            <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                            <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                        </ul>
                    
                    </li>
                        </ul>                    
                    <a href="./blog_show.html"  class="details">

                        <span class="catagory">UI/UX Design</span>

                        <h2>
                            New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>


                        <div class="d_for_bg">
                                <p><span>24 December</span> | <span>7 min read</span></p>
                        </div>
                        
                    </a>
                </div>
                    <div  class="big_box">
                    <img src="../img/3.jpg" alt="">
                        <ul>
                    
                    <li><i class="fa-solid fa-share-nodes"></i>
                    
                        <ul>
                            <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                            <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                            <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                        </ul>
                    
                    </li>
                        </ul>                    
                    <a href="./blog_show.html"  class="details">

                        <span class="catagory">UI/UX Design</span>

                        <h2>
                            New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>


                        <div class="d_for_bg">
                                <p><span>24 December</span> | <span>7 min read</span></p>
                        </div>
                        
                    </a>
                </div>
                    <div  class="big_box">
                    <img src="../img/3.jpg" alt="">
                        <ul>
                    
                    <li><i class="fa-solid fa-share-nodes"></i>
                    
                        <ul>
                            <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                            <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                            <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                        </ul>
                    
                    </li>
                        </ul>                    
                    <a href="./blog_show.html"  class="details">

                        <span class="catagory">UI/UX Design</span>

                        <h2>
                            New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>


                        <div class="d_for_bg">
                                <p><span>24 December</span> | <span>7 min read</span></p>
                        </div>
                        
                    </a>
                </div>
                    <div  class="big_box">
                    <img src="../img/3.jpg" alt="">
                        <ul>
                    
                    <li><i class="fa-solid fa-share-nodes"></i>
                    
                        <ul>
                            <li><a href="https://www.facebook.com" ><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                            <li><a href="https://www.instagram.com" ><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                            <li><a href="https://www.twitter.com" ><i class="fa-brands fa-twitter"></i> Twitter</a></li>
                            <li><a href="https://www.pinterest.com" ><i class="fa-brands fa-pinterest"></i> Pinterest</a></li>
                            <li><a href="https://www.whatsapp.com" ><i class="fa-brands fa-whatsapp"></i> Whatsapp</a></li>
                            <li><a ><i class="fa-solid fa-link"></i> Copy Link</a></li>
                        </ul>
                    
                    </li>
                        </ul>                    
                    <a href="./blog_show.html"  class="details">

                        <span class="catagory">UI/UX Design</span>

                        <h2>
                            New Year Edition: Top UX/UI Design Trends Rushing to us in 2021
                        </h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde voluptas quasi veniam, veritatis libero.</p>


                        <div class="d_for_bg">
                                <p><span>24 December</span> | <span>7 min read</span></p>
                        </div>
                        
                    </a>
                </div>
                </div>
    
    
    `
})