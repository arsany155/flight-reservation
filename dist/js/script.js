const carousel = document.querySelector(".carousel");

let isDragStart = false , prevPageX, prevScrollLeft , positionDiff;

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) =>{
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX)- prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () =>{
    isDragStart=false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown",dragStart);
carousel.addEventListener("touchstart",dragStart);


carousel.addEventListener("mousemove",dragging);
carousel.addEventListener("touchmove",dragging);


carousel.addEventListener("mouseup",dragStop);

const mobileBtn= document.querySelector("#mobile-btn")
const mobileMenu= document.querySelector("#mobile-menu")

mobileBtn.addEventListener('click',()=>{
    mobileMenu.classList.toggle('hidden');
});