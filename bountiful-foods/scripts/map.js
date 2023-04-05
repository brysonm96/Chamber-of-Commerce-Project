function loadScript() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAIz3YNbJxmlycsKveL6UpQMgFpYVEeMcs&callback=initMap';
    document.body.appendChild(script);
  }
  // Initialize and center the map
  function initMap() {
    var carlsbad = {lat: 33.158093, lng: -117.350594};
    var map = new google.maps.Map(document.querySelector('#map'), {
      zoom: 12,
      center: carlsbad
    });
    // Add a marker at the location
    var marker = new google.maps.Marker({
      position: carlsbad,
      map: map,
      title: 'Carlsbad, CA'
    });
  }
  // Call the loadScript() function to load the API and initialize the map
  loadScript();