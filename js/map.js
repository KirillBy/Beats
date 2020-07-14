ymaps.ready(init);

var placemarks = [{
    latitude: 55.758817, 
    longitude: 37.583196,
    hintContent: '<div class="somehtml" style="color:red">street.somestreet</div>',
    balloonContent: [
      '<div>',
      '</img>',
      'ст. метро Баррикадная',
      '</div>'
    ]
  },
  {
    latitude: 55.749983, 
    longitude: 37.602808,
    hintContent: '<div class="somehtml" style="color:red">street.somestreet</div>',
    balloonContent: [
      '<div>',
      '</img>',
      'ст. метро Охотный ряд',
      '</div>'
    ]
  },
  {
    latitude: 55.755865, 
    longitude: 37.618858,
    hintContent: '<div class="somehtml" style="color:red">street.somestreet</div>',
    balloonContent: [
      '<div>',
      '</img>',
      'ст. метро Арбатская',
      '</div>'
    ]
  },
  {
    latitude: 55.741172, 
    longitude: 37.580578,
    hintContent: '<div class="somehtml" style="color:red">street.somestreet</div>',
    balloonContent: [
      '<div>',
      '</img>',
      'Смоленский бульвар',
      '</div>'
    ]
  }
]

geoObjects = [];

function init() {
  var map = new ymaps.Map('map', {
    center: [55.75, 37.61],
    zoom: 12,
    controls: ['zoomControl'],
    behaviors: ['drag']
  });

  for (var i = 0; i < placemarks.length; i++) {

    geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude], {
      hintContent: placemarks[i].hintContent,
      hintContent: 'Beats Solo Shop',
      balloonContent: placemarks[i].balloonContent.join('')
    }, {
      iconLayout: 'default#image',
      iconImageHref: './../image/decor/marker.png',
      iconImageSize: [46, 57],
      iconImageOffset: [-23, -57]
    });

  }

  var clusterer = new ymaps.Clusterer({
    clusterIcons: [{
      href: './../image/decor/marker.png',
      size: [46, 57],
      offset: [-23, -57]
    }],
    clusterIconContentLayout: null
  });

  map.behaviors.disable('scrollZoom');
  map.geoObjects.add(clusterer);
  clusterer.add(geoObjects);

}