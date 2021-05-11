const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
  keyboard: {
    enabled: true,
  },
});

ymaps.ready(function () {
  var myMap = new ymaps.Map("first_map", {
    center: [-4.77, 55.52],
    zoom: 11,
  });
  // Создание геообъекта с типом точка (метка).
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [-4.77, 55.52], // координаты точки
    },
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myGeoObject);
});
