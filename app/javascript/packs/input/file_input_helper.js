export const showFile = () => {
 const uploadButton = document.querySelectorAll('.input-label');
 uploadButton.forEach( (e) => {
  const realInput = e.nextElementSibling
  realInput.addEventListener('change', () => {
    const name = realInput.value.split(/\\|\//).pop();
    const truncated = name.length > 20
    ? name.substr(name.length - 20)
    : name;

    e.innerHTML = truncated;
  });
})
}
