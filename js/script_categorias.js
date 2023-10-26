
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
//formatValues(document.getElementById('balance'))


const limitsCards = document.querySelectorAll('.limit-category>div>span')
for (let i = 0; i < limitsCards.length; i++) {
    formatValues(limitsCards[i]);
}
    
    