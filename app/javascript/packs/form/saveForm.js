const save = () => {
  const form = document.querySelector('.edit_list')
  console.log("loaded save");
  document.getElementById("save-list-button").addEventListener("click", function () {
    console.log("click");
    location.reload(true);
    form.submit();

  });
}

save();

export default save;
