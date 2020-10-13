let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -8.042769, lng: -34.898659 },
    zoom: 18,
  });

  var marker = new google.maps.Marker({
    position: { lat: -8.042769, lng: -34.898659 },
    map: map
  });
}

