StoryBoard = {
  
  beginning : {
    
    init : function() {
      //Map.excavate({ x : 9, y : 3 });
      Stage.placeAsset({ x : 8.9, y : 5.9, width : 85, img : 'slimelord.png' });
      Stage.placeAsset({ x : 9, y : 6, width : 64, img : 'slimelord-heart.png', class : 'pulse' });
      GameState.lord.pos = { x : 9, y : 3+Config.skyHeight };
      Rules.createMob({ type : 'saucer', pos : { x : 5, y : 0}, width : 128, class : 'wobble' });
    },
    
  },
  
}

Level = {
  
  start : function(lvl) {
    Level.current = StoryBoard[lvl];
    Level.current.init();
    UI.buildToolbar();
  },
  
}