document.addEventListener('DOMContentLoaded', () => {

    //FORMATAR VALORES
    function formatValues (element) {
        const originalValue = parseFloat(element.innerText)
        const formattedValue = originalValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        element.innerHTML = `<span>R$</span>${formattedValue.slice(3)}`;
    }
    
    const valuesTransactions = document.getElementsByClassName('value')
    for (let i = 0; i < valuesTransactions.length; i++) {
        formatValues(valuesTransactions[i]);
    }

    const efetivadas = document.querySelectorAll('.efetivadas>div:last-child')
    for (let i = 0; i < efetivadas.length; i++) {
        formatValues(efetivadas[i]);
    }

    const programadas = document.querySelectorAll('.programadas>div:last-child')
    for (let i = 0; i < programadas.length; i++) {
        formatValues(programadas[i]);
}

})