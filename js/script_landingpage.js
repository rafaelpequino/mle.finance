// Selecionar todas as perguntas
const questions = document.querySelectorAll('.question');

// Adicionar um ouvinte de evento a cada pergunta
questions.forEach(question => {
    question.addEventListener('click', () => {
        // Encontrar o elemento de resposta correspondente
        const answerId = question.id.replace('question', 'answer');
        const answer = document.getElementById(answerId);

        // Alternar a exibição da resposta
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});
