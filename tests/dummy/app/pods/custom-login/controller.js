import Ember from 'ember'

const {Controller} = Ember

export default Controller.extend({
  valid: false,

  actions: {

    submitLogin (data) {
      this.notifications.addNotification({
        message: 'username: ' + data.username +
          ', password: ' + data.password + ', rememberme: ' + data.rememberMe +
          ', server: ' + data.server,
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
