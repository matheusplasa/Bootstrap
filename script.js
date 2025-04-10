document.addEventListener('DOMContentLoaded', function() {
    // Animação dos cards
    const contactBoxes = document.querySelectorAll('.contact-box');
    
    contactBoxes.forEach((box, index) => {
        // Atraso crescente para cada card
        box.style.animationDelay = `${index * 0.1}s`;
        box.classList.add('animate__animated', 'animate__fadeInUp');
    });

    // Formulário de cadastro
    const registrationForm = document.getElementById('registrationForm');
    
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envio do formulário
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            
            submitButton.innerHTML = `
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Enviando...
            `;
            submitButton.disabled = true;
            
            // Simular tempo de envio
            setTimeout(() => {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                
                // Mostrar mensagem de sucesso
                alert('Cadastro realizado com sucesso! Em breve entraremos em contato.');
                registrationForm.reset();
            }, 2000);
        });
    }

    // Efeito de hover nos cards de curso
    const courseCards = document.querySelectorAll('.card');
    
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.1)';
        });
    });
});