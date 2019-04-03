import mapboxgl from 'mapbox-gl';

const initMapbox = () => {
  const mapElement = document.getElementById('map');

  const fitMapToMarkers = (map, markers) => {
    const bounds = new mapboxgl.LngLatBounds();
    markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
    map.fitBounds(bounds, { padding: 70, maxZoom: 15 });
  };

  const fitMaptoMarker = (map, marker) => {
    const bounds = new mapboxgl.LngLatBounds();
    marker => bounds.extend([ marker.lng, marker.lat ]);
    map.fitBounds(bounds, { padding: 70, maxZoom: 15 });
  };

  if (mapElement) { // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10'
    });

    const markers = JSON.parse(mapElement.dataset.markers);

    const my_markers = [];

    markers.forEach((marker) => {
      //var el = document.createElement('div');
      const mk = new mapboxgl.Marker({color: '#0294A5'})
      mk.getElement().id = "marker-opaque";
      mk.setLngLat([ marker.lng, marker.lat ]);
      mk.addTo(map);
      my_markers.push(mk);
    });

    console.log(my_markers);

    fitMapToMarkers(map, markers);

    var places = document.querySelectorAll('.form-list-show');
    //console.log(places);

    places.forEach((place, index) => {
      //console.log(index);
      place.addEventListener("mouseover", (event) => {
        const currentMarker = markers[index];
        const my_currentMarker = my_markers[index];
        my_currentMarker.getElement().id = "";
        map.easeTo({
          center: [currentMarker.lng, currentMarker.lat],
          //bearing: 90,
          zoom: 14,
          speed: 0.6
          //pitch: 40
        })
        // map.setCenter([currentMarker.lng, currentMarker.lat]);
        //map.setCenter(currentMarker);
      });

      place.addEventListener("mouseout", (event) => {
        fitMapToMarkers(map, markers);
        const my_currentMarker = my_markers[index];
        my_currentMarker.getElement().id = "marker-opaque";
      });

    });

  };
};

export { initMapbox };
