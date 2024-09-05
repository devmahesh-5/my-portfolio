const header=document.querySelector(".header");
const mob_nav=document.querySelector(".mobile");
const main=document.querySelector(".up");
const chaticon=document.querySelector(".chaticon");
const available=document.querySelector(".available");
const answer=document.querySelector(".answer");
// const skillRange=document.querySelector("#skills");
// const skillLevel=document.querySelector(".skill-level");
mob_nav.addEventListener('click',()=>{
    header.classList.toggle("active");
    main.classList.toggle("down");
})
chaticon.addEventListener('mouseover',()=>{
    chaticon.classList.add("chats");
})
chaticon.addEventListener('mouseout',()=>{
    chaticon.classList.remove("chats");
})

const messageBot={
    availableTime:"I am available any Time.Contact Me through Contact page.Thank You.",
    collaborations:"I am interested in collaboration with tech companies now which offer internship on webdev field.",
    challenges:"yes I have faced Problems in this field.To Solve,I try AI tools,Documentations and sometime Youtube",
    timeWorked:"I have been in this field since 2021.",
    skill:"I have little skill in C and Cpp but I fully dedicate my time in WebdevlopeMent"
};
available.addEventListener('click', (event) => {
    const msg = messageBot["availableTime"];
    answer.innerHTML += `${msg}`;
    available.classList.remove();
});