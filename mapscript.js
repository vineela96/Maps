var map1, map2, map3;
function initialize(){
    var mapOptions1= {
        zoom:2,
        center:{lat:40.758904, lng: -73.985128}
    };
    var mapOptions2 = {
        zoom:10,
        center:{lat:40.758904, lng: -73.985128}
    };
    var mapOption3={
        zoom:18,
        center:{lat:40.758904, lng: -73.985128}
    };

    map1= new google.maps.Map(document.getElementById('map_canavas1'),mapOptions1);
    map2= new google.maps.Map(document.getElementById('map_canavas2'),mapOptions2);
    map3= new google.maps.Map(document.getElementById('map_canavas3'),mapOptions3);
}