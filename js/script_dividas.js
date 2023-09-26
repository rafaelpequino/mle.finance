
document.addEventListener('DOMContentLoaded', () => {

    //FORMATAR VALORES
    function formatValues (element) {
        const originalValue = parseFloat(element.innerText)
        const formattedValue = originalValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        
        if (originalValue >= 0) {
            element.innerHTML = `<span>R$ </span>${formattedValue.slice(3)}`;
        } else {
            element.innerHTML = `<span>R$ -</span>${formattedValue.slice(4)}`;
            element.style.color = "var(--expenses-color)"
        }
    }
    //formatValues(document.getElementById('balance'))
    
    const valuesMetas = document.querySelectorAll('.value-divida')
    for (let i = 0; i < valuesMetas.length; i++) {
        formatValues(valuesMetas[i]);
    }
    
});
    