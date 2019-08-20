const save = () => {
  const form = document.querySelector('.edit_list')
  const subitButton = document.querySelector('#save-list-button')
  const warnings = document.getElementsByClassName('list-place-warning')
  document.getElementById("save-list-button").addEventListener("click", function () {
    if (checkForPlaces()) {
      location.reload(true);
      form.submit();
    } else {
      if (warnings.length == 0 || warnings.length == undefined ) {
        createWarning(subitButton )
      }
    }
  });
}

const checkForPlaces = () => {
  const placeContainer = document.getElementById('right-part')
  if (placeContainer.dataset.count > 0 ) {
    return true
  } else  {
    return false
  }
}

 const createWarning = (apendAfterThis) => {
    const div = document.createElement('div')
    const text = document.createTextNode("You don't have any classes in this workshop!");
     div.classList.add('alert-danger', 'text-center', 'mt-2', 'list-place-warning')
     div.id = "list-place-warning"
    div.appendChild(text)
    apendAfterThis.insertAdjacentElement('afterend', div)

  }


save();

export default save;
