const header=document.querySelector(".header");
const mob_nav=document.querySelector(".mobile");
const main=document.querySelector(".up");
// const skillRange=document.querySelector("#skills");
// const skillLevel=document.querySelector(".skill-level");
mob_nav.addEventListener('click',()=>{
    header.classList.toggle("active");
    main.classList.toggle("down");
})
// skillRange.addEventListener('load',()=>{
//     skillLevel.classList.add("skl");
// })
