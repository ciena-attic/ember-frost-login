import Ember from 'ember'
import layout from '../../templates/components/frost-login'
import {default as loginFormModel} from './form-model'
import {default as loginFormView} from './form-view'

const {Component, computed} = Ember

export default Component.extend({
  layout: layout,
  classNames: ['frost-login'],

  loginFormModel,
  loginFormView,
  valid: false,

  section: {
    form: {form: true},
    actions: {actions: true}
  },
  hasError: computed.notEmpty('error'),

  _product: computed('product', function () {
    if (this.get('product')) {
      return this.get('product').toUpperCase()
    }
    return null
  }),

  didInsertElement () {
    // Fetch a list of all login input fields
    let loginInputFields = this.$('.frost-bunsen-form input')

    // Auto-focus the first empty login input field
    loginInputFields.each(function () {
      if (!this.value) {
        this.focus()
        return false   // Break out of the each() loop
      }
    })

    // Send a "submitLogin" action if the Enter key is pressed in any input field
    loginInputFields.keypress((e) => {
      if (e.which === 13) {
        this.send('submitLogin')      // send an action to the local submitLogin handler
        this.sendAction('onEnter')  // send an action to custom forms
      }
    })
  },

  actions: {
    loginFormValueChanged (value) {
      this.set('loginFormValue', value)
    },

    onValidationHandler (e) {
      this.set('valid', e.errors.length === 0)
    },

    submitLogin: function () {
      let data = this.get('loginFormValue')
      this.sendAction('onSubmit', data)
      this.set('loginFormValue', {})
    }
  }
})
