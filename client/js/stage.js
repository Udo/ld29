objCtr = 0;

Stage = {
  
  root : false,
  objects : false,
  init : function(domElement) {
    Stage.objects = {};
    Stage.root = domElement;
    Stage.buildDisplay();
    setInterval(Stage.tickHandler, 1000);
    Level.start('beginning');
    Stage.root.click(UI.stageClick);
  },
  
  addQueue : [],
  update : function() {
    Stage.root.append(Stage.addQueue.join(''));
    Stage.addQueue = [];
  },
  
  placeAsset : function(acs) {
    if(!acs.id) acs.id = 'as_'+objCtr++;
    Stage.root.append('<img style="position:absolute;left:'+(acs.x*Config.tileSize)+'px;top:'+(acs.y*Config.tileSize)+'px;" '+ 
      ' src="img/'+acs.img+'" width="'+acs.width+'" id="'+acs.id+'"/>');
  },
  
  addTile : function(tl) {
    tl.id = 'tl_'+tl.x+'_'+tl.y;
    GameState.map[tl.x][tl.y] = tl;
    Stage.addQueue.push(Maker.tile(tl));
  }, 
  
  addObject : function(tl) {
    tl.id = 'tl_'+tl.type+objCtr++;
    if(Maker[tl.type])
      Stage.addQueue.push(Maker[tl.type](tl));
    else
      Stage.addQueue.push(Maker.object(tl));
  }, 
  
  orbitObjects : [],
  addSkyObject : function(so) {
    var result = false;
    so.id = 'so_'+so.type+Stage.orbitObjects.length;
    if(!so.yoffset) so.yoffset = 0;
    Stage.objects.sky.append(Maker.skyObject(so));
    result = $('#'+so.id);
    result.data = so;
    Stage.orbitObjects.push(result);
    return(result);
  },
  addSky : function() {
    Stage.root.append(Maker.sky());
    Stage.objects.sky = $('#sky');
    Stage.addSkyObject({ type : 'moon', time : 150 });
    for(var sc = 0; sc < 20; sc++) 
      Stage.addSkyObject({ 
        caption : '*', opacity : Math.random(), 
        type : 'star', time : Math.PI*200*Math.random(), 
        yoffset : -30+200*Math.random() });
  },
  
  buildDisplay : function() {
    Stage.addSky();
    var ctr = 0;
    for(var xc = 0; xc < Config.dim.x; xc++) {
      for(var yc = 0; yc < Config.dim.y; yc++) {
        var ttype = 'beneath';
        if(yc == 0) ttype = 'surface';
        Stage.addTile({ caption : ctr++, x : xc, y : yc, type : ttype });
      }
    }  
    Stage.addObject({ type : 'hut', x : 8, y : -0.6 });    
    Stage.update();    
  },
  
  updateOrbit : function(o, offset) {
    o.data.time += 5; 
    if(o.data.time > 200*Math.PI) {
      o.data.time = 0;
      o.removeClass('smoothPos');
      setTimeout(function() {
        o.css('left', '-200px').css('top', '200px');
        o.addClass('smoothPos');
        }, 500);
    }
    else {
      o.
        css('left', -400+4*o.data.time+'px').
        css('top', 
          (o.data.yoffset)+
          (Config.skyHeight+1)*Config.tileSize+
          Config.skyHeight*Config.tileSize*Math.sin((o.data.time/200)+3.2)+'px');
    }
  },
  
  tickHandler : function() {
    UI.updateToolbar();
    UI.updateStatusbar();
    if(!GameState.env.gameRunning) return;
    GameState.tick();
    $.each(Stage.orbitObjects, function(idx, so) {
      Stage.updateOrbit(so);
    });
  },
  
}