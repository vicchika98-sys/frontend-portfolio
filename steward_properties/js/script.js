



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

/*services page*/
$(document).ready(function () {
  const owl = $("#testimonialCarousel");
  owl.owlCarousel({
    loop: false,
    margin: 30,
    autoplay: false,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
      1200: { items: 4 }
    }
  });

  // Custom navigation buttons
  $("#customNext").click(() => owl.trigger("next.owl.carousel"));
  $("#customPrev").click(() => owl.trigger("prev.owl.carousel"));
});
/*property page*/
  function openFullView(img) {
    const modalImg = document.getElementById('modalImage');
    modalImg.src = img.src;
    new bootstrap.Modal(document.getElementById('imageModal')).show();
  }
/*BLOG PAGE*/
  document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function () {
      const text = this.previousElementSibling;
      const isHidden = text.classList.contains('d-none');

      text.classList.toggle('d-none');
      this.textContent = isHidden ? 'Show Less' : 'Read More';
    });
  });


