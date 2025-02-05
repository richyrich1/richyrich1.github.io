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

            document.querySelector('#about h2').textContent = t.aboutMe;
            document.querySelector('.about-text h3').textContent = t.education;
            document.querySelector('.about-text p').textContent = t.educationDetails;
            document.querySelector('.skills h3').textContent = t.skills;
            document.querySelector('#experience h2').textContent = t.experience;
            document.querySelector('.experience-card h3').textContent = t.applicationSupportEngineer;
            document.querySelector('.experience-card h6').textContent = t.teslaDetails;

            const teslaResponsibilities = document.querySelectorAll('.experience-card ul li');
            teslaResponsibilities.forEach((li, index) => {
                li.textContent = t.teslaResponsibilities[index];
            });
        })
        .catch(error => console.error('Error loading translations:', error));
});