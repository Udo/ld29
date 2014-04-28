UI = {
  
  menuOptions : { 
    survey : { 
      title : 'SURVEY', shortcut : 'S', enabled : true, 
      action : function() { UI.page('survey'); } },
    },
    
  updateMenu : function() {
    var stats = [];
    stats.push('Energy: '+Game.data.energy);
    stats.push('Machinery: '+Game.data.energy);
    stats.push('Ore: '+Game.data.energy);
    $('#stats').text(stats.join(' | '));
    var menu = [];
    $.each(UI.menuOptions, function(idx, mo) { 
      if(mo.enabled)
        menu.push(mo.title.replace(mo.shortcut, '<span class="shortcut">'+mo.shortcut+'</span>')); });
    $('#menuitems').html(menu.join(' | '));
  },
  
  page : function(pname) {
    UI.keyHook = false;
    $('#page').load('screens/'+pname+'.html', function() {
      UI.cursor();
    });
  },
  
  cursor : function() {
    //$('#cursor').remove();
    $('img').replaceWith('<img id="cursor" src="img/cursor.gif"/>');
  },
  
  consoleText : function(element, text) {
    var textCounter = 0;
    var itv = setInterval(function() {
      if(textCounter > text.length) {
        clearInterval(itv);
        return;
      }
      var chr = text.substr(textCounter, 1);
      if(chr == '&') { textCounter += 1; chr = '<span class="shortcut">'+text.substr(textCounter, 1)+'</span>'; } 
      element.append(chr.replace('$', '<br/>'));    
      textCounter++;
      }, 13);
  },
  
  keyHook : false,
  keyHandler : function(e) {
    if(UI.keyHook && UI.keyHook(e)) return;
    $.each(UI.menuOptions, function(idx, mo) {
      if(mo.enabled && mo.shortcut.charCodeAt(0) == e.which && mo.action)
        mo.action();
      });
  },
  
}