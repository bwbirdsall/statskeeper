StatsKeeper.Router.map(function() {
  this.resource('teams', { path: '/' }, function() {
    this.resource('new_team', { path: '/teams/new'})
    this.resource('team', { path: '/teams/:id' }, function() {
      this.resource('players', { path: '/players' }, function() {
        this.resource('player', { path: 'players/:id' })
      })
    });
  });
});

StatsKeeper.TeamsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('team');
  }
});

StatsKeeper.PlayersRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('player');
  }
});

StatsKeeper.PlayerRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('player', params.id);
  }
});

StatsKeeper.NewContactRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('team');
  }
});
