import Ember from 'ember'
import layout from '../../templates/components/frost-login'
import {default as bunsenModel} from './model'
import {default as bunsenView} from './view'

export default Ember.Component.extend({
  layout: layout,
  classNames: ['frost-login'],

  brand: 'blueplanet',
  bunsenModel,
  bunsenView,
  valid: false,

  section: {
    form: {form: true},
    actions: {actions: true}
  },
  hasError: Ember.computed.notEmpty('error'),

  _product: Ember.computed('product', function () {
    if (this.get('product')) {
      return this.get('product').toUpperCase()
    }
    return null
  }),

  didInsertElement () {
    // Fetch a list of all login input fields
    let loginInputFields = this.$('.login input')

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
        this.sendAction('on-enter')  // send an action to custom forms
      }
    })
  },

  actions: {
    loginFormValueChanged (value) {
      this.set('bunsenValue', value)
    },

    onValidation (e) {
      this.set('valid', e.valid)
    },

    submitLogin: function () {
      let data = this.get('bunsenValue')
      this.sendAction('on-submit', data)
      this.set('bunsenValue', {})
    }
  }
})
