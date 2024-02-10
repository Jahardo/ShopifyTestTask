const modal = document.getElementById("modal");
const openModal  = document.getElementById("open-btn");
const closeModal = document.getElementById("close-btn");

const content = document.createElement("div")
content.id ='Modal'
document.body.append(content)
content.append(modal)
openModal.addEventListener("click", () => {
   modal.classList.add('open')
})

closeModal.addEventListener("click", () => {
    modal.classList.remove('open')
})
console.log("Hi there")

