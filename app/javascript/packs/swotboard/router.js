import BackboneRouteControl from 'backbone-route-control'

const Router = BackboneRouteControl.extend({
    routes: {
      '': 'boards#index',
      'boards/:id': 'boards#show',
    }
  })

export default Router
