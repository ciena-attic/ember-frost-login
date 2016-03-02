import Ember from 'ember'
import {default as bunsenModel} from './model'

export default Ember.Controller.extend({
  bunsenModel,
  valid: false,

  actions: {
    loginFormValueChanged (value) {
      this.set('bunsenValue', value)
    },

    onValidation (e) {
      this.set('valid', e.valid)
    },

    submitLogin: function () {
      let data = this.get('bunsenValue')
      this.notifications.addNotification({
        message: 'server: ' + data.server + ', username: ' + data.username +
          ', password: ' + data.password + ', rememberme: ' + data.rememberme,
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
      this.set('bunsenValue', {})
    }
  }
})
