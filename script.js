document.addEventListener("DOMContentLoaded", function(){

let slides = document.querySelectorAll(".slide");
let dotsContainer = document.getElementById("dots");
let index = 0;

/* CREATE DOTS */
slides.forEach((_,i)=>{
let dot=document.createElement("span");
dot.classList.add("dot");
if(i===0) dot.classList.add("active");
dot.addEventListener("click", ()=>showSlide(i));
dotsContainer.appendChild(dot);
});

let dots=document.querySelectorAll(".dot");

/* SHOW SLIDE */
function showSlide(i){

slides.forEach(s=>s.classList.remove("active"));
dots.forEach(d=>d.classList.remove("active"));

index = i;

slides[index].classList.add("active");
dots[index].classList.add("active");
}

/* NEXT */
function nextSlide(){
index++;

if(index >= slides.length){
index = 0;
}

showSlide(index);
}

/* PREV */
function prevSlide(){
index--;

if(index < 0){
index = slides.length - 1;
}

showSlide(index);
}

/* GLOBAL BUTTON ACCESS */
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;

/* AUTO LOOP */
setInterval(nextSlide,3000);

});