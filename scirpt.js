const menuBtn = document.getElementById('menuBtn');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');

 menuBtn.addEventListener('click',()=>{
    mobileMenu.classList.remove('hidden');
 })

 closeMenu.addEventListener('click', ()=>{
     mobileMenu.classList.add('hidden');
 })

 


      const scrollText = document.getElementById("scrollText");

    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    }

    window.addEventListener("scroll", () => {
      if (isInViewport(scrollText)) {
        scrollText.classList.remove("opacity-0", "translate-y-6");
        scrollText.classList.add("opacity-100", "translate-y-0");
      } else {
        scrollText.classList.remove("opacity-100", "translate-y-0");
        scrollText.classList.add("opacity-0", "translate-y-6");
      }
    });




 const roles = [
      "Frontend Developer",
       "Java Developer",
      "UI/UX Designer",
      "Graphic Designer",
      "JavaScript Enthusiast",
      "Creative Coder"

    ];

    let currentRole = 0;
    const roleElement = document.getElementById("role");

    function typeRole(role, i = 0) {
      if (i <= role.length) {
        roleElement.textContent = role.substring(0, i);
        setTimeout(() => typeRole(role, i + 1), 80);
      } else {
        setTimeout(() => deleteRole(role), 1500);
      }
    }

    function deleteRole(role, i = role.length) {
      if (i >= 0) {
        roleElement.textContent = role.substring(0, i);
        setTimeout(() => deleteRole(role, i - 1), 40);
      } else {
        currentRole = (currentRole + 1) % roles.length;
        typeRole(roles[currentRole]);
      }
    }

    // Start the animation
    typeRole(roles[currentRole]);

     
     const cards = document.querySelectorAll('.card');

      window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const winHeight = window.innerHeight;

        cards.forEach((card, index) => {
          const start = winHeight * (index + 0.3);
          const end = winHeight * (index + 1);

          if (scrollTop >= start && scrollTop < end) {
            card.classList.add('visible');
          } else {
            card.classList.remove('visible');
          }
        });
      });


      

  
    // const link = document.createElement('a');
    // link.href = '../path/to/resume.pdf'; // Change to your resume path
    // link.download = 'My_Resume.pdf';  // Suggested filename
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    function downloadResume() {
    const link = document.createElement('a');
    link.href = 'resume.pdf'; // ✅ CORRECT relative path based on your folder structure
    link.download = 'Shekhar_Barkahde_resume.pdf'; // This name will be used for downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  


    (function () {
      emailjs.init("6huy3PKKWuJTqmt4W"); // Replace with your EmailJS public key
    })();


      function sendEmail(e) {
      e.preventDefault(); // prevent default form submission

      emailjs.sendForm("service_w96n1od", "template_mr7c207", "#contact-form")
        .then(() => {
          alert("Message sent successfully!");
          document.getElementById("contact-form").reset();
        }, (error) => {
          alert("Failed to send the message. Please try again.\n" + JSON.stringify(error));
        });
    }