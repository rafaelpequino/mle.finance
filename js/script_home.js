//FUNÇÃO PARA FORMATAR VALORES
function formatNumberToShort(number) {
    const suffixes = ['', 'k', 'm', 'b', 't'];
    const suffixNum = Math.floor(('' + number).length / 3);
    const shortNum = parseFloat((suffixNum !== 0 ? (number / Math.pow(1000, suffixNum)) : number).toPrecision(2));
    return shortNum + suffixes[suffixNum];
}

//FORMATAR VALORES
document.addEventListener('DOMContentLoaded', () => {
    const valuesAccounts = document.getElementsByClassName('account');
    const valuesPayCard = document.getElementsByClassName('pay-card');
    
    Array.from(valuesAccounts).forEach(account => {
        const valueElement = account.querySelector('.value-account');
        const originalValue = parseFloat(valueElement.textContent.replace(/,/g, ''));
        
        const formattedValueWithCurrency = originalValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        
        const formattedValueShort = formatNumberToShort(originalValue);
        
        valueElement.innerHTML = `<span>R$</span>${formattedValueWithCurrency.slice(3)}`;
    });

    Array.from(valuesPayCard).forEach(card => {
        const valueElement = card.querySelector('.value-pay-card');
        const originalValue = parseFloat(valueElement.textContent.replace(/,/g, ''));
        
        const formattedValueWithCurrency = originalValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        
        const formattedValueShort = formatNumberToShort(originalValue);
        
        valueElement.innerHTML = `<span>R$</span>${formattedValueWithCurrency.slice(3)}`;
    });
});
