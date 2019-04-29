const save = () => {
  const form = document.getElementById("edit_list_104");
  console.log("loaded save");
  document.getElementById("save-list-button").addEventListener("click", function () {
    console.log("click");
    form.submit();
  });
}

save();

export default save;
