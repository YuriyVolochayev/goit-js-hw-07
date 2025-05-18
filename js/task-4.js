const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const elements = event.target.elements;

    const emailValue = elements.email.value.trim();
    const passwordValue = elements.password.value.trim();

    if (emailValue === "" || passwordValue === "") {
        alert("All form fields must be filled in");
        return;
    }

    const formInfo = {
        email: emailValue,
        password: passwordValue
    };

    console.log(formInfo);

    event.target.reset();
    
});



