const labelEmail = document.getElementById('label-email');
const inputEmail = document.getElementById('input-email');

inputEmail.addEventListener('focus', alterLabelEmail);
inputEmail.addEventListener('blur', alterLabelEmail);

inputEmail.addEventListener('input', function() {
    if (inputEmail.value !== "") {
        inputEmail.removeEventListener('focus', alterLabelEmail);
    } else {
        inputEmail.addEventListener('focus', alterLabelEmail);
    }
});

function alterLabelEmail() {
    labelEmail.classList.toggle('disabled-label');
    labelEmail.classList.toggle('non-disabled-label');

    if (inputEmail.value !== "") {
        labelEmail.classList.remove('disabled-label');
        labelEmail.classList.remove('non-disabled-label');
        labelEmail.classList.add('filled-input');
    } else {
        labelEmail.classList.remove('filled-input');

    }
}
