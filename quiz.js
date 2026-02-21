const questions = [
            { question: "Onde nos conhecemos?", options: ["Cinema", "Praia", "Escola", "Trabalho"], answer: "Praia" },
            { question: "Qual é o seu filme favorito?", options: ["Titanic", "Star Wars", "Rei leão", "Harry Potter"], answer: "Rei leão" },
            { question: "Qual é a minha cor favorita?", options: ["Vermelho", "Verde", "Azul", "Preto"], answer: "Vermelho" },
            { question: "Qual é a minha série de TV favorita?", options: ["Breaking Bad", "Friends", "Stranger Things", "The Office"], answer: "Friends" }
        ];

        let currentQuestionIndex = 0;
        const questionElement = document.getElementById('question');
        const optionsElement = document.getElementById('options');
        const messageElement = document.getElementById('message');

        function loadQuestion() {
            const currentQuestion = questions[currentQuestionIndex];
            questionElement.textContent = currentQuestion.question;
            optionsElement.innerHTML = '';
            messageElement.textContent = '';

            currentQuestion.options.forEach(option => {
                const li = document.createElement('li');
                li.textContent = option;
                li.className = 'option';
                li.onclick = () => checkAnswer(option);
                optionsElement.appendChild(li);
            });
        }

        function checkAnswer(selectedOption) {
            const currentQuestion = questions[currentQuestionIndex];
            if (selectedOption === currentQuestion.answer) {
                currentQuestionIndex++;
                if (currentQuestionIndex < questions.length) {
                    loadQuestion();
                } else {
                    // redirecionamento correto para o arquivo templates/request_main.html
                    window.location.href = "request_main.html";
                }
            } else {
                messageElement.textContent = "Tente novamente!";
            }
        }

        // Carrega a primeira questão
        loadQuestion();