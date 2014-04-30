StatsKeeper.Player = DS.Model.extend({
  playerNumber: DS.attr('number'),
  playerName: DS.attr('string'),
  team: DS.belongsTo('team', {async: true})
});

