function myMap() {
    var myCenter = new google.maps.LatLng(-12.141976,-76.99731509999998);
    var mapCanvas = document.getElementById("googleMap");
    var mapOptions = {center: myCenter, zoom: 18};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter,animation:google.maps.Animation.BOUNCE});
    marker.setMap(map);

    var contentString="<h4>DIAJO SAC</h4><br>" +
        "<p>Doña Gloria 173, Santiago de Surco, Lima, Perú</p>"+"<br><a target='_blank' href='https://goo.gl/maps/on3Yg4AsKX32'>cómo llegar</a>";



    var infoWindow = new google.maps.InfoWindow({
        content:contentString
    });

    google.maps.event.addListener(marker,'click',function () {
        if(infoWindow.close) {
            infoWindow.open(map, marker);
        }
    });

    infoWindow.open(map,marker);

}