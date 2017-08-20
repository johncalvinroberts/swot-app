const Router = Backbone.Router.extend({
    navigate: function(fragment, options) {
      options = options || {};
      options.trigger = !(options.trigger === false);
      Backbone.Router.prototype.navigate.call(this, fragment, options);
    },
    initialize: function(){
      this.route('*path', 'index')
      this.route('home', 'home')
    },
    index: function(){
      this.navigate('home', { replace: true });
    }
  });

export default Router
