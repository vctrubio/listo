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
  let place = autocomplete.getPlace();
  let full_address = "";
  for (let i in place.address_components) {
    let component = place.address_components[i];
    full_address += component.long_name + " ";
  }
  document.querySelectorAll('#full_address')[index].value = full_address;
  document.querySelectorAll('#autocomplete')[index].value = place.name;
  document.querySelectorAll('#latitude')[index].value = place.geometry.location.lat();
  document.querySelectorAll('#longitude')[index].value = place.geometry.location.lng();
}
});

}

autocomplete();

export default autocomplete;


