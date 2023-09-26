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
/*
    formatValues(document.getElementById('total-balance'))
    formatValues(document.getElementById('total-revenues'))
    formatValues(document.getElementById('total-expenses'))
    formatValues(document.getElementById('total-investments'))
    */
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

    const valuesBalance = document.getElementsByClassName('balance')
    for (let i = 0; i < valuesBalance.length; i++) {
        formatValues(valuesBalance[i]);
    }


    //SHOW DISPLAY FILTER
    const btnFilter = document.getElementById('btn-filter')
    const displayFilter = document.getElementById('display-filter')
    const blackout = document.getElementById('blackout')

    btnFilter.addEventListener('click', openDisplayFilter)
    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 27) {
            if (displayFilter.getAttribute("data-status") === "opened") {
                openDisplayFilter();
            }
        }
    });
    blackout.addEventListener('click', openDisplayFilter)

    function openDisplayFilter() {
        let displayStatus = displayFilter.getAttribute("data-status"); // Defina displayStatus dentro da função

        if (displayStatus === "closed") {
            displayFilter.style.transform = "scale(1)";
            blackout.style.display = "block";
            displayFilter.setAttribute("data-status", "opened");
        } else {
            displayFilter.style.transform = "scale(0)";
            blackout.style.display = "none";
            displayFilter.setAttribute("data-status", "closed");
        }
    }

    

})