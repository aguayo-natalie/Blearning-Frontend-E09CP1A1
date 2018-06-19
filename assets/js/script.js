 	const locations = {
 		talca: {lat: -35.423, lng: -71.648},
 		paris: {lat: 48.856614, lng: 2.3522219000000177},
 		londres: {lat: 51.5073509, lng: -0.12775829999998223}
 	}
      

	var map, marker;
	 	function initMap() {
	    map = new google.maps.Map(document.getElementById('map'), {
	      center: {lat: locations.talca.lat, lng: locatios.talca.lng},
	      zoom: 8
	    });

	    marker = new google.maps.Marker({
	      position: locations.talca,
	      map: map
	    });
	 }

	 function mapita(location) {

	 	var cors = 'https://cors-anywhere.herokuapp.com/';
  		var api_key = '2e7d080201f35cf5de15ee6ad06444c7';
  		var params = ['exclude=[minutely,hourly,daily,alerts,flags]', 'lang=es', 'units=auto']
	 	
  		$.ajax({
		    url: cors + 'https://api.darksky.net/forecast/'+ api_key +'/' + location.lat + ',' + location.lng + '?' + params[0] + '&' + params[1] + '&' + params[2],
		    method: 'GET'
	  	}).done(function(data) {
		    console.log(data);
		    map = new google.maps.Map(document.getElementById('map'), {
		      center: location,
		      zoom: 8
    	});

	    marker = new google.maps.Marker({
	      position: location,
	      map: map
	    });

	    $('h2.resume').text(data.currently.temperature + 'º ' + data.currently.summary)
	    $('.icon i').attr('class', weather[data.currently.icon])
  });


}
	
$(function (){

  $('#locations').on('change', function(event) {
    mapita( locations[$(this).val()] )
  });

});


