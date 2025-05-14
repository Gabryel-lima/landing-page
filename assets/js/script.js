// Controle do botão 'Back to Top'
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Menu mobile (implementação placeholder)
const mobileMenuButton = document.querySelector('.md\\:hidden button');
mobileMenuButton.addEventListener('click', () => {
    alert('Menu mobile seria aberto aqui em uma implementação completa.');
});

// Manipulação do formulário
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Obrigado pelo seu interesse! Entraremos em contato em breve.');
        form.reset();
    });
} 