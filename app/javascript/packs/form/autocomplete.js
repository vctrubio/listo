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
  for (var i in place.address_components) {
    var component = place.address_components[i];

    for (var j in component.types) {
      // Some types are ["country", "political"]
      var type_element = document.getElementById(component.types[j]);

      if (type_element) {
        type_element.value = component.long_name;
      }
    }
  }
}
}

export default autocomplete;

  // const trigger = document.getElementById('insertForm');
  // const forms = trigger.dataset.forms.split('$$$$$');
  // let counter = 0;
  // trigger.addEventListener('click', event => {
  //   event.target.insertAdjacentHTML("beforebegin", forms[counter]);
  //   counter++;
  // })
