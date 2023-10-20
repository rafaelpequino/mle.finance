//MÁSCARA
$(document).ready(function(){
    // Define um valor inicial
    $('#value').val('0,00');

    // Aplica a máscara e mantém a estrutura mínima
    $('#value').mask('000.000.000.000.000,00', {reverse: true});

    // Atualiza o valor conforme o usuário digita
    $('#value').keyup(function() {
        var val = $(this).val();
        if (val === '') {
            $(this).val('0,00');
        } else {
            val = val.replace(/^[0]+/, '');
            if (val === '0,0') {
                $(this).val('0,00');
            } else {
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

const modais = [
    'modalReceita',
    'modalDespesa',
    'modalTransf',
    'modalInvest'
]

document.getElementById('new-revenue').addEventListener('click', function() {
    openModal('modalReceita')
});

document.getElementById('modalDespesa').addEventListener('click', function() {
    openModal('modalDespesa')
});

document.getElementById('modalTransf').addEventListener('click', function() {
    openModal('modalTransf')
});

document.getElementById('modalInvest').addEventListener('click', function() {
    openModal('modalInvest')
});

function openModal(modalId) {
    let modalInQuestion = document.getElementById(modalId);

    if (modalInQuestion) {
        modalInQuestion.style.display = "flex";
        setTimeout(() => {
            modalInQuestion.style.opacity = 1;
        }, 10);
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeModal(modalId)
        }
    });
}

function closeModal(modalToClose) {
    let modalInQuestion = document.getElementById(modalToClose);
    modalInQuestion.style.opacity = 0;
    setTimeout(() => {
        modalInQuestion.style.display = "none";
    }, 300);
}
