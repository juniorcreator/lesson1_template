
function docReady(fn) {
  if (document.readyState === "complete" || document.readyState === "interactive") {

    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
const checkExistingDoom = element => {
  let el =  document.querySelector(element);
  return !!el;
};

const initMap = () => {

  if(checkExistingDoom('#map')) {
    let map, marker;
    let icon = {
      url: "resources/img/map.png", // url
      scaledSize: new google.maps.Size(45, 60),
      origin: new google.maps.Point(0,0),
      anchor: new google.maps.Point(0, 0)
    };
    //49.431602, 32.056893
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 49.431602, lng: 32.056893 },
      zoom: 15,
      zoomControl: false,
      gestureHandling: 'cooperative',
      disableDefaultUI: true,
      styles:[
        {
          "featureType": "landscape",
          "stylers": [
            {
              "color": "#d3d6ce"
            }
          ]
        },
        {
          "featureType": "landscape.man_made",
          "stylers": [
            {
              "color": "#d3d6ce"
            }
          ]
        },
        {
          "featureType": "landscape.natural.terrain",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "stylers": [
            {
              "color": "#bfc2b9"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "water",
          "stylers": [
            {
              "color": "#bfc2b9"
            }
          ]
        }
      ],
    });
    marker = new google.maps.Marker({
      position: {lat: 49.431602, lng: 32.056893 },
      map: map,
      title: 'Here is title',
      icon: icon
    });
  }
};


docReady(initMap);