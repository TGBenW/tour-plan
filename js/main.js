$(document).ready(function () {
  const hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    keyboard: {
      enabled: true,
    },
  });

  const reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
    keyboard: {
      enabled: true,
    },
    autoHeight: true,
  });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
    $("#body").toggleClass("oh");
  });

  var modalButton = $("[data-toggle=modal]");
  modalButton.on("click", openModal);
  var closeModalButton = $(".modal__close");
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    //document.addEventListener("keydown", escapeHandler);
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  $(document).on("keydown", function (event) {
    if (event.keyCode == 27) {
      closeModal(event); // Do Something
    }
  });

  var modalOverlay = $(".modal__overlay");
  modalOverlay.on("click", closeModal);

  //form validation
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Name should be at least 2 symbols long",
        },
        email: {
          required: "Please enter email so we could contact you",
          //required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Please enter a phone number",
          minlength: "Enter +7 (000) 000-00-00 format",
        },
      },
    });
  });

  //phone field format validation
  $(document).ready(function () {
    $(".phone").mask("+7 (000) 000-00-00");
  });

  //AOS initialization
  AOS.init();
});
