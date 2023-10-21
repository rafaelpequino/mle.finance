//LIBERAR PÁGINA APÓS SITE CARREGADO
window.onload = function() {
    document.body.style.display = 'block';
};

// HIDE SHOW DROPDOWN
const btnOpenDropdown = document.getElementById('user-info');
const dropdownMenu = document.getElementById('dropdown-menu');

// Variável para rastrear o estado do dropdown
let isDropdownOpen = false;

window.addEventListener('scroll', closeDropdown);
btnOpenDropdown.addEventListener("click", actionDropdown)

function actionDropdown (e) {
    e.stopPropagation();

    if (!isDropdownOpen) {
        dropdownMenu.classList.add('show-dropdown');
        dropdownMenu.classList.remove('hide-dropdown');
        document.addEventListener('click', closeDropdown);
        isDropdownOpen = true;
    } else {
        closeDropdown();
    }
};

function closeDropdown() {
    dropdownMenu.classList.remove('show-dropdown');
    dropdownMenu.classList.add('hide-dropdown');
    document.removeEventListener('click', closeDropdown);
    isDropdownOpen = false;
}

document.addEventListener('click', function (e) {
    if (isDropdownOpen && e.target !== btnOpenDropdown) {
        closeDropdown();
    }
});



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


//SIDEBAR RESPONSIVO
const sidebar = document.getElementById('sidebar');
const btnOpenSidebar = document.getElementById('open-close-sidebar');

btnOpenSidebar.addEventListener('click', () => {

    if (sidebar.getAttribute('data-sidebarStatus') === 'close') {
        bloquearRolagem();
        sidebar.setAttribute('data-sidebarStatus', 'open');
    } else {
        liberarRolagem();
        sidebar.setAttribute('data-sidebarStatus', 'close');
    }

    sidebar.classList.toggle('sidebar-open');
    sidebar.classList.toggle('sidebar-close');
    btnOpenSidebar.classList.toggle('btn-sidebar-open');
});


//CONTROLE DE MODAIS
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