const save = () => {
  const form = document.querySelector('.edit_list')
  document.getElementById("save-list-button").addEventListener("click", function () {
    location.reload(true);
    form.submit();
  });
}

save();

export default save;
