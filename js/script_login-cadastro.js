//EFEITO DOS INPUTS E LABELS
const inputContainers = document.querySelectorAll('.input-container')

inputContainers.forEach(inputContainer => {
    let label = inputContainer.querySelector('label')
    let input = inputContainer.querySelector('input')

    input.addEventListener('focus', () => {
        label.classList.remove('disabled-label', 'filled-input')
        label.classList.add('non-disabled-label')
    });

    input.addEventListener('blur', () => {
        if (input.value !== "") {
            label.classList.remove('disabled-label', 'non-disabled-label')
            label.classList.add('filled-input')
        } else {
            label.classList.remove('filled-input', 'non-disabled-label')
            label.classList.add('disabled-label')
        }
    })
})


//MÁSCARA DE TELEFONE
if (document.getElementById('input-cellphone')) {
    $(document).ready(function(){
        $('#input-cellphone').mask('(00) 00000-0000');
    })
    
}
