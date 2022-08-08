const trottle = require("lodash.throttle")
const formEl = document.querySelector(".feedback-form")

const FEEDBACK_FORM_STATE = "feedback-form-state"

const emailEl = document.querySelector(`input[name="email"]`)
const messageEl = document.querySelector(`textarea[name="message"]`)
const submitBtn = document.querySelector(`button[type="submit"]`)

let formData = Object(JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE)))


emailEl.value = formData.email || ""
messageEl.value = formData.message || ""

formEl.addEventListener("input", trottle(({target}) => {
    formData[target.name] = target.value
    localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(formData))
}, 500))

submitBtn.addEventListener("click", (event) => {
    if(emailEl.checkValidity() && messageEl.checkValidity()) {
        event.preventDefault(); 
        console.log(formData)
        formData = {}
        emailEl.value = ""
        messageEl.value = ""
        localStorage.removeItem(FEEDBACK_FORM_STATE)
    }
})

