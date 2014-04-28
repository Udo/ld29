rnd = function(max) {
  return(Math.round(max*Math.random()));
}

chooseRandom = function(ar) {
  return(ar[Math.floor(ar.length * Math.random())]);
}

Config = {
  
  greekLetters : [
    'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda',
    'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigma', 'tau', 'ypsilon', 'phi', 'chi',
    'psi', 'omega', 
    ],
    
  nato : [
    'alfa', 'bravo', 'charlie', 'echo', 'foxtrot', 'golf', 'hotel', 'india', 'kilo', 'lima', 'oscar',
    'romeo', 'sierra', 'tango', 'victor', 'xray', 'zulu',
    ],
  
  species : [
    'hoomans', 'tardigrades', 'xenomorphs', 'amoebas', 'blobulars', 'badgers', 'hogs', 
    'ropers', 'nanites', 'slimeballs', 'funghi', 'zergomorphs', 'fish people', 'potatoes',
    'ones', 'arachnomorphs', 'sharks',
    ],
  
  speciesAttribute : [
    'common', 'hairy', 'scaled', 'armored', 'furry', 'barbed', 'rabid', 'vampiric', 'zombie',
    'radioactive', 'parasitic', 'coated', 'chunky', 'nocturnal', 'lesser',
    'greater', 'psionic',
    ],

  speciesAttribute2 : [
    'were', 'dire', 'ancient', 'green', 'blue', 'yellow', 'slime', 'red', 'revenant',
    'monitor', 'hunter', 'spurter', 'techno', 'laser', 'land', 'ground', 
    ],
  
  
  makeName : function(fromDict) {
    return((
      chooseRandom(fromDict)+'-'+
      chooseRandom(fromDict)+'-'+
      Math.round(Math.random()*100)).toUpperCase());
  },
  
  getOrganism : function(lvl) {
    var o = ({
      species : chooseRandom(Config.speciesAttribute)+' '+
        chooseRandom(Config.speciesAttribute2)+' '+
        chooseRandom(Config.species),
      hostility : rnd(lvl*10),
      toughness : rnd(lvl*10),
      amount : rnd(lvl*10),
      });
    console.log(JSON.stringify(o));
    return(o);
  },
  
  makeNewSite : function() {
    return({
      name : Config.makeName(Config.greekLetters),
      layers : [{
        contamination : Config.getOrganism(1),
        ore : Math.round(Math.random()*10),
        energy : Math.round(Math.random()*10),
        depth : Math.round(Math.random()*10),
        }],
      });
  },
  
}