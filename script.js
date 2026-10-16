// Seleciona o botão no HTML pelo ID
const toggleButton = document.getElementById('theme-toggle');

// Adiciona um evento de clique ao botão
toggleButton.addEventListener('click', () => {
  // Alterna a classe 'dark-mode' no corpo da página
  document.body.classList.toggle('dark-mode');

  // Atualiza o texto do botão conforme o tema
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Mudar Tema ☀️';
  } else {
    toggleButton.textContent = 'Mudar Tema 🌙';
  }
});