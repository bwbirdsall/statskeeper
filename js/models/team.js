StatsKeeper.Team = DS.Model.extend({
  name: DS.attr('string'),
  players: DS.hasMany('player')
});
