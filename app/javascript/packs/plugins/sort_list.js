const sortList = () => {
  console.log("Sorting lists");

  var cards, switching, i, x, y, shouldSwitch;
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    cards = document.querySelectorAll('.card'); // here give the class of the elements you want to sort
    cols = document.querySelectorAll('.colx');
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 0; i < (cards.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = cards[i].querySelector('.like-count').innerText;
      y = cards[i + 1].querySelector('.like-count').innerText;
      // Check if the two rows should switch place:
      if (y > x) { // you can add an event listener that checks the direction (now it high to low but if you want to switch from low to high you can reverse the comparison operator
        // I so, mark as a switch and break the loop:
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      // var container = document.querySelector(".container");
      //console.log(cards[i].parentNode);
      cols[i].parentNode.insertBefore(cols[i + 1], cols[i]);
      switching = true;
    }
  }

}

sortList();

//export { sortList };
