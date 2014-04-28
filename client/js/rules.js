MobTemplates = {
  
  shroom : {
    tick : function(mob) {
      if(Math.random() > 0.7) {
        GameState.lord.energy += 1;
        Stage.flashText(mob.pos.x, mob.pos.y, '+');
      }
    },
  },
  
}

Rules = {
  
  mobsAt : function(x, y) {
    var result = [];
    $.each(GameState.mobs, function(idx, mob) {
      if(mob.pos.x == x && mob.pos.y == y)
        result.push(mob);  
    });
    return(result);
  },
  
  createMob : function(mob) {
    if(!mob.width) mob.width = Config.tileSize;
    mob.img = mob.type+'.png';
    if(MobTemplates[mob.type]) 
      $.each(MobTemplates[mob.type], function(k, v) { mob[k] = v; }); 
    if(mob.create) mob.create(mob);
    Stage.placeAsset(mob);
    GameState.mobs.push(mob);
  },
  
}