document.addEventListener("DOMContentLoaded", function () {
  // List of carousel IDs
  const carouselIds = [
    "jaipur",
    "pushkar",
    "jodhpur",
    "jaisalmer",
    "udaipur",
    "sawai",
  ];

  // Function to initialize pagination for a given carousel
  function initCarouselPagination(carouselId) {
    var carouselElement = document.getElementById(carouselId);
    var currentSlideElement = carouselElement.querySelector("#current-slide");
    var totalSlidesElement = carouselElement.querySelector("#total-slides");
    var totalSlides = carouselElement.querySelectorAll(".carousel-item").length;

    // Set total slides
    totalSlidesElement.textContent = totalSlides;

    // Update the current slide number on slide change
    carouselElement.addEventListener("slide.bs.carousel", function (event) {
      currentSlideElement.textContent = event.to + 1;
    });
  }

  // Initialize pagination for each carousel
  carouselIds.forEach(function (carouselId) {
    initCarouselPagination(carouselId);
  });
});
