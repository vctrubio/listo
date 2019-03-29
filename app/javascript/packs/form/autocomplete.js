const autocomplete = () => {
  //var input = document.getElementById('autocomplete');
  var inputs = document.querySelectorAll('#autocomplete');
  inputs.forEach((input, index) => {
    var autocomplete = new google.maps.places.Autocomplete(input);
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
      fillInAddress();
    });

    function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();
  console.log(place);
  console.log(place.geometry.location.lat());
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
  document.querySelectorAll('#full_address')[index].value = full_address;
  document.querySelectorAll('#autocomplete')[index].value = place.name;
  document.querySelectorAll('#latitude')[index].value = place.geometry.location.lat();
  document.querySelectorAll('#longitude')[index].value = place.geometry.location.lon();
  //document.getElementById('full_address').value = full_address;
  //document.getElementById('autocomplete').value = place.name;
}
});

}

export default autocomplete;


