import sortList from './sort_list';

const dropdown = () => {

  var items = document.querySelectorAll('.dropdown-item');
  var label = document.querySelector('#current-sort-by');

  items.forEach((item) => {
    item.addEventListener('click', (event) => {
      label.innerText = event.currentTarget.innerText;
      sortList(event.currentTarget.innerText);
    });
  });
};

dropdown();

