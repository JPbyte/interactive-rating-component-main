const button = document.querySelectorAll(".btn-card-1")

let numberr = document.querySelector("span")

const submit = document.querySelector(".submit")

const card = document.querySelector(".card")

const card2 = document.querySelector(".card-2")

button.forEach(item => {
   item.addEventListener("click", () => {
    button.forEach(button => {
     button.style.backgroundColor = "rgba(211, 211, 211, 0.05)"
    })
    item.style.backgroundColor = "lightGray"
    numberr.textContent = item.innerHTML
   })
   
})


submit.addEventListener("click", () => {
    card.classList.add("active")
    console.log(card)
    card2.classList.add("active-2")
})




