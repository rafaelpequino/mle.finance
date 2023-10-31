
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
    
    const valueAcao = document.querySelectorAll('.value-acao')
    for (let i = 0; i < valueAcao.length; i++) {
        formatValues(valueAcao[i]);
    }

    const valueInvest = document.querySelectorAll('.value-invest')
    for (let i = 0; i < valueInvest.length; i++) {
        formatValues(valueInvest[i]);
    }
    
});
    

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
