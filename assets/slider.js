const slider = document.querySelector('.slider')
const arrowButtons = document.querySelectorAll('.wrapper .btn')
const firstItemWidth =  slider.querySelector('.item').offsetWidth
const sliderChildren =[...slider.children];

let isDragging = false,startX,startScrollLeft;

let ItemPerView = Math.round(slider.offsetWidth /firstItemWidth)

sliderChildren.slice(-ItemPerView).reverse().forEach(item => {
    slider.insertAdjacentHTML("afterbegin",item.outerHTML)
})
sliderChildren.slice(0,ItemPerView).forEach(item => {
    slider.insertAdjacentHTML("beforeend",item.outerHTML)
})

arrowButtons.forEach(button => {
    button.addEventListener('click',()=> {
        slider.scrollLeft += button.id === 'btn-right' ? firstItemWidth : -firstItemWidth
    })
})
const dragging = (e) => {
    if(!isDragging) return;
    slider.scrollLeft= startScrollLeft -  (e.pageX- startX)
}
const dragStart = (e) => {
    isDragging = true;
    slider.classList.add("dragging");
    startX = e.pageX
    startScrollLeft = slider.scrollLeft
}
const dragStop = () => {
    isDragging = false
    slider.classList.remove("dragging")
}
const infiniteScroll = ()=> {
    if(slider.scrollLeft === 0) {
        slider.classList.add("no-transition")
        slider.scrollLeft = slider.scrollWidth - (2* slider.offsetWidth )
        slider.classList.remove("no-transition")
    }
    else if(Math.ceil(slider.scrollLeft ) === slider.scrollWidth - slider.offsetWidth) {
        slider.classList.add("no-transition")
        slider.scrollLeft = slider.offsetWidth
        slider.classList.remove("no-transition")
    }
}

slider.addEventListener("mousedown",dragStart)
slider.addEventListener("mousemove",dragging)
document.addEventListener("mouseup",dragStop)
slider.addEventListener("scroll",infiniteScroll)
