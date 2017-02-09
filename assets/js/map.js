var map;

$("#closebtn").on('click',function(){
	$("#mySidenav").css("width","0px");
});

function initMap() {
var pyrmont = {lat: -33.867, lng: 151.195};
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 30, lng: 0},
    zoom: 4,
	mapTypeId: google.maps.MapTypeId.HYBRID
  });
	var infowindow = new google.maps.InfoWindow();
	var service = new google.maps.places.PlacesService(map);

	$.ajax({
		url:'places.php',
		data:{action:'getplaces'},
		datatype:"json",
		success: function(data){
			console.log(data);
			var arobj = JSON.parse(data);
			
			for(var placeobj of arobj){
				
				getDetails(service, placeobj);
			}
		
		}
	 });
	 
	 function getWiki(placeobj, callback){
		$.ajax({
		url:'https://fr.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exsentences=2&explaintext=&titles='+placeobj.name,
		dataType:"jsonp",
		success:function(data){
			var pages = data.query.pages;
			var extract;
			for(var page in pages){
				extract = pages[page].extract;
		
			}
			callback(extract);
			
		}
		});
	 }
 


	function getDetails(service, placeobj){
		service.getDetails({
	
			placeId: placeobj.placeid
				}, function(place, status) {
				console.log(place);
				if (status === google.maps.places.PlacesServiceStatus.OK) {
					console.log(place.id);
				  var marker = new google.maps.Marker({
					map: map,
					position: place.geometry.location
				  }, placeobj.name);
					getWiki(placeobj,function(description){
						google.maps.event.addListener(marker, 'click', function() {
							/*
							infowindow.setContent('<h3>'+place.name+'</h3><br>rating: '+place.rating+'/5<br>'+description+"<br><a href='http://fr.wikipedia.org/wiki/"+placeobj.name+"' target='_blank'><i class='fa fa-wikipedia-w' aria-hidden='true'></i> Voir sur Wikipedia</a>");
							infowindow.open(map, this);*/
							$(".loading").css("display","block");
							$("#placename").text(place.name);
							$("#address").html("<i class='fa fa-map-marker' aria-hidden='true'></i> "+place.formatted_address);
							$("#placedescription").html(description+"<br><br><a href='http://fr.wikipedia.org/wiki/"+placeobj.name+"' target='_blank'><div class='btn btn-info'><i class='fa fa-wikipedia-w' aria-hidden='true'></i> Wikipedia</div></a>");
							$("#placedescription").append("<a href='"+place.url+"' target='_blank'><div class='btn btn-info maps'><i class='fa fa-map' aria-hidden='true'></i> Maps</div></a>");
							var img = new Image();
							img.onload = function(){ 
								$("#photo").html("<img src='"+img.src+"'></img>");
								$("#mySidenav").css("width","400px");
								console.log("ok");
								$(".loading").css("display","block");

							}
							img.src = place.photos[0].getUrl({'maxWidth': 400, 'maxHeight': 270});
						
							loadimage(place.photos);

							
					});
				});
			}
		});
	}
	
	function loadimage(photos){
		$('#slideshow').html("<ul class='bxslider'></ul>");
		
		for(var i = 1; i<photos.length; i++){
				
				$(".bxslider").append("<li><img src='"+photos[i].getUrl({'maxWidth': 400, 'maxHeight': 200})+"'></img></li>");	
				console.log(photos[i].getUrl({'maxWidth': 400, 'maxHeight': 200}));
		}
		if(i!=1){
			$('.bxslider').bxSlider();
		}
	}
	
}
 

 
function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
}