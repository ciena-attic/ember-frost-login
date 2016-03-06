import Ember from 'ember'
import {default as loginFormModel} from './model'

export default Ember.Controller.extend({
  loginFormModel,
  valid: false,

  actions: {
    loginFormValueChanged (value) {
      this.set('loginFormValue', value)
    },

    onValidation (e) {
      this.set('valid', e.valid)
    },

    submitLogin: function () {
      let data = this.get('loginFormValue')
      this.notifications.addNotification({
        message: 'server: ' + data.server + ', username: ' + data.username +
          ', password: ' + data.password + ', rememberme: ' + data.rememberMe,
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
      this.set('loginFormValue', {})
    }
  }
})
