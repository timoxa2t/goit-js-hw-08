const trottle = require("lodash.throttle")
const formEl = document.querySelector(".feedback-form")

const emailEl = document.querySelector(`input[name="email"]`)
const messageEl = document.querySelector(`textarea[name="message"]`)
const submitBtn = document.querySelector(`button[type="submit"]`)

let formData = Object(JSON.parse(localStorage.getItem("feedback-form-state")))


emailEl.value = formData.email || ""
messageEl.value = formData.message || ""

formEl.addEventListener("input", trottle(({target}) => {
    formData[target.name] = target.value
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}, 500))

submitBtn.addEventListener("click", (event) => {
    event.preventDefault(); 
    console.log(formData)
    formData = {}
    emailEl.value = ""
    messageEl.value = ""
    localStorage.clear()
})

