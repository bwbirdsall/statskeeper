StatsKeeper.Router.map(function() {
  this.resource('teams', { path: '/' }, function() {
    this.resource('new_team', { path: '/teams/new'})
    this.resource('team', { path: '/teams/:id' }, function() {
      this.resource('players', { path: '/players' }, function() {
        this.resource('new_player', { path: '/new'})
        this.resource('player', { path: '/:id' })
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

StatsKeeper.NewTeamRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('team');
  }
});

StatsKeeper.NewPlayerRoute = Ember.Route.extend({
  model: function(params) {
    console.log(params);
    return this.store.createRecord('player');
  }
});

StatsKeeper.NewTeamController = Ember.ObjectController.extend({
  actions: {
    createTeam: function() {
      var model = this.get('model');
      model.save();
      this.transitionToRoute('teams');
    }
  }
});

StatsKeeper.NewPlayerController = Ember.ObjectController.extend({
  actions: {
    createPlayer: function(params) {
      var model = this.get('model');
      var team = this.store.find('team', params.id)
      model.save();
      team.players.pushObject(model);
      this.transitionToRoute('team', team.id);
    }
  }
});

StatsKeeper.TeamController = Ember.ObjectController.extend({
  actions: {
    deleteTeam: function() {
      if (confirm('Wrong team, huh?')) {
        this.get('model').destroyRecord();
      }
    }
  }
})
