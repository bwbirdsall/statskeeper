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
  model: function() {
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
  needs: 'team',
  team: Ember.computed.alias('controllers.team'),


  actions: {
    createPlayer: function() {
      var team = this.get('team').get('model');
      var model = this.get('model');
      var newPlayer = this.store.createRecord('player', {
        name: this.get('playerName'),
        number: this.get('playerNumber')
      });
      team.get('players').pushObject(model);
      this.transitionToRoute('teams');
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
});

StatsKeeper.PlayerController = Ember.ObjectController.extend({
  actions: {
    deletePlayer: function() {
      if (confirm('Cut the guy, huh?')) {
        this.get('model').destroyRecord();
      }
    }
  }
});

StatsKeeper.PlayersController = Ember.ObjectController.extend({


});
