





//$(document).on('ready', function() {
//    console.log('readying..');
//    document.addEventListener('DOMContentLoaded', function () {
//        console.log('dom content loaded listener..');
//        var js_file = document.createElement('script');
//        js_file.type = 'text/javascript';
//        js_file.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAQaK60ULN24mFQQF3r57CDg7es9sz4nzw&callback=initMap';
//        document.getElementsByTagName('head')[0].appendChild(js_file);
//    });
//    
//    function initMap() {
//        console.log('init map called');
//        var map;
//        map = new google.maps.Map(document.getElementById('map'), {
//            center: {lat: -34.397, lng: 150.644},
//            zoom: 8
//    });
//}
//});

//$(document).on('ready', function() {
//    var script = document.createElement('script');
//    script.type = 'text/javascript';
//    script.async = false;
//    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAQaK60ULN24mFQQF3r57CDg7es9sz4nzw&callback=initMap';
//    
//    var map = new mapTools({
//  id: 'mymap',
//  lat: 41.3833,
//  lng: 2.1833
//}, function (err, map) {
//  if (!err) {
//    console.log('Map Loaded!', map.instance);
//  }
//});
//});
    
    
    
    
    
//    function initMap(){
//            console.log('hello!');
//            (document.getElementsByTagName( "head" )[ 0 ]).appendChild( script );
//            var uluru = {lat: 40.759898, lng: -73.984195};
//            //var uluru = {lat: 41.85, lng: -87.65};
//            var map = new google.maps.Map(document.getElementById('map'), {
//            zoom: 15,
//            center: uluru
//            });
//            var marker1 = new google.maps.Marker({
//            position: {lat: 40.759898, lng: -73.984195},
//            map: map
//            });
//            var marker2 = new google.maps.Marker({
//            position: {lat: 40.759917, lng: -73.980464},
//            map: map
//            });
//            var marker3 = new google.maps.Marker({
//            position: {lat: 40.757872, lng: -73.989344},
//            map: map
//            });
//            var myClickEvent = function () {
//            //find restaurant and navigate to login page
//            }
//            google.maps.event.addListener(marker1,'click',myClickEvent);
//        }
//    script.onload = function() {
//        script.onload = null;
//    }
//        var directionsService = new google.maps.DirectionsService;
//        var directionsDisplay = new google.maps.DirectionsRenderer;
//        directionsDisplay.setMap(map);
//        directionsService.route({
//          origin: {lat: 40.759898, lng: -73.984195},
//          destination: {lat: 40.759917, lng: -73.980464},
//          travelMode: 'WALKING',
//          provideRouteAlternatives: true},
//          function(response, status) {
//            if (status == 'OK') {
//              directionsDisplay.setDirections(response);
//            } else {
//              window.alert('Directions request failed due to ' + status);
//            }
//          });
//});