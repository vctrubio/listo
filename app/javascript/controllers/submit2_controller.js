import { Controller } from "stimulus"
import $ from "jquery";

export default class extends Controller {
  static targets = [ ]

  connect() {
    this.checkFileInputs()
    this.element.setAttribute('novalidate', true)
    this.element.addEventListener('blur', this.onBlur, true)
    this.element.addEventListener('submit', this.onSubmit)
    this.element.addEventListener('ajax:beforeSend', this.onSubmit)
    this.element.addEventListener('ajax:success', this.addCount)
  }

  disconnect () {
    this.element.removeEventListener('blur', this.onBlur)
    this.element.removeEventListener('submit', this.onSubmit)
    this.element.removeEventListener('ajax:beforeSend', this.onSubmit)
  }



  addCount() {
    const counter = document.getElementById('right-part')
    const stringNum = counter.dataset.count
    let num = parseInt(stringNum)
    const newNum = (num += 1)
    counter.dataset.count = newNum.toString()
  }

  onBlur = (event) => {
    this.validateField(event.target)
    this.removeWarning()

  }


  onSubmit = (event) => {
    if (!this.validateForm()) {
      event.preventDefault()
      this.firstInvalidField.focus()
    }



    if (this.validateEmpty([document.getElementById('list_place_place_attributes_start_time'), document.getElementById('list_place_place_attributes_length') ])) {
      event.preventDefault()
    }


    if (!this.validateFileInputs()) {

      event.preventDefault()
    }

  }

  removeWarning() {
    const warning = document.getElementById('list-place-warning')
    if (warning) {
      warning.remove()
    }
  }


  checkFileInputs() {
    this.getFileLabels.forEach( (label) => {
      const input = label.nextSibling
      if (input.files) {
        if (input.files.length > 0 ) {
          const name = input.value.split(/\\|\//).pop();
          const truncated = name.length > 20
          ? name.substr(name.length - 20)
          : name;
          label.innerHTML = truncated;
        }
      }
    })


  }



  validateFileInputs() {
    let isValid = true
    this.getFileLabels.forEach((label) => {
      if (!this.validateInput(label)) isValid = false
    })
    return isValid
  }

  validateInput(label) {
    const input = label.nextSibling
    if (input.files.length == 0 ) {
      label.classList.add("invalid")
      return false
    } else {
      return true
    }
  }


  validateForm () {
    let isValid = true
    // Not using `find` because we want to validate all the fields
    this.formFields.forEach((field) => {
      if (this.shouldValidateField(field) && !this.validateField(field)) isValid = false
    })
    return isValid
  }



  validateField (field) {
    if (!this.shouldValidateField(field))
      return true
    const isValid = field.checkValidity()
    field.classList.toggle('invalid', !isValid)
    field.parentNode.classList.toggle('invalid', !isValid)
    return isValid
  }

  validateEmpty(fields) {
    let errors = 0
    fields.forEach((field) => {
      if (field.value == "") {
        errors =+ 1
        field.classList.add('invalid')
        field.focus
      }
      if (errors > 0) {
        console.log('Their are errors!')
        console.log(errors)
        return false
      } else if (errors == 0) {
        return true
      }
    })
  }

  customValidityCheck (field) {
    if (field.checkValidity() && field.value != "") {
      return true
    }
  }

  shouldValidateField (field) {
    return !field.disabled && !['file', 'reset', 'submit', 'button'].includes(field.type)
  }

  get getFileLabels() {
   return Array.from(this.element.querySelectorAll('label.file'))
  }

  get formFields () {
    return Array.from(this.element.elements)
  }

  get firstInvalidField () {
    return this.formFields.find(field => !field.checkValidity())
  }
}
