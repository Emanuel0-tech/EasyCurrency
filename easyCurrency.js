registro.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (username === '' || email === '' || password === '') {
    alert('Todos os campos precisam estar preenchidos!');
    return;
  }

  if (password.length < 8) {
    alert('A senha precisa ter pelo menos 8 caracteres!');
    return;
  }

  let userValid = {
    nome: ``, email: ``, senha: ``,
  }

})