/**
 * Created by User on 007 07.02.17.
 */
function initMap() {
	var map = new google.maps.Map(document.getElementsByClassName('map-block')[0], {
		center: {
			lat: 55.7903916,
			lng: 37.7274616
		},
		scrollwheel: false,
		zoom: 17
	});
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode({'address': 'Москва, Россия, ул. Ибрагимова, 35'}, function (results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
				icon: new google.maps.MarkerImage(
					'/static/images/map-marker.png',
					new google.maps.Size(162, 134),
					new google.maps.Point(0, 0),
					new google.maps.Point(81, 104)
				),
				map: map,
				position: results[0].geometry.location,
				title: 'ул. Ибрагимова, 35'
			});
		} else {
			//console.log("Geocode was not successful for the following reason: " + status);
		}
	});
}