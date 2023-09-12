
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
formatValues(document.getElementById('balance'))
formatValues(document.getElementById('total-invoices'))
/*formatValues(document.getElementById('value-total-revenues'))
formatValues(document.getElementById('value-total-expenses'))
formatValues(document.getElementById('value-total-investments'))*/

const valuesAccounts = document.getElementsByClassName('total-account')
for (let i = 0; i < valuesAccounts.length; i++) {
    formatValues(valuesAccounts[i]);
}

const valuesCards = document.getElementsByClassName('invoice-card');
for (let i = 0; i < valuesCards.length; i++) {
    formatValues(valuesCards[i]);
}

const limitsCards = document.querySelectorAll('.limit-card>div>span')
for (let i = 0; i < limitsCards.length; i++) {
    formatValues(limitsCards[i]);
}

const revenues = document.getElementsByClassName('total-transaction')
for (let i = 0; i < revenues.length; i++) {
    formatValues(revenues[i]);
}

const efetivadas = document.querySelectorAll('.efetivadas>div:last-child')
for (let i = 0; i < efetivadas.length; i++) {
    formatValues(efetivadas[i]);
}

const programadas = document.querySelectorAll('.programadas>div:last-child')
for (let i = 0; i < programadas.length; i++) {
    formatValues(programadas[i]);
}

});
