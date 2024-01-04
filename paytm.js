
let button=document.querySelector(".f-left>button")
button.addEventListener("mouseenter",()=>{
    button.style.backgroundColor="skyblue"
    button.innerHTML="Learn More <i class='fa-solid fa-arrow-right'></i>"
    button.style.transition="all ease 1s"
})
button.addEventListener("mouseleave",()=>{
    button.style.backgroundColor="#2A3168"
    button.innerHTML="Learn More <i class='fa-solid fa-greater-than'>"
})

let button1=document.querySelector(".r-side>button")
button1.addEventListener("mouseenter",()=>{
    button1.style.backgroundColor="skyblue"
    button1.innerHTML="Learn More <i class='fa-solid fa-arrow-right'></i>"
})
button1.addEventListener("mouseleave",()=>{
    button1.style.backgroundColor="#2A3168"
    button1.innerHTML="Learn More <i class='fa-solid fa-greater-than'>"
})
let button4=document.querySelector(".l-align>button")
button4.addEventListener("mouseenter",()=>{
    button4.style.backgroundColor="skyblue"
    button4.innerHTML="Learn More <i class='fa-solid fa-arrow-right'></i>"
    button4.style.transition="all ease 1s"
})
button4.addEventListener("mouseleave",()=>{
    button4.style.backgroundColor="#2A3168"
    button4.innerHTML="Learn More <i class='fa-solid fa-greater-than'>"
})

let button3=document.querySelector(".postpaid-id>button")
button3.addEventListener("mouseenter",()=>{
    button3.style.backgroundColor="skyblue"
    button3.innerHTML="Learn More <i class='fa-solid fa-arrow-right'></i>"
    button3.style.transition="all ease 1s"
})
button3.addEventListener("mouseleave",()=>{
    button3.style.backgroundColor="#2A3168"
    button3.innerHTML="Learn More <i class='fa-solid fa-greater-than'>"
})


let button5=document.querySelector(".loan-r>button")
button5.addEventListener("mouseenter",()=>{
    button5.style.backgroundColor="skyblue"
    button5.innerHTML="Learn More <i class='fa-solid fa-arrow-right'></i>"
    button5.style.transition="all ease 1s"
})
button5.addEventListener("mouseleave",()=>{
    button5.style.backgroundColor="#2A3168"
    button5.innerHTML="Learn More <i class='fa-solid fa-greater-than'>"
})
let button6=document.querySelector(".flex-l>button")
button6.addEventListener("mouseenter",()=>{
    button6.style.backgroundColor="skyblue"
    button6.innerHTML="Learn More <i class='fa-solid fa-arrow-right'></i>"
    button6.style.transition="all ease 1s"
})
button6.addEventListener("mouseleave",()=>{
    button6.style.backgroundColor="#2A3168"
    button6.innerHTML="Learn More <i class='fa-solid fa-greater-than'>"
})

let button7=document.querySelector(".justify-l>button")
button7.addEventListener("mouseenter",()=>{
    button7.style.backgroundColor="skyblue"
    button7.innerHTML="Learn More <i class='fa-solid fa-arrow-right'></i>"
    button7.style.transition="all ease 1s"
})
button7.addEventListener("mouseleave",()=>{
    button7.style.backgroundColor="#2A3168"
    button7.innerHTML="Learn More <i class='fa-solid fa-greater-than'>"
})

let mobile=document.querySelectorAll(".mobile>span");
mobile.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        e.innerHTML="Learn More <i class='fa-solid fa-arrow-right'></i>"
    })
})
let mobile1=document.querySelectorAll(".mobile>span");
mobile1.forEach((e)=>{
    e.addEventListener("mouseleave",()=>{
        e.innerHTML="Learn More"
    })
})

let btn=document.querySelector("nav .btn");
let hero=document.querySelector("#hero")
let login=document.querySelector(".wrapper .box");
let icon=document.querySelector(".box i");
let click=0;
let spinners=document.querySelector(".dot-spinner");
btn.addEventListener("click",()=>{
    spinners.style.display="block"
})


btn.addEventListener("click",()=>{
    setTimeout(()=>{
        login.style.display="block";
        hero.style.filter='blur(5px)';
    },3000)
})

icon.addEventListener("click",()=>{
    login.style.display="none";
    spinners.style.display="none"
    hero.style.filter="blur(0px)"
})