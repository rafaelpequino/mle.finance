//MÁSCARA DE INPUTS MONETÁRIOS
$(document).ready(function(){
    $('.valueNew').val('0,00');

    $('.valueNew').mask('000.000.000.000.000,00', {reverse: true});

    $('.valueNew').keyup(function(event) {
        var val = $(this).val();
        if (val === '') {
            $(this).val('0,00');
        } else {
            val = val.replace(/^0+/, '');
            if (val === '') {
                $(this).val('0,00');
            } else {
                var parts = val.split(',');
                if (parts[0] === '') {
                    parts[0] = '0';
                }
                if (parts.length === 1) {
                    parts[1] = '00';
                } else if (parts[1].length === 1) {
                    parts[1] = '0' + parts[1];
                }
                val = parts.join(',');
                $(this).val(val);
            }
        }
    });
}); 


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
formatValues(document.getElementById('balance'))
formatValues(document.getElementById('total-invoices'))

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


//CONFIG MODAL NOVO INVESTIMENTO
const investmentType = document.getElementById('investment_type')

const infoFixa = document.getElementById('info-fixa')
const infoVariavel = document.getElementById('info-variavel')

const btnSubmitNewInvest = document.getElementById('submitNewInvest')

investmentType.addEventListener('change', () => {
    let investmentInputValue = investmentType.value

    if (investmentInputValue == "fixa") {
        infoFixa.style.display = "block";
        infoVariavel.style.display = "none";
        btnSubmitNewInvest.style.display = "block";
    } else if (investmentInputValue == "variavel") {
        infoFixa.style.display = "none";
        infoVariavel.style.display = "block";
        btnSubmitNewInvest.style.display = "block";
    }
})




