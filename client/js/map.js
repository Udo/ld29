Map = {
  
  excavate : function(pos) {
    var tl = GameState.map[pos.x][pos.y];
    if(tl) {
      tl.excavated = true;
      Map.calculateExcavation();
    }
  },

  getTileStatus : function(x, y, field) {
    var tle = GameState.map[x][y];
    if(tle && tle[field])
      return('1');
    else
      return('0');
  },

  getNeighborTileStatusFor : function(x, y, field) {
    return(
      Map.getTileStatus(x, y, field)+
      Map.getTileStatus(x, y-1, field)+
      Map.getTileStatus(x+1, y, field)+
      Map.getTileStatus(x, y+1, field)+
      Map.getTileStatus(x-1, y, field)
      );
  },

  calculateExcavation : function() {
    for(var cx = 0; cx < Config.dim.x; cx++) 
      for(var cy = 0; cy < Config.dim.y; cy++) {
        //var exState = GameState.map[cx+':'+cy].excavated;
        var t = GameState.map[cx][cy];
        t.ns = Map.getNeighborTileStatusFor(cx, cy, 'excavated');
        $('#tl_'+t.x+'_'+t.y).html(Maker.tileInner(t));
      }
      /*
      tl.exOffsetX = pos.x;
      tl.exOffsetY = pos.y;
      $('#tl_'+pos.x+'_'+pos.y).html(Maker.tileInner(tl));      
*/
  },
  
}