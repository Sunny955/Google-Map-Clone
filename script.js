mapboxgl.accessToken = 'pk.eyJ1Ijoic3VubjkwNTB5IiwiYSI6ImNrZDY3MTZqbjAzenIyeHZxMzR3eTI2c3QifQ.FMwNuXERKI4J1T9-xftRFg';

navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy:true})

function successLocation(position){
    console.log(position);
   setupMap([position.coords.longitude,position.coords.latitude]);
   
}

function errorLocation(position){
    setupMap([81.36, 21.22]);

    
}

function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center:center,
        zoom: 15
        });


const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}
