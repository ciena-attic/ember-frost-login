import Ember from 'ember'

export default Ember.Controller.extend({
  actions: {
    submitLogin: function (data) {
      if (!data) {
        return
      }

      this.notifications.addNotification({
        message: 'username: ' + data.username + ', password: ' + data.password,
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
