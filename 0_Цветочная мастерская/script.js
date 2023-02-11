ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        controls: [],
        center: [55.746557, 37.991047],
        zoom: 15,
    },
    myGeoObject = new ymaps.GeoObject({
      geometry: {
        type: 'Point',
        coordinates: [55.746557, 37.991047],
      },
      properties: {
        iconCaption: 'Мастерская',
      },
    }));
    myMap.geoObjects.add(myGeoObject);
}
