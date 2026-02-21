
function authenticate() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const loginMessage = document.getElementById('loginMessage');

            if (username === "usuario" && password === "senha") {
                window.location.href = "quiz.html";
            } else {
                loginMessage.textContent = "Credenciais inválidas. Tente novamente.";
                loginMessage.style.color = "darkred";
            }
        }