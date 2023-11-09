let btn = document.getElementById("#mobile__nav")
let form = document.querySelector("form")
let btn2 = document.getElementsByClassName("remove")

btn.addEventListener("click", () => {
    form.classList.add("active")
})

btn2.addEventListener("click", () => {
    form.classList.remove("active")
})





