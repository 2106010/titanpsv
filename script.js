function initMap() {
  var location = { lat: 24.014446, lng: -104.644402 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: location,
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}


