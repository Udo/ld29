Config = {
  skyHeight : 3,
  dim : { x : 32, y : 10 },
  tileSize : 64,
}

GameState = {
  
  data : {},
  
  init : function() {
    GameState.data = {
      map : GameState.initMap(),
      mobs : GameState.initMobs(),
      lord : GameState.initLord(),
      env : GameState.initEnvironment(),
      };
  },

  initMap : function() {
    return({});
  },

  initMobs : function() {
    return({});
  },

  initLord : function() {
    return({});
  },

  initEnvironment : function() {
    return({
      timeOfDay : 100,
      });
  },
  
}

