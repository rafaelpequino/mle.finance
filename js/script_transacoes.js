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
    //formatValues(document.getElementById('balance'))
    
    const valuesTransactions = document.getElementsByClassName('value-transaction')
    for (let i = 0; i < valuesTransactions.length; i++) {
        formatValues(valuesTransactions[i]);
    }

})