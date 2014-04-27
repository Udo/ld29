StoryBoard = {
  
  beginning : {
    
    init : function() {
      Map.excavate({ x : 9, y : 3 });
      Stage.placeAsset({ x : 8.9, y : 5.9, width : 80, img : 'slimelord.png' });
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