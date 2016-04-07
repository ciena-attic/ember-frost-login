import Ember from 'ember'
import {default as loginFormModel} from './model'

const {Controller} = Ember

export default Controller.extend({
  loginFormModel,
  valid: false,

  actions: {
    loginFormValueChanged (value) {
      this.set('loginFormValue', value)
    },

    onValidationHandler (e) {
      this.set('valid', e.valid)
    },

    submitLogin () {
      let data = this.get('loginFormValue')
      this.notifications.addNotification({
        message: 'username: ' + data.username +
          ', password: ' + data.password + ', rememberme: ' + data.rememberMe +
          ', server: ' + data.server,
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
      this.set('loginFormValue', {})
    }
  }
})
