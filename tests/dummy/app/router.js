import Ember from 'ember'
import config from './config/environment'
import addRoute from 'frost-guide-custom-routing/utils/addRoute'

const {Router} = Ember

var Router = Router.extend({
  location: config.locationType
})

Router.map(function () {
  let routerConfig = config.APP.routingConfig
  routerConfig.forEach((item) => {
    addRoute.call(this, item)
  })
})

export default Router
