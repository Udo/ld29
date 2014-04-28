UI = {

  getTileHit : function(mouseX, mouseY) {
    return({ 
      sky : Config.skyHeight >= Math.round(mouseY / Config.tileSize)-1,
      x : Math.round(mouseX / Config.tileSize)-1, 
      y : Math.round(mouseY / Config.tileSize)-1 });
  },
  
  stageClick : function(e) {
    var tileHit = UI.getTileHit(e.clientX, e.clientY);    
    if(Rules.mobsAt(tileHit.x, tileHit.y).length != 0) {
      Stage.banner("Something's in the way!");
      return;
    }
    if(GameState.lord.energy < UI.toolbarActions[UI.clickMode].energy) {
      Stage.banner("Not enough slime energy!");
      return;
    }
    if(UI.toolbarActions[UI.clickMode].click(tileHit)) {
        GameState.lord.energy -= UI.toolbarActions[UI.clickMode].energy;
        Stage.flashText(tileHit.x, tileHit.y, '-'+UI.toolbarActions[UI.clickMode].energy);
    }
  },
  
  toolbarActions : {
    dig : {
      caption : 'dig',
      energy : 10,
      click : function(tl) {
        if(tl.y > Config.skyHeight && !GameState.map[tl.x][tl.y-Config.skyHeight].excavated) { 
          Map.excavate(tl.x, tl.y-Config.skyHeight); return(true); }
        },
      },
    shroom : {
      caption : 'shroom',
      energy : 30,
      click : function(tl) {
        if(tl.y > Config.skyHeight) {
          Stage.banner('Shrooms can only be placed on the surface.');
        } else {
          Rules.createMob({ type : 'shroom', pos : tl, class : 'pulse' });
          return(true);          
        }
        },
      },
    decoy : {
      caption : 'decoy',
      energy : 20,
      click : function(tl) {
        if(tl.y > Config.skyHeight) {
          Stage.banner('Decoys can only be placed on the surface.');
        } else {
          Rules.createMob({ type : 'decoy', pos : tl });
          return(true);          
        }
        },
      },
    },
  
  buildToolbar : function() {
    var tbe = [];
    
    $.each(UI.toolbarActions, function(idx, item) {
      tbe.push('<div id="tbi_'+idx+'" onclick="UI.toolbarClick(\''+idx+'\');">'+item.caption+'<br/>'+item.energy+'</div>');
      });
    
    $('#toolbar').html(tbe.join(''));
    $('#tbi_dig').addClass('selected');
  },
  
  clickMode : 'dig',
  toolbarClick : function(idx) {
    if($('#tbi_'+idx).hasClass('active')) {
      UI.clickMode = idx;
      $('#toolbar > div').removeClass('selected');
      $('#tbi_'+idx).addClass('selected');
    }
  },
  
  updateToolbar : function() {
    $.each(UI.toolbarActions, function(idx, item) {
      $('#tbi_'+idx).toggleClass('active', GameState.lord.energy >= item.energy);
    });
  },
  
  updateStatusbar : function() {
    $('#mbEnergy').html(Math.floor(GameState.lord.energy));
    $('#mbHealth').html(Math.floor(GameState.lord.health));
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