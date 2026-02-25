// Toggle search bar
document.getElementById('searchToggle').addEventListener('click', function () {
  const searchBar = document.getElementById('searchBar');
  searchBar.classList.toggle('d-none');
});

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("faqSearch");
  const message = document.getElementById("faqSearchMessage");
  const items = document.querySelectorAll("#faqs .accordion-item");
  const form = input.closest("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload
    const query = input.value.trim().toLowerCase();
    let hasMatch = false;

    message.textContent = "";

    items.forEach(item => {
      const button = item.querySelector(".accordion-button");
      const collapse = item.querySelector(".accordion-collapse");
      const text = button.textContent.toLowerCase() + collapse.textContent.toLowerCase();

      const matches = text.includes(query);

      if (query === "") {
        // Reset all
        new bootstrap.Collapse(collapse, { toggle: false }).hide();
        button.classList.remove("highlight");
      } else if (matches) {
        new bootstrap.Collapse(collapse, { show: true });
        button.classList.add("highlight");
        hasMatch = true;
      } else {
        new bootstrap.Collapse(collapse, { toggle: false }).hide();
        button.classList.remove("highlight");
      }
    });

    if (query !== "" && !hasMatch) {
      message.innerHTML = `No matching results found. For more info, 
        <a href="contact.html" class="text-decoration-underline text-primary">contact us on our contact page</a>.`;
    }

    // Scroll to FAQ section if input is not empty
    if (query !== "") {
      const faqSection = document.getElementById("faqs");
      faqSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  // Optional: reset when input is cleared
  input.addEventListener("input", function () {
    if (this.value.trim() === "") {
      message.textContent = "";
      items.forEach(item => {
        const button = item.querySelector(".accordion-button");
        const collapse = item.querySelector(".accordion-collapse");
        new bootstrap.Collapse(collapse, { toggle: false }).hide();
        button.classList.remove("highlight");
      });
    }
  });
});



// Highlight active nav link
document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (linkPage === 'index.html' && currentPage === '')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Background slideshow
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) slide.classList.add('active');
    });
  }

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 7000);
});
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    }
  });
});

// Scroll to Top Button
const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Swiper for info cards
const cardSwiper = new Swiper(".cardSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    }
  },
  loop: true,
});

const cardSwiperContainer = document.querySelector(".cardSwiper");
cardSwiperContainer.addEventListener("mouseenter", () => cardSwiper.autoplay.stop());
cardSwiperContainer.addEventListener("mouseleave", () => cardSwiper.autoplay.start());

$(document).ready(function () {
  const owl = $(".testi-carousel");
  owl.owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    }
  });

  $(".owl-next").click(function () {
    owl.trigger("next.owl.carousel");
  });

  $(".owl-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});

