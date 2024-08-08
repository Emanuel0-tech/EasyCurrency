let nome = document.querySelector(`#nome`);
let labelNome = document.querySelector(`#labelNome`);
let validNome = false;

let usuario = document.querySelector(`#usuario`);
let labelUsuario = document.querySelector(`#labelUsuario`);
let validUsuario = false;

let senha = document.querySelector(`#senha`);
let labelSenha = document.querySelector(`#labelSenha`);
let validSenha = false

let msgError = document.querySelector(`#msgError`);
let msgSuccess = document.querySelector(`#msgSuccess`);


let btnCadastro = document.querySelector(`#btn-cadastro`);


nome.addEventListener('keyup', () => {
    if (nome.value.length >= 3) {
        labelNome.style.color = `green`;
        labelNome.innerText = `Nome`;
        nome.style.color = `green`;
        validNome = true;
    } else {
        labelNome.style.color = `red`;
        labelNome.innerText = `Insira no mínimo 5 caracteres`;
        nome.style.color = `red`;
        validNome = false;
    }
});

usuario.addEventListener('keyup', () => {
    if (usuario.value.length >= 2) {
        labelUsuario.style.color = `green`;
        labelUsuario.innerText = `Usuario`;
        usuario.style.color = `green`;
        validUsuario = true;
    } else {
        labelUsuario.style.color = `red`;
        labelUsuario.innerText = `Insira no minímo 3 caracteres`;
        usuario.style.color = `red`;
        validUsuario = false;

    }
});

senha.addEventListener('keyup', () => {
    if (senha.value.length >= 8) {
        labelSenha.style.color = `green`;
        labelSenha.innerText = `Senha`;
        senha.style.color = `green`;
        validSenha = true;
    } else {
        labelSenha.style.color = `red`;
        labelSenha.innerText = `Insira no mínimo 8 caracteres`;
        senha.style.color = `red`;
        validSenha = false
    }
});


btnCadastro.addEventListener('click', () => {
    if (validNome == true && validUsuario == true && validSenha === true) {
        alert('Cadastro realizado com sucesso!');
        let listaUser = JSON.parse(localStorage.getItem(`listaUser`) || `[]`)

        listaUser.push(
            {
                nomeCad: nome.value,
                usuarioCad: usuario.value,
                senhaCad: senha.value
            }
        );
        localStorage.setItem(`listaUser`, JSON.stringify(listaUser));

        setTimeout(() => {
            window.location.href = `coinConversion.HTML`;
        }, 100);
    } else {
        alert('Preencha todos os campos corretamente!');
    }
});

