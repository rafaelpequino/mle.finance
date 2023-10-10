
document.addEventListener('DOMContentLoaded', () => {

    //FORMATAR VALORES
    function formatValues (element) {
        const originalValue = parseFloat(element.innerText)
        const formattedValue = originalValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        
        if (originalValue !== "" && originalValue >= 0) {
            element.innerHTML = `<span>R$ </span>${formattedValue.slice(3)}`;
        } else if (originalValue !== "" && originalValue < 0) {
            element.innerHTML = `<span>R$ -</span>${formattedValue.slice(4)}`;
            element.style.color = "var(--expenses-color)"
        } else {
            element.innerHTML = `---`;
        }
    }
    //formatValues(document.getElementById('balance'))
    
    
    const limitsCards = document.querySelectorAll('.limit-category>div>span')
    for (let i = 0; i < limitsCards.length; i++) {
        formatValues(limitsCards[i]);
    }
    
    });
    