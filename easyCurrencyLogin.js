let usuario = document.querySelector(`.usuario`);
let labelUsuario = document.querySelector(`.labelUsuario`);

let senha = document.querySelector(`.senha`);
let labelSenha = document.querySelector(`.labelSenha`);

let bntEntrar = document.querySelector(`.btn-entrar`);

let msgError = document.querySelector(`#msgError`);

let listaUser = []

let userValid = {
    nome: ``,
    user: ``,
    senha: ``
}

listaUser = JSON.parse(localStorage.getItem(`listaUser`))

bntEntrar.addEventListener(`click`, () => {
    listaUser.forEach((item) => {
        if (usuario.value == item.userCad && senha.value == item.senhaCad) {
            userValid = {
                nome: item.nomeCard,
                user: item.userCard,
                senha: item.senhaCad
            }
        }

        if (usuario.value == userValid.user && senha.value == userValid.senha) {
          window.location.href = `coinConversion.HTML`;
          let token = Math.random().toString(16).substring(2);
          localStorage.setItem(`token`, token);

        } else {
            labelUsuario.setAttribute(`style`, `color: red`);
            usuario.setAttribute(`style`, `border-color: red`);
            labelSenha.setAttribute(`style`, `color: red`);
            senha.setAttribute(`style`, `border-color: red`);
            usuario.focus();
        }




    });
})
