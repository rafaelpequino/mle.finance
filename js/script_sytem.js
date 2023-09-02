//LIBERAR PÁGINA APÓS SITE CARREGADO
window.onload = function() {
    document.body.style.display = 'block';
};

//HIDE SHOW DROPDOWN
const btnOpenDropdown  = document.getElementById('user-info') 
const dropdownMenu  = document.getElementById('dropdown-menu') 

btnOpenDropdown.addEventListener("click", function() {
    dropdownMenu.classList.toggle('show-dropdown')
    dropdownMenu.classList.toggle('hide-dropdown')
})

function bloquearRolagem() {
    // Armazena a posição atual da rolagem para que possamos restaurá-la posteriormente
    const scrollPos = window.scrollY;

    // Adiciona estilos para desativar a rolagem
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPos}px`;
}

function liberarRolagem() {
    // Obtém a posição original da rolagem armazenada na função de bloqueio
    const scrollPos = parseInt(document.body.style.top || '0', 10);

    // Remove os estilos de desativação da rolagem
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';

    // Restaura a posição original da rolagem
    window.scrollTo(0, Math.abs(scrollPos));
}


//SIDEBAR RESPONSIVO
const sidebar = document.getElementById('sidebar');
const btnOpenSidebar = document.getElementById('open-close-sidebar');

btnOpenSidebar.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

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
