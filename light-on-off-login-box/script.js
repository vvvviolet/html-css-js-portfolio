const registerBtnLink = document.querySelector(".register-btn-link");
const loginBtnLink = document.querySelector(".login-btn-link");
const wrapper = document.querySelector(".wrapper");

registerBtnLink.addEventListener("click", () => {  
    wrapper.classList.toggle("active")
})
loginBtnLink.addEventListener("click", () => {  
    wrapper.classList.toggle("active")
})
