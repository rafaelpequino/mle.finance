
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

});
