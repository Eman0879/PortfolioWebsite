

// Scroll header effect
function scrollHeader() {
    const header = document.getElementById('header');
  
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

// Contact form submission
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactSubject = document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message'),
    errorMessage = document.getElementById('error-message');

const sendEmail = (e) => {
    e.preventDefault();

  
    if (contactName.value.trim() === '' ||
        contactEmail.value.trim() === '' ||
        contactSubject.value.trim() === '' ||
        contactMessage.value.trim() === '') {
        // Show message
        errorMessage.textContent = "Write all the input fields";
        errorMessage.classList.remove('color-first'); // Remove success color if any
        return;
    } else {
        
        emailjs.sendForm('service_20tlxvi',
            'template_jtnluld',
            '#contact-form',
            '1r1O0-zYv9ihfzxTI').then(() => {
                // Show message and add color
                errorMessage.classList.add('color-first');
                errorMessage.textContent = 'Message sent';

            
                setTimeout(() => {
                    errorMessage.textContent = '';
                }, 5000);
            }, (error) => {
                alert('OOPs! SOMETHING WENT WRONG...', error);
            });

       
        contactName.value = '';
        contactEmail.value = '';
        contactSubject.value = '';
        contactMessage.value = '';
    }
};

contactForm.addEventListener('submit', sendEmail);

// Toggle menu visibility
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
});

navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
});
