(function(){
var raw = ["be","become","begin","bet","bite","bleed","blow","break","bring","build","burn","buy",
	           "can","catch","choose","come","cost","cut",
	           "deal","do","draw","dream","drink","drive",
	           "eat",
	           "fall","feel","fight","find","fly","forget","forgive","freeze",
	           "get","give","go","grow",
	           "hang","have","hear","hide","hit","hold","hurt","keep",
	           "know",
	           "lay","lead","leave","lend","let","light","lose",
	           "make","mean","meet",
	           "pay","put",
	           "read","ride","ring","rise","run",

	           "say","see","sell","send","set","shake","shine","shoot",
	           "show","shut","sing","sink","sit","sleep", "speak",
	           ,"spend","spill","split","spoil","spread","stand",
	           "steal","stick","swim",

	           "take","teach","tell","think","throw",
	           "understand","upset","wake","wear","win","write"]

  var verbs = {
  	'be': ['was/were', 'been'],
  	'become': ['became', 'become'],
  	'begin': ['began', 'begun'],
  	'bet': [ 'bet'],
  	'bite': ['bit', 'bitten'],
    'bleed': ['bled'],
    'blow': ['blew', 'blown'],
    'break': ['broke', 'broken'],
    'bring': ['brought'],
    'build': ['built'],
    'burn': ['burnt'],
    'buy': ['bought'],

    'can': ['could'],
    'catch': ['caught'],
    'choose': ['chose', 'chosen'],
  	'come': ['came', 'come'],
  	'cost': ['cost'],
  	'cut': ['cut'],

  	'deal': ['dealt'],
  	'do': ['did', 'done'],
  	'draw': ['drew', 'drawn'],
  	'dream': ['dreamt', 'dreamt'],
    'drink': ['drank', 'drunk'],
    'drive': ['drove', 'driven'],

    'eat': ['ate', 'eaten'],
    'fall': ['fell', 'fallen'],
    'feel': ['felt'],
    'fight': ['fought'],
    'find': ['found'],
    'fly': ['flew', 'flown'],
    'forget': ['forgot', 'forgotten'],
    'forgive': ['forgave', 'forgiven'],
    'freeze': ['froze', 'frozen'],

    'get': ['got', 'gotten'],
    'give': ['gave', 'given'],
    'go': ['went', 'gone'],
    'grow': ['grew', 'grown'],

    'hang': ['hung'],
    'have': ['had'],
    'hear': ['heard'],
    'hide': ['hid', 'hidden'],
    'hit': ['hit'],
    'hold': ['held'],
    'hurt': ['hurt'],
    'keep': ['kept'],
    'know': ['knew', 'known'],

    'lay': ['laid'],
    'lead': ['led'],
    'leave': ['left'],
    'lend': ['lent'],
    'let': ['let'],
    'light': ['lit'],
    'lose': ['lost'],
    'make': ['made'],
    'mean': ['meant'],
    'meet': ['met'],
    'pay': ['paid'],
    'put': ['put'],
    'read': ['read'],
    'ride': ['rode', 'ridden'],
    'ring': ['rang', 'rung'],
    'rise': ['rose', 'risen'],
    'run': ['ran', 'run'],

    'say': ['said'],
    'see': ['saw', 'seen'],
  	'sell': ['sold', 'sold'],
  	'send': ['sent'],
  	'set': ['set'],
  	'shake': ['shook', 'shaken'],
  	'shine': ['shone'],
  	'shoot': ['shot'],
  	'show': ['showed', 'shown'],
  	'shut': ['shut'],
  	'sing': ['sang'],
  	'sink': ['sank', 'sunk'],
  	'sit': ['sat'],
    'sleep': ['slept'],
    'speak': ['spoke', 'spoken'],
    'spend': ['spent'],
    'spill': ['spilled', 'spilt'],
    'spoil': ['spoilt'],
    'spread': ['spread'],
    'stand': ['stood'],
    'steal': ['stole', 'stolen'],
    'stick': ['stuck'],
    'swim': ['swam', 'swum'],
    'take': ['took', 'taken'],
    'teach': ['taught'],
    'tell': ['told'],
    'think': ['thought'],
    'throw': ['threw'],
    'understand': ['understood'],
    'upset': ['upset'],
    'wake': ['woke', 'woken'],
  	'wear': ['wore', 'worn'],
  	'win': ['won'],
  	'write': ['wrote', 'written']
  }
  var submitBtn = document.getElementById('chooseVerbs');
  submitBtn.addEventListener('click', populate);

  function getChecked() {
  	var checked = [];
  	var checkboxes = document.getElementsByTagName('input');
  	var i = 0;

  	for (; i < checkboxes.length; i++) {
  		if (checkboxes[i].checked) {
  			checked.push(checkboxes[i].id);
  		}
  	}
  	return checked;
  }

  function populate(ev) {
  	var words = getChecked();
  	var selection = document.querySelector('.choose-verbs');
  	var nextBtn = document.getElementById('next');
  	var idx = 0;
  	

  	ev.preventDefault();
  	selection.classList.add('hide');
  	if (words.length) {
      idx++;
      study(words[0]);
      getNext(nextBtn, words, idx, study);
  	}
  	return false;
  }

	function getNext(elem, arr, index, func) {
    elem.addEventListener('click', function(e) {
    	console.log(index)
      if (index < arr.length) {
        console.log(arr.length);
      	if (index + 1 === arr.length) {
      		document.getElementsByClassName('btn-wrap')[0].removeChild(elem);
      	}
        func(arr[index]);
        index++;

      } 
    }, false);
	}

  function study(el) {
    var headline = document.querySelector('.study-verb');
    var forms = document.getElementsByClassName('study-form');
    var i = 0;
    var study = document.querySelector('.study-content');
    var play = document.getElementById('play');
    var audio = document.getElementsByTagName('audio');
    var btnWrap = document.getElementsByClassName('btn-wrap')[0];

    headline.innerText = el;

    for (; i < 3; i++) {
    	if (i === 0) {
    		forms[i].innerText = el;
    	} else {
    		if (verbs[el].length === i) {
    			forms[i].innerText = verbs[el][i - 1];
    		} else {
    			forms[i].innerText = verbs[el][i];
    		}
    		
    	}
    	
    }
    study.removeChild(play);
    
    var sc = document.createElement('script');
    var scSrc = 'https://elt.oup.com/elt/students/genericwordlist/irregularverbs/audio/' + el + '.mp3';
    var au = new Audio(scSrc);
    au.id = 'play';
    au.controls = true;

    scSrc.type = 'audio/mp3';

    study.appendChild(au);
    

  }
})();