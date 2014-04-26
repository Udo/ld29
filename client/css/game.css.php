<?

  header('content-type: text/css');
  
  $rgbBaseTextRaw = '255,204,0';
  $rgbBaseText = 'rgba('.$rgbBaseTextRaw.',1)';
  
  function gradient($from, $to) {
    return('background: linear-gradient('.$from.', '.$to.');
      background: -webkit-linear-gradient('.$from.', '.$to.');
      background: -moz-linear-gradient('.$from.', '.$to.');
      background: -o-linear-gradient('.$from.', '.$to.');
      ');
  }

?>

@font-face {
  font-family: titleFont;
  src: url('../assets/feast_of_flesh_bb/FEASFBRG.TTF');
}

@font-face {
  font-family: stdFont;
  src: url('../assets/ghoulish_fright_aoe/Truetype/GhoulFriAOE.ttf');
}

body {
  background: #000;
}

body, div, td, input, textarea, h2, h3, h4 {
  color: <?= $rgbBaseText ?>;
  font-family: stdFont;
  font-size: 20px;
}

h1, .title {
  font-family: titleFont;
  font-size: 40px;
}

.card {
  font-size: 80px;
  width: 640px;
  height: 400px;
  padding: 16px;
  border-radius: 16px;
  color: rgba(22,255,0,1);
  border: 16px solid rgba(<?= $rgbBaseTextRaw ?>,0.5);
  background: rgba(<?= $rgbBaseTextRaw ?>,0.25);
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  text-align: center;
  text-shadow: 0 0 16px rgba(<?= $rgbBaseTextRaw ?>,0.5);
  transition: background 1s, border-color 1s, text-shadow 1s;
  cursor:pointer;
}

.card:hover {
  border: 16px solid rgba(<?= $rgbBaseTextRaw ?>,1);
  background: rgba(<?= $rgbBaseTextRaw ?>,0.5);
  text-shadow: 0 0 16px rgba(0,0,0,0.7);
}

.accent1 {
  color: #ff6700;  
}

.accent2 {
  color: #ffc800;  
}

.divider {
  margin-top: 16px;
  margin-bottom: 16px;
  border: 2px solid rgba(<?= $rgbBaseTextRaw ?>,0.5);
}

.subtitle {
  font-size: 30px;
}

#menuBar {
  padding: 4px;
  padding-left: 8px;
  padding-right: 8px;
  background: rgba(<?= $rgbBaseTextRaw ?>, 0.3);
}

#menuBar, #menuBar * {
  color: rgba(<?= $rgbBaseTextRaw ?>, 1);
  text-shadow: 0 0 8px rgba(255, 255, 220, 0.5);
}

#stage {
  height: 500px;
  border-bottom: 2px solid rgba(<?= $rgbBaseTextRaw ?>, 0.5);
  position: relative;
  overflow: hidden;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.tile {
  width: 64px;
  height: 64px;
  background: rgba(<?= $rgbBaseTextRaw ?>, 0.1);
  position: absolute;
  left: 0; top: 0;
  border-left: 1px solid rgba(<?= $rgbBaseTextRaw ?>, 0.1);
  border-top: 1px solid rgba(<?= $rgbBaseTextRaw ?>, 0.1);
}

.stageObject {
  position: absolute;
  left: 0; top: 0;
}

.tile:hover {
  background: rgba(<?= $rgbBaseTextRaw ?>, 0.2);
}

#sky {
  position: relative;
  left: 0; top: 0; right: 0; 
  height: 100px;
  background: rgba(0,0,90,0.5);
  <?= gradient('#000', '#056') ?>
  overflow: hidden;
}

.skyObject {
  position: absolute;
  left: -100; top: -100;
  width: 64px; height: 64px;
  color: white;
}

.smoothPos {
  transition: left 3s, top 3s;
}

.tile_surface {
  background: url('../img/surface.png');
}

.tile_beneath {
  background: url('../img/beneath.png');
}

.tile {
  overflow: hidden;
  background-repeat: no-repeat;
}





