// mapboxgl.accessToken = 'pk.eyJ1IjoianVtb2tlIiwiYSI6ImNsMmVxemV1cDAxZjQzaXFncmQzYWwwZ3IifQ.gVebb9UPZB5uRcArZoocnQ'
// const map = new mapboxgl.Map({
//       container: 'map',
//       style: 'mapbox://styles/mapbox/streets-v11',
//  center: [-71060982, 42.357725],
// zoom: 18,
// });

mapboxgl.accessToken = 'pk.eyJ1IjoianVtb2tlIiwiYSI6ImNsMmVxemV1cDAxZjQzaXFncmQzYWwwZ3IifQ.gVebb9UPZB5uRcArZoocnQ';
		
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-2.24, 53.48])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15
    });	
    const nav = new mapboxgl.NavigationControl();
    map.addControl(new MapboxDirections({
    accessToken: mapboxgl.accessToken
}));
}

    