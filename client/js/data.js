Config = {
  skyHeight : 3,
  dim : { x : 32, y : 10 },
  tileSize : 64,
}

GameState = {
  
  data : {},
  
  init : function() {
    $.each(['Env', 'Map', 'Mobs', 'Lord'], function(idx, k) {
      var lk = k.toLowerCase();
      GameState.data[lk] = GameState['init'+k]();
      GameState[lk] = GameState.data[lk];
      });
  },
  
  setProperty : function(container, key, value) {
    GameState.data[container][key] = value;
  },

  getProperty : function(container, key) {
    return(GameState.data[container][key]);
  },

  initMap : function() {
    var map = [];
    for(var xm = -2; xm < Config.dim.x+2; xm++)
      map[xm] = [];
    return(map);
  },

  initMobs : function() {
    return([]);
  },

  initLord : function() {
    var lord = {
      energy : 100,
      health : 100,
      upkeep : 1,
      };
    GameState.mobs.push(lord);
    return(lord);
  },

  initEnv : function() {
    return({
      timeOfDay : 100,
      tickCount : 0,
      gameRunning : true,
      });
  },
  
  tick : function() {
    if(!GameState.env.gameRunning) return;
    $.each(GameState.mobs, function(idx, mob) { if(mob.tick) mob.tick(mob); });
    GameState.env.tickCount += 1;
    if(GameState.env.tickCount > 9) {
      GameState.env.tickCount = 0;
      // lose health if no energy
      if(GameState.lord.energy <= 0) GameState.lord.health -= 1;
      // lose game if no health
      if(GameState.lord.health <= 0) UI.lose();
      // energy upkeep
      GameState.lord.energy -= GameState.lord.upkeep;
    }
  },
  
}

