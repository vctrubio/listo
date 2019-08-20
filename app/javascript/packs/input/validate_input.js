export const validateCapacity = (input) => {
 const capacityInput = document.getElementById('list_place_place_attributes_capacity')
 if (capacityInput) {
   capacityInput.addEventListener('change', (e) => {
    if (capacityInput.value.length > 2) {
      capacityInput.value = limitNumericValue(capacityInput.value,[1,0,0])
    }
  })
 }
}

export const validatePrice = (input) => {
 const capacityInput = document.getElementById('list_place_place_attributes_price')
 if (capacityInput) {
   capacityInput.addEventListener('change', (e) => {
    if (capacityInput.value.length > 3) {
      capacityInput.value = limitNumericValue(capacityInput.value,[1,0,0,0])
    }
  })
 }
}

  const limitNumericValue = (numericInputArray, numberLimits ) => {
    const splitChars = numericInputArray.split('')
    const numArray = splitChars.map( char => parseInt(char))
    if (numArray.length > numberLimits.length) {
      numArray.length = numberLimits.length
    } else if (numArray.length < numberLimits.length) {
      return numericInputArray
    } else if (numArray[0] == 0) {
      return numericInputArray
    }
    const filteredArray = numArray.map( (e, index) => {

      let rObj = []
      if (e > numberLimits[index] ) {
       rObj.push(numberLimits[index])
      } else {
        rObj.push(e)
      }
      return rObj
    })
    const newCharArray = filteredArray.map( test => test.toString())
    const newNumericInputArray = newCharArray.join('')
    return newNumericInputArray
  }

