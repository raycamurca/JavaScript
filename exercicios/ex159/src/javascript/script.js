// Icon senha (olho)

const iconsPassword = document.querySelectorAll(".password-icon");

iconsPassword.forEach(icon => {
    icon.addEventListener("click", ()=>{
        const input = icon.previousElementSibling;
        input.type = input.type === "password" ? "text" : "password";
        icon.classList.toggle("fa-eye");
        icon.classList.toggle("fa-eye-slash");
    })
})

// Em breve  

