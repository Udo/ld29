UI = {

  getTileHit : function(mouseX, mouseY) {
    var skyOffset = Config.tileSize*Config.skyHeight;
    if(mouseY > skyOffset) {
      mouseY -= skyOffset;
      return({ 
        x : Math.round(mouseX / Config.tileSize)-1, 
        y : Math.round(mouseY / Config.tileSize)-1 });
    }
  },
  
  stageClick : function(e) {
    var tileHit = UI.getTileHit(e.clientX, e.clientY);    
    if(tileHit) {
        UI.toolbarActions[UI.clickMode].click(tileHit);        
    }
  },
  
  toolbarActions : {
    dig : {
      caption : 'dig',
      energy : 1,
      click : function(tl) {
        if(tl.y > 0) Map.excavate(tl);
        },
      },
    },
  
  buildToolbar : function() {
    var tbe = [];
    
    $.each(UI.toolbarActions, function(idx, item) {
      tbe.push('<div id="tbi_'+idx+'" onclick="UI.toolbarClick(\''+idx+'\');">'+item.caption+'<br/>'+item.energy+'</div>');
      });
    
    $('#toolbar').html(tbe.join(''));
  },
  
  clickMode : 'dig',
  toolbarClick : function(idx) {
    if($('#tbi_'+idx).hasClass('active')) {
      UI.clickMode = idx;
    }
  },
  
  updateToolbar : function() {
    $.each(UI.toolbarActions, function(idx, item) {
      $('#tbi_'+idx).toggleClass('active', GameState.lord.energy >= item.energy);
    });
  },
  
  updateStatusbar : function() {
    $('#mbEnergy').html(GameState.lord.energy);
    $('#mbHealth').html(GameState.lord.health);
  },
  
  lose : function() {
    GameState.env.gameRunning = false;
    GameState.env.gameOver = true;
    alert('You lost!');
  },
  
  win : function() {
    GameState.env.gameRunning = false;
    GameState.env.gameOver = true;
    alert('You won!');
  },
  
}