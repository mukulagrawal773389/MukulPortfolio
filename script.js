const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [97,99, 79, 89, 87, 80, 85, 91, 55, 75, 92, 91, 98, 89, 72, 50, 95, 100, 80, 87, 85, 85, 70];



window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("change");
      });
      navbarLinks[i].classList.add("change");
    }
  });

  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll(".progress-percent").forEach((el, i) => {
      el.style.width = `${progressBarPercents[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPercents[i];
    });
  }
};

// Function to send email using EmailJS

function sendMail(){
  // to prevent the page from refreshing again and again -
  event.preventDefault();
  var params = {
    from_name : document.getElementById("fullName").value,
    email_id : document.getElementById("email").value,
    message : document.getElementById("message").value
  }
  emailjs.send("service_a828e8l", "template_rmw6v7d", params).then(function (res) {
        alert("Success! message sent successfully, 'confirmation mail sent on your email' statusCode:" + res.status);
  })
}
//emailJS ends

mainFn();

window.addEventListener("resize", () => {
  window.location.reload();
});
