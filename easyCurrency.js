
document.registro.addEventListener("submit", (event) => {
    event.preventDefault()
    const username = document.querySelector(`#username`).value;
    const email = document.querySelector(`#email`).value;
    const password = document.querySelector(`#password`).value;

    let user = {
            "login": username,
            "email": email,
            "pass": password,
        }

    // users.unshift(users);
    // localStorage.setItem(`accessKey`, users);
    console.log(user)

});