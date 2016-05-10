var map; 
function initialize() {
  var mapOptions = {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
   var asal = new google.maps.places.Autocomplete((document.getElementById('lokasi')),{ types: ['geocode'] });
      var tujuan = new google.maps.places.Autocomplete((document.getElementById('tujuan')),{ types: ['geocode'] });
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

 
  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);
    var posisi = new google.maps.LatLng(-7.813215,110.236273);
       var image = '../img/icon.png';
          var marker = new google.maps.Marker({
            position: pos,
            map: map,
            icon:image
          });

      google.maps.event.addListener(marker,'click',function(){
        convert_latlng(marker.getPosition());
        
      });
      map.setCenter(pos);
     
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}
function convert_latlng(pos) {
 var geocoder = new google.maps.Geocoder();
 geocoder.geocode({'latLng': pos}, function(r) {

    document.getElementById("lokasi").value = r[0].formatted_address;

 });
}
function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }
 
  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };
 
  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}
 
google.maps.event.addDomListener(window, 'load', initialize);
