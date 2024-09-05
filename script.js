const header=document.querySelector(".header");
const mob_nav=document.querySelector(".mobile");
const main=document.querySelector(".up");
const chaticon=document.querySelector(".chaticon");
const available=document.querySelector(".available");
const answer=document.querySelector(".answer");
const intro=document.querySelector(".welcome");
const cvsection=document.querySelector(".cvsection");
let nameindex=0;
let cvindex=0;
const name="I AM MAHESH BHANDARI.";
const cv="DOWNLOAD MY CV.";
mob_nav.addEventListener('click',()=>{
    header.classList.toggle("active");
    main.classList.toggle("down");
})

let interval=setInterval(() => {
    if (nameindex < name.length) {
        intro.innerHTML+=`${name[nameindex++]}`;
    }else  if(cvindex<cv.length){
        cvsection.innerHTML+=`${cv[cvindex++]}`;
    }else{
        clearInterval(interval)
    }
   
}, 30);
