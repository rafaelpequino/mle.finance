//MOVIMENTO DA LABEL E-MAIL
const labelEmail = document.getElementById('label-email');
const inputEmail = document.getElementById('input-email');

inputEmail.addEventListener('focus', () => {
    labelEmail.classList.remove('disabled-label');
    labelEmail.classList.remove('filled-input');
    labelEmail.classList.add('non-disabled-label');
})

inputEmail.addEventListener('blur', () => {
    if (inputEmail.value !== "") {
        labelEmail.classList.remove('disabled-label');
        labelEmail.classList.remove('non-disabled-label');
        labelEmail.classList.add('filled-input');
    } else {
        labelEmail.classList.remove('filled-input');
        labelEmail.classList.remove('non-disabled-label');
        labelEmail.classList.add('disabled-label');

    }
});


//MOVIMENTO DA LABEL SENHA
const labelSenha = document.getElementById('label-senha');
const inputSenha = document.getElementById('input-senha');

inputSenha.addEventListener('focus', () => {
    labelSenha.classList.remove('disabled-label');
    labelSenha.classList.remove('filled-input');
    labelSenha.classList.add('non-disabled-label');
})

inputSenha.addEventListener('blur', () => {
    if (inputSenha.value !== "") {
        labelSenha.classList.remove('disabled-label');
        labelSenha.classList.remove('non-disabled-label');
        labelSenha.classList.add('filled-input');
    } else {
        labelSenha.classList.remove('filled-input');
        labelSenha.classList.remove('non-disabled-label');
        labelSenha.classList.add('disabled-label');

    }
});



