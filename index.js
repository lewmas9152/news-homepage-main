const openBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");

const menuEl = document.getElementById("menu-el");

openBtn.addEventListener("click",function(){
    menuEl.classList.toggle("visible");
})

closeBtn.addEventListener("click",function(){
    menuEl.classList.toggle('invisible');
})