const insert = () => {
  const trigger = document.getElementById('insertForm');
  const forms = trigger.dataset.forms.split('$$$$$');
  let counter = 0;
  trigger.addEventListener('click', event => {
    event.target.insertAdjacentHTML("beforebegin", forms[counter]);
    counter++;
  })
}

export default insert;
