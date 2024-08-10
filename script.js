let open_btn = document.getElementById("open");
let close_btn = document.getElementById("close");
open_btn.style.display = "block"
close_btn.style.display = "none"
let nav = document.getElementById("nav")
let menu_btn = document.getElementById("menu-btn");
nav.classList.toggle("change")
document.getElementById("menu-btn").addEventListener("click",()=>{
    if(open_btn.style.display == "block"){
        open_btn.style.display ="none"
        close_btn.style.display = "block"
        nav.classList.toggle("change")
    }
    else{
        open_btn.style.display = "block"
        close_btn.style.display = "none"    
        nav.classList.toggle("change")
    }
    
})
