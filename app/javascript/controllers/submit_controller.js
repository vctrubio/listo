import { Controller } from "stimulus"
import $ from "jquery";

export default class extends Controller {
  static targets = [ ]

  connect() {
    this.element.setAttribute('novalidate', true)
    this.element.addEventListener('blur', this.onBlur, true)
    this.element.addEventListener('submit', this.onSubmit)
    this.element.addEventListener('ajax:beforeSend', this.onSubmit)
  }

  disconnect () {
    this.element.removeEventListener('blur', this.onBlur)
    this.element.removeEventListener('submit', this.onSubmit)
    this.element.removeEventListener('ajax:beforeSend', this.onSubmit)
  }

  verifyRadio(form) {
    const radioButtons = form.getElementsByClassName('form-check')
    if (Array.from(radioButtons).some(this.isChecked)) {
      return true
    } else {
      return false
    }
  }

  createWarning(apendAfterThis) {
    const div = document.createElement('div')
    const li = document.createElement('li')
    const text = document.createTextNode("Don't forget to select a category!");
     li.classList.add('fas', 'fa-arrow-down')
     div.classList.add('category-alert', 'text-center')
     div.id = "place-category-warning"
    div.appendChild(text)
    div.appendChild(li)
    apendAfterThis.insertAdjacentElement('afterend', div)

  }

  removeWarning() {
    const warning = document.getElementById('place-category-warning')

    warning.remove()
  }


  isChecked(field) {
    return field.children[0].checked
  }

  onBlur = (event) => {
    this.validateField(event.target)
  }


  onSubmit = (event) => {
    if (!this.validateForm()) {
      event.preventDefault()
      this.firstInvalidField.focus()
    }

    if (!this.verifyRadio(this.element)) {
      event.preventDefault()
      const legend = this.element.getElementsByTagName('legend')[0]
      const fieldSet = legend.parentNode.getElementsByClassName('form-check-input')
      this.createWarning(legend)
      Array.from(fieldSet).forEach( (e) => {
        e.addEventListener('click', (r) => {
          this.removeWarning()
        })
      })
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
        return false
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

  get formFields () {
    return Array.from(this.element.elements)
  }

  get firstInvalidField () {
    return this.formFields.find(field => !field.checkValidity())
  }
}
