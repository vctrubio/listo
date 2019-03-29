const autocomplete = () => {
  var input = document.getElementById('autocomplete');
  var autocomplete = new google.maps.places.Autocomplete(input);
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    fillInAddress();
  });

  function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();
  console.log(place);
  var full_address = "";
  for (var i in place.address_components) {
    var component = place.address_components[i];

    full_address += component.long_name + " ";


    // for (var j in component.types) {
    //   // Some types are ["country", "political"]
    //   var type_element = document.getElementById(component.types[j]);

    //   if (type_element) {
    //     type_element.value = component.long_name;
    //   }
    // }

  }
  console.log(full_address);
  document.getElementById('full_address').value = full_address;
  document.getElementById('autocomplete').value = place.name;
}
}

export default autocomplete;


