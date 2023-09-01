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
    const valuesTransactions = document.getElementsByClassName('transaction');
    
    Array.from(valuesAccounts).forEach(account => {
        const valueElementAccount = account.querySelector('.value-account');
        const originalValueAccount = parseFloat(valueElementAccount.textContent.replace(/,/g, ''));
        
        const formattedValueWithCurrency = originalValueAccount.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        
        const formattedValueShort = formatNumberToShort(originalValueAccount);
        
        valueElementAccount.innerHTML = `<span>R$</span>${formattedValueWithCurrency.slice(3)}`;
    });

    Array.from(valuesPayCard).forEach(card => {
        const valueElementCard = card.querySelector('.value-pay-card');
        const originalValueCard = parseFloat(valueElementCard.textContent.replace(/,/g, ''));
        
        const formattedValueWithCurrency = originalValueCard.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        
        const formattedValueShort = formatNumberToShort(originalValueCard);
        
        valueElementCard.innerHTML = `<span>R$</span>${formattedValueWithCurrency.slice(3)}`;
    });

    Array.from(valuesTransactions).forEach(card => {
        const valueElementTransactions = card.querySelector('.value-transaction');
        const originalValueTransactions = parseFloat(valueElementTransactions.textContent.replace(/,/g, ''));
        
        const formattedValueWithCurrency = originalValueTransactions.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        
        const formattedValueShort = formatNumberToShort(originalValueTransactions);
        
        valueElementTransactions.innerHTML = `<span>R$</span>${formattedValueWithCurrency.slice(3)}`;
    });


    //ESCOLHER COLUNA DOS LIMITES
    function changeLimitsColumn() {
        let viewport = window.innerWidth;
        const divMyLimits = document.getElementById('limits')

        const columnLeft = document.getElementById('column-left')
        const columnRight = document.getElementById('column-right')

        // Remover a divMyLimits de ambas as colunas
        if (divMyLimits.parentNode === columnLeft) {
            columnLeft.removeChild(divMyLimits);
        } else if (divMyLimits.parentNode === columnRight) {
            columnRight.removeChild(divMyLimits);
        }

        // Adicionar a divMyLimits à coluna apropriada
        if (viewport > 1650) {
            columnRight.appendChild(divMyLimits);
        } else {
            columnLeft.appendChild(divMyLimits);
        }
    }

    function changePromotionColumn() {
        let viewport = window.innerWidth;
        const divPromotion = document.getElementById('promotion')

        const columnCenter = document.getElementById('column-center')
        const columnRight = document.getElementById('column-right')

        // Remover a divPromotion de ambas as colunas
        if (divPromotion.parentNode === columnCenter) {
            columnCenter.removeChild(divPromotion);
        } else if (divPromotion.parentNode === columnRight) {
            columnRight.removeChild(divPromotion);
        }

        // Adicionar a divPromotion à coluna apropriada
        if (viewport > 1650) {
            columnRight.appendChild(divPromotion);
        } else {
            columnCenter.appendChild(divPromotion);
        }
    }

window.addEventListener('resize', changeLimitsColumn);
window.addEventListener('resize', changePromotionColumn);

changeLimitsColumn();
changePromotionColumn();

});

//#promotion
