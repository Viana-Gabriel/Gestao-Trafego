document.addEventListener("DOMContentLoaded", () => {
  (function () {
    emailjs.init("ex7DC29ew0qKXZTCP");
  })();
});

document
  .getElementById("contato-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("date").value = new Date().toLocaleString("pt-BR");

    emailjs.sendForm("service_iu0eyrl", "template_zg7quuo", this).then(
      () => {
        alert("Mensagem enviada com sucesso!");
        this.reset();
      },
      (error) => {
        alert("Erro ao enviar o formulário. Tente novamente.");
        console.error(error);
      }
    );
  });
