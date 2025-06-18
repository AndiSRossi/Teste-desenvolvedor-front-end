function iniciarContador(elementId, inicio) {
  const elemento = document.getElementById(elementId);
  if (!elemento) {
    console.error(`Elemento com id '${elementId}' não encontrado.`);
    return;
  }

  elemento.style.display = 'block'


  let contador = inicio;
  elemento.textContent = contador;

  const intervalo = setInterval(() => {
    contador--;
    if (contador >= 0) {
      elemento.textContent = contador;
    } else {
      elemento.textContent = "Tempo esgotado!";
      clearInterval(intervalo);
    }
  }, 1000);
}

document.getElementById('botaoIniciar').addEventListener('click', () => {
  iniciarContador('contador', 10);
});
