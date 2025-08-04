document.addEventListener('DOMContentLoaded', () => {
  const inputTelefone = document.getElementById('telefone');

  if (!inputTelefone) return;

  const maskOptions = {
    mask: '(00) 0 0000-0000',
    lazy: false, 
  };

  IMask(inputTelefone, maskOptions);
});