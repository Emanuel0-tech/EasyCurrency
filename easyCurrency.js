const loginForm = document.getElementById('loginForm');
const usuarios = [ 
  { username: 'usuario1', email: 'usuario1@email.com', password: 'senha1' },
];

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarSenha(senha) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(senha);
}

function verificarCredenciais(username, password) {
  return usuarios.some(user => user.username === username && user.password === password);
}

function armazenarUsuario(usuario) {
  localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
}

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  
  if (!username || !email || !password) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  if (!validarEmail(email)) {
    alert('Email inválido.');
    return;
  }

  if (!validarSenha(password)) {
    alert('Senha fraca. Deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e números.');
    return;
  }

  
  const usuarioEncontrado = usuarios.find(user => user.username === username && user.password === password);
  if (usuarioEncontrado) {
  
    armazenarUsuario(usuarioEncontrado);
    window.location.href = 'pagina_após_login.html';
  } else {
    alert('Usuário ou senha inválidos.');
  }
});
