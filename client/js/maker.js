Maker = {
  
  tile : function(t) {
    return('<div class="tile tile_'+t.type+'" id="'+t.id+'" style="left:'+
      (t.x*Config.tileSize)+
      'px;top:'+
      ((t.y+Config.skyHeight)*Config.tileSize)+
      'px;background-position:'+Maker.getBgPos(t)+';'+
      '"></div>');
  },
  
  object : function(t) {
    return('<img class="stageObject so_'+t.type+'" width="'+t.width+'" id="'+t.id+'" style="left:'+
      (t.x*Config.tileSize)+
      'px;top:'+
      ((t.y+Config.skyHeight)*Config.tileSize)+
      'px;" src="img/'+t.type+'.png"/>');
  },
  
  hut : function(h) {
    h.width = 128;
    return(Maker.object(h));
  },
  
  getBgPos : function(t) {
    if(t.type == 'surface') 
      return('-'+((t.x % 8)*64)+'px 0px ');
    if(t.type == 'beneath') 
      return('-'+((t.x % 8)*64)+'px -'+(((t.y+1) % 8)*64)+'px ');
  },
  
  sky : function() {
    return('<div id="sky" style="height:'+((Config.skyHeight+1)*Config.tileSize)+'px;"></div>');
  },
  
  skyObject : function(so) {
    if(so.caption)
      return('<div class="skyObject smoothPos so'+so.type+'" id="'+so.id+'" style="left:-100px;top:-100px;">'+so.caption+'</div>');
    else
      return('<img class="skyObject smoothPos so'+so.type+'" id="'+so.id+'" '+
        ' src="img/'+so.type+'.png" width="64"'+
        ' style="left:-100px;top:-100px;"/>');
  },
  
  
}