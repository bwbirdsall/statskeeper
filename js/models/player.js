StatsKeeper.Player = DS.Model.extend({
  playerNumber: DS.attr('number'),
  playerName: DS.attr('string'),
  team: DS.belongsTo('team', {async: true})
});

StatsKeeper.Player.FIXTURES = [
  {
    id: 1,
    playerNumber: 2,
    playerName: "Wesley Matthews",
    team: 1
  },
  {
    id: 2,
    playerNumber: 88,
    playerName: "Nicolas Batum",
    team: 1
  },
  {
    id: 3,
    playerNumber: 12,
    playerName: "LaMarcus Aldridge",
    team: 1
  },
  {
    id: 4,
    playerNumber: 42,
    playerName: "Robin Lopez",
    team: 1
  },
  {
    id: 5,
    playerNumber: 0,
    playerName: "Damian Lillard",
    team: 1
  },
  {
    id: 6,
    playerNumber: 25,
    playerName: "Mo Williams",
    team: 1
  },
  {
    id: 7,
    playerNumber: 5,
    playerName: "Will Barton",
    team: 1
  },
  {
    id: 8,
    playerNumber: 11,
    playerName: "Meyers Leonard",
    team: 1
  },
  {
    id: 9,
    playerNumber: 41,
    playerName: "Thomas Robinson",
    team: 1
  },
  {
    id: 10,
    playerNumber: 1,
    playerName: "Dorell Wright",
    team: 1
  },
  {
    id: 11,
    playerNumber: 3,
    playerName: "Omer Asik",
    team: 2
  },
  {
    id: 12,
    playerNumber: 2,
    playerName: "Patrick Beverly",
    team: 2
  },
  {
    id: 13,
    playerNumber: 30,
    playerName: "Troy Daniels",
    team: 2
  },
  {
    id: 14,
    playerNumber: 13,
    playerName: "James Harden",
    team: 2
  },
  {
    id: 15,
    playerNumber: 12,
    playerName: "Dwight Howard",
    team: 2
  },
  {
    id: 16,
    playerNumber: 6,
    playerName: "Terrence Jones",
    team: 2
  },
  {
    id: 17,
    playerNumber: 7,
    playerName: "Jeremy Lin",
    team: 2
  },
  {
    id: 18,
    playerNumber: 25,
    playerName: "Chandler Parsons",
    team: 2
  },
  {
    id: 19,
    playerNumber: 20,
    playerName: "D. Montiejunas",
    team: 2
  },
  {
    id: 20,
    playerNumber: 32,
    playerName: "Francisco Garcia",
    team: 2
  }
];
