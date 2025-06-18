  function setTema(tema) {
    document.documentElement.setAttribute('data-tema', tema);
    localStorage.setItem('tema', tema);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const temaSalvo = localStorage.getItem('tema') || 'claro';
    setTema(temaSalvo);

    const botaoTema = document.getElementById('botao-tema');
    const menu = botaoTema.nextElementSibling;

    botaoTema.addEventListener('click', function (e) {
      e.preventDefault();
      menu.classList.toggle('show');
    });

    document.addEventListener('click', function (e) {
      if (!botaoTema.parentElement.contains(e.target)) {
        menu.classList.remove('show');
      }
    });
  });