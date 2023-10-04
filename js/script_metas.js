
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
    
    const value = document.querySelectorAll('.value')
    for (let i = 0; i < value.length; i++) {
        formatValues(value[i]);
    }
    
});
    