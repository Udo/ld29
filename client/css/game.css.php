<?

  header('content-type: text/css');
  
  $tileSize = 64;
  
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
  height: <?= $tileSize*10 ?>px;
  border-bottom: 2px solid rgba(<?= $rgbBaseTextRaw ?>, 0.5);
  position: relative;
}

#stage, #toolbar {
  overflow: hidden;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.tile {
  width: <?= $tileSize ?>px;
  height: <?= $tileSize ?>px;
  background: rgba(<?= $rgbBaseTextRaw ?>, 0.1);
  position: absolute;
  left: 0; top: 0;
  border-left: 1px solid rgba(<?= $rgbBaseTextRaw ?>, 0.1);
  border-top: 1px solid rgba(<?= $rgbBaseTextRaw ?>, 0.1);
}

.stageObject {
  position: absolute;
  left: 0; top: 0;
  color: <?= $rgbBaseText ?>;
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
  width: <?= $tileSize ?>px; height: <?= $tileSize ?>px;
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

.tileInner {
  position: absolute;
  top: 0; left: 0;
  width: <?= $tileSize ?>px; height: <?= $tileSize ?>px;
}

.tileExcavated {
  background: url('../img/cave.png');
  opacity: 0.6;
}

.te10110 { background-position: <?= -$tileSize*0 ?>px <?= -$tileSize*0 ?>px; }
.te10111 { background-position: <?= -$tileSize*1 ?>px <?= -$tileSize*0 ?>px; }
.te10011 { background-position: <?= -$tileSize*2 ?>px <?= -$tileSize*0 ?>px; }
.te10000 { background-position: <?= -$tileSize*3 ?>px <?= -$tileSize*0 ?>px; }

.te11110 { background-position: <?= -$tileSize*0 ?>px <?= -$tileSize*1 ?>px; }
.te11111 { background-position: <?= -$tileSize*1 ?>px <?= -$tileSize*1 ?>px; }
.te11011 { background-position: <?= -$tileSize*2 ?>px <?= -$tileSize*1 ?>px; }
.te10010 { background-position: <?= -$tileSize*3 ?>px <?= -$tileSize*1 ?>px; }

.te11100 { background-position: <?= -$tileSize*0 ?>px <?= -$tileSize*2 ?>px; }
.te11101 { background-position: <?= -$tileSize*1 ?>px <?= -$tileSize*2 ?>px; }
.te11001 { background-position: <?= -$tileSize*2 ?>px <?= -$tileSize*2 ?>px; }
.te11010 { background-position: <?= -$tileSize*3 ?>px <?= -$tileSize*2 ?>px; }

.te10000_2 { background-position: <?= -$tileSize*0 ?>px <?= -$tileSize*3 ?>px; }
.te10100 { background-position: <?= -$tileSize*1 ?>px <?= -$tileSize*3 ?>px; }
.te10101 { background-position: <?= -$tileSize*2 ?>px <?= -$tileSize*3 ?>px; }
/* ----- */
.te10101_2 { background-position: <?= -$tileSize*4 ?>px <?= -$tileSize*3 ?>px; }
.te10001 { background-position: <?= -$tileSize*5 ?>px <?= -$tileSize*3 ?>px; }

.te10000_3 { background-position: <?= -$tileSize*0 ?>px <?= -$tileSize*4 ?>px; }
.te10000_4 { background-position: <?= -$tileSize*1 ?>px <?= -$tileSize*4 ?>px; }
.te10000_5 { background-position: <?= -$tileSize*2 ?>px <?= -$tileSize*4 ?>px; }
.te11010_2 { background-position: <?= -$tileSize*3 ?>px <?= -$tileSize*4 ?>px; }

.te11000 { background-position: <?= -$tileSize*3 ?>px <?= -$tileSize*5 ?>px; }

#toolbar > div {
  display: inline-block;
  width: 64px;
  height: 64px;
  padding: 16px;
  border-radius: 8px;
  border: 3px solid rgba(<?= $rgbBaseTextRaw ?>, 0.15);
  color: rgba(<?= $rgbBaseTextRaw ?>, 0.15);
  margin-right: 8px;
  margin-top: 8px;
  transition: border-color 1s, color 1s;
  text-align: center;
}

#toolbar > div.active {
  border: 3px solid rgba(<?= $rgbBaseTextRaw ?>, 0.5);
  color: rgba(<?= $rgbBaseTextRaw ?>, 0.5);
  cursor: pointer;
}

#toolbar > div.active:hover {
  border: 3px solid rgba(<?= $rgbBaseTextRaw ?>, 1);
  color: rgba(<?= $rgbBaseTextRaw ?>, 1);
}

#toolbar > div.selected {
  border: 3px solid #339955;
  color: #339955;
  text-shadow: 0 0 8px rgba(100, 255, 150, 0.5);
}

.numIndicator {
  display: inline-block;
  width: 64px;
}

.bad {
  color: #f95;
}

.so_flash {
  width: <?= $tileSize ?>px;
  text-align: center;
  margin-top: <?= $tileSize*0.3 ?>px;
}

#banner {
  position: absolute;
  left: 0;
  right: 0;
  top: 64px;
  text-align: center;
  color: #9df;
  text-shadow: 0 0 8px rgba(200, 255, 255, 0.5);
}

<?
$pulse = '@-webkit-keyframes pulse_animation {
	0% { -webkit-transform: scale(1); }
	50% { -webkit-transform: scale(0.9); }
	100% { -webkit-transform: scale(1); }
}

.pulse {
	-webkit-animation-name: pulse_animation;
	-webkit-animation-duration: 5000ms;
	-webkit-transform-origin:70% 70%;
	-webkit-animation-iteration-count: infinite;
	-webkit-animation-timing-function: linear;
}';

print($pulse);
print(str_replace('-webkit-', '-moz-', $pulse));
print(str_replace('-webkit-', '', $pulse));

$vanish = '@-webkit-keyframes vanish_animation {
	0% { -webkit-transform: scale(1); opacity: 1;  }
	100% { -webkit-transform: scale(0.1) translate(0px,-20px); opacity: 0; }
}

.vanish {
	-webkit-animation-name: vanish_animation;
	-webkit-animation-duration: 3000ms;
	-webkit-transform-origin: 50% 0%;
	-webkit-animation-iteration-count: 1;
	-webkit-animation-timing-function: linear;
}';

print($vanish);
print(str_replace('-webkit-', '-moz-', $vanish));
print(str_replace('-webkit-', '', $vanish));

$wobble = '@-webkit-keyframes wobble_animation {
	0% { -webkit-transform: rotate(0deg); }
	25% { -webkit-transform: rotate(5deg); }
	50% { -webkit-transform: rotate(-5deg); }
	75% { -webkit-transform: rotate(3deg); }
}

.wobble {
	-webkit-animation-name: wobble_animation;
	-webkit-animation-duration: 3000ms;
	-webkit-transform-origin: 50% 50%;
	-webkit-animation-iteration-count: infinite;
	-webkit-animation-timing-function: linear;
}';

print($wobble);
print(str_replace('-webkit-', '-moz-', $wobble));
print(str_replace('-webkit-', '', $wobble));

?>
