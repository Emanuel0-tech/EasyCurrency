let nome = document.querySelector(`#nome`);
let labelNome = document.querySelector(`#labelNome`);

let usuario = document.querySelector(`#usuario`);
let labelUsuario = document.querySelector(`#labelUsuario`);

let senha = document.querySelector(`#senha`);
let labelSenha = document.querySelector(`#labelSenha`);

let confirmarSenha = document.querySelector(`#confirmarSenha`);
let labelConfirmarSenha = document.querySelector(`#labelConfirmarSenha`);

nome.addEventListener('keyup', () => {
    if (nome.value.length >= 3) {
        labelNome.style.color = 'green';
        labelNome.innerText = 'Nome';
        nome.style.color = `green`;
    } else {
        labelNome.style.color ='red';
        labelNome.innerText = 'Insira no mínimo 5 caracteres';
        nome.style.color = `red`;
    }
});

usuario.addEventListener('keyup', () => {
    if (usuario.value.length >= 2) {
        labelUsuario.style.color = 'green';
        labelUsuario.innerText = 'Usuario';
        usuario.style.color = `green`;
    } else {
        labelUsuario.style.color ='red';
        labelUsuario.innerText = 'Insira no mimímo 3 caracteres';
        usuario.style.color = `red`;
    }
});

senha.addEventListener('keyup', () => {
    if (senha.value.length >= 8) {
        labelSenha.style.color = 'green';
        labelSenha.innerText = 'Senha';
        senha.style.color = `green`;
    } else {
        labelSenha.style.color ='red';
        labelSenha.innerText = 'Insira no mínimo 8 caracteres';
        senha.style.color = `red`;
    }
});

function confirmarSenha () {
if (senha.value == confirmarSenha.value) {
    labelConfirmarSenha.style.color = 'green';
    labelConfirmarSenha.innerText = 'Confirmar Senha';
    confirmarSenha.color = `green`;
} else {
    labelConfirmarSenha.style.color ='red';
    labelConfirmarSenha.innerText = 'As senhas não coincidem';
    confirmarSenha.color = `red`;
    
}};




// confirmarSenha.addEventListener('keyup', ()=>{
//     if (senha.value == confirmarSenha.value) {
//         // labelConfirmarSenha.style.color = 'green';
//         // labelConfirmarSenha.innerText = 'Confirmar Senha';
//         // confirmarSenha.color = `green`;
//         alert("Igual")
//     } else {
//         // labelConfirmarSenha.style.color ='red';
//         // labelConfirmarSenha.innerText = 'As senhas não coincidem';
//         // confirmarSenha.color = `red`;
//         alert("Diferente")
//     }
// });
