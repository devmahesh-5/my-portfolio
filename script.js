const header=document.querySelector(".header");
const mob_nav=document.querySelector(".mobile");
mob_nav.addEventListener('click',()=>{
    header.classList.toggle("active");
})