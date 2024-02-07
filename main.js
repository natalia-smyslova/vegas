
// JQUERY
// $(document).ready(function(){

// });


// BURGER
let burger = document.querySelector(".header__burger");
let nav = document.querySelector("nav");
let body = document.querySelector("body");
let activeClass = "active";

burger.addEventListener("click", () => {
  nav.classList.toggle(activeClass);
  body.classList.toggle(activeClass);
  burger.classList.toggle(activeClass);
})


// MAP

let locationsData = [
  {
    lat: 59.119185065231825,
    lon: 37.906587499999986,
    name: 'Данилова,26'
  },
  {
    lat: 59.122653565209774,
    lon: 37.898789999999984,
    name: 'Строителей,5'
  },
  {
    lat: 59.12831556522436,
    lon: 37.92444599999998,
    name: 'Луначарского,30'
  },
  {
    lat: 59.13485356517938,
    lon: 37.90928249999998,
    name: 'Сталеваров,73'
  },
  {
    lat: 59.12316156521111,
    lon: 37.93391399999999,
    name: 'Ленина,11'
  },
];


function init() {
  let map = new ymaps.Map('map', {
    center: [59.12295597006034, 37.90553252148438],
    zoom: 12
  });

  locationsData.forEach((item) => {
    const placemark = new ymaps.Placemark([item.lat, item.lon], {
      hintContent: item.name,
      balloonContent: item.name
    })

    map.geoObjects.add(placemark);
  });


};

ymaps.ready(init);

// FORMS

let bookingForm = document.querySelector('.booking-form');
let requestForm = document.querySelector('.request-form');

bookingForm.addEventListener('submit', function (event) {
  console.log('форма отправляется');
  event.preventDefault;
});


requestForm.addEventListener('submit', function (event) {
  console.log('форма отправляется');
  event.preventDefault;
});