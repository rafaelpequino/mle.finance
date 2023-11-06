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

//CONTROLE DE MODAIS
function bloquearRolagem() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  
    document.body.style.overflow = "hidden";
}

function liberarRolagem() {
    document.body.style.overflow = "auto";
}

function openModal(modalId) {
    bloquearRolagem();
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
    liberarRolagem()
}