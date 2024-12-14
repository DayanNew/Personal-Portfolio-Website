script.js

// Scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('headr nav a');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offesetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && to < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            //active sections for animation an scroll
            section.classList.add('show-animate');
        }
        // if you want to use animation that repeats on scroll
        else {
            section.classList.remove('show-animate');
        }
    });
    
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}

// Füge EventListener für das Menü-Icon hinzu
menuIcon.onclick = function () {
    navbar.classList.add('active');  // Zeigt das Menü an
    closeIcon.classList.add('active');  // Zeigt das Schließen-Icon an
    menuIcon.style.display = 'none';  // Blendet das Menü-Icon aus
};

// Füge EventListener für das Schließen-Icon hinzu
closeIcon.onclick = function () {
    navbar.classList.remove('active');  // Versteckt das Menü
    closeIcon.classList.remove('active');  // Versteckt das Schließen-Icon
    menuIcon.style.display = 'block';  // Zeigt das Menü-Icon wieder an
};

// Contact me Section
document.addEventListener('DOMContentLoaded', function() {
    // Finde das Formular und die Meldungselemente
    const contactForm = document.querySelector('#contact form');
    const successMessage = document.querySelector('.success-message');
    const errorMessage = document.querySelector('.error-message');

    // Füge den Event-Listener zum Absenden des Formulars hinzu
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Verhindert das tatsächliche Absenden des Formulars

      // Erfasse die eingegebenen Daten aus dem Formular
      const formData = new FormData(contactForm);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      // Sende die Daten an den Server
      fetch('/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(result => {
        console.log('Server-Antwort:', result);

        // Zeige die Erfolgsmeldung oder Fehlermeldung entsprechend an
        if (result.message === 'Nachricht erfolgreich empfangen!') {
          successMessage.style.display = 'block';
          errorMessage.style.display = 'none';
        } else {
          successMessage.style.display = 'none';
          errorMessage.style.display = 'block';
        }
      })
      .catch(error => {
        console.error('Fehler beim Senden an den Server:', error);
        errorMessage.style.display = 'block';
      });
    });
  });
    
