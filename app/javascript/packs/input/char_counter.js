export const countChar = () => {
  const inputs = document.getElementsByClassName('count-char')
  Array.from(inputs).forEach( (input) => {
    const counter = document.getElementById(`counter-${input.id}`)
    input.addEventListener('keyup', (event) => {
      counter.innerText = `${input.value.length}/${counter.dataset.charlimit}`
    })
  })
}

