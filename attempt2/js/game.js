Game = {
  
  page : false,
  data : false,
  
  init : function() {
    Game.page = $('#page');
    Game.data = {
      energy : 10,
      ore : 0,
      machines : 10,
      contamination : 10,
      potentialSites : [],
      digSites : [],
      };
    Game.tick();
    setInterval(Game.tick, 1000);
    UI.page('start');
    $(document).on('keydown', UI.keyHandler);
  },
  
  tick : function() {
    UI.updateMenu();
  },
  
}
