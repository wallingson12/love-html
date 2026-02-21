function validarFormulario() {
    const resposta = document.querySelector('input[name="q1"]:checked');
    const feedback = document.getElementById('feedback');

    if (!resposta) {
        feedback.textContent = "Escolha uma opção antes de enviar.";
        feedback.className = "failure";
        feedback.style.display = "block";
        return false;
    }

    if (resposta.value === 'a') {
        feedback.textContent = "Error 404 💔";
        feedback.className = "success";
        feedback.style.display = "block";

        setTimeout(() => {
            window.location.href = "erro.html";
        }, 1500);
        return false;
    } else {
        // Feedback melhorado para negativa
        feedback.innerHTML = "Ahh... que pena! 😢<br>Mesmo assim, você continua sendo incrível e especial para mim! 💖";
        feedback.className = "failure";
        feedback.style.display = "block";
        return false;
    }
}