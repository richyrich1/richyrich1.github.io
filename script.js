document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

var form = document.getElementById("contact-form");
  
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        // form.reset()
        // window.location.reload();
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form"
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Oops! There was a problem submitting your form"
    });
  }
  form.addEventListener("submit", handleSubmit)

  document.addEventListener('DOMContentLoaded', function() {
    const userLang = navigator.language || navigator.userLanguage;
    const lang = userLang.startsWith('es') ? 'es' : 'en';

    fetch('translations.json')
        .then(response => response.json())
        .then(translations => {
            const t = translations[lang];

            document.querySelector('nav ul li a[href="#home"]').textContent = t.home;
            document.querySelector('nav ul li a[href="#about"]').textContent = t.about;
            document.querySelector('nav ul li a[href="#experience"]').textContent = t.experience;
            document.querySelector('nav ul li a[href="#contact"]').textContent = t.contact;

            document.querySelector('.hero-content h1:nth-of-type(1)').textContent = t.heroTitle1;
            document.querySelector('.hero-content h1:nth-of-type(2)').textContent = t.heroTitle2;
            document.querySelector('.hero-content p').textContent = t.heroDescription;
            document.querySelector('.hero-content a').textContent = t.ctaButton;

            document.querySelector('#about h2').textContent = t.aboutMe;
            document.querySelector('.about-text p').textContent = t.aboutDescription;
            document.querySelector('.about-text h3').textContent = t.education;
            document.querySelector('.about-text p:nth-of-type(2)').textContent = t.educationDetails;
            document.querySelector('.skills h3').textContent = t.skills;

            document.querySelector('#experience h2').textContent = t.experienceTitle;

            const experienceCards = document.querySelectorAll('.experience-card');
            experienceCards.forEach((card, index) => {
                const jobTitle = card.querySelector('h3').textContent;
                if (jobTitle === 'Application Support Engineer') {
                    card.querySelector('h6').textContent = t.teslaDetails;
                    const responsibilities = card.querySelectorAll('ul li');
                    responsibilities.forEach((li, index) => {
                        li.textContent = t.teslaResponsibilities[index];
                    });
                } else if (jobTitle === 'Application Support Engineer') {
                    card.querySelector('h6').textContent = t.amatDetails;
                    const responsibilities = card.querySelectorAll('ul li');
                    responsibilities.forEach((li, index) => {
                        li.textContent = t.amatResponsibilities[index];
                    });
                } else if (jobTitle === 'Software Engineer') {
                    card.querySelector('h6').textContent = t.xlr8Details;
                    const responsibilities = card.querySelectorAll('ul li');
                    responsibilities.forEach((li, index) => {
                        li.textContent = t.xlr8Responsibilities[index];
                    });
                } else if (jobTitle === 'Facilities Supervisor') {
                    card.querySelector('h6').textContent = t.byuiDetails;
                    const responsibilities = card.querySelectorAll('ul li');
                    responsibilities.forEach((li, index) => {
                        li.textContent = t.byuiResponsibilities[index];
                    });
                }
            });

            document.querySelector('#contact h2').textContent = t.contactMe;
            document.querySelector('input[name="name"]').placeholder = t.yourName;
            document.querySelector('input[name="email"]').placeholder = t.yourEmail;
            document.querySelector('textarea[name="message"]').placeholder = t.yourMessage;
            document.querySelector('.submit-btn').textContent = t.sendMessage;
            document.querySelector('#my-form-status').textContent = t.formStatus;
        })
        .catch(error => console.error('Error loading translations:', error));
});