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
  	'sing': ['sang', 'sung'],
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
  var toggleFold = document.getElementsByClassName('toggle-fold');
  var practiceBtn = document.getElementById('practiceVerbs');
  fold(toggleFold);
  submitBtn.addEventListener('click', populate);
  practiceBtn.addEventListener('click', practice);

  function updateCounter(num, total, el) {
    el.innerText = num + '/' + total;
  }

  function practice(ev) {
    var words = getChecked();
    var selection = document.querySelector('.choose-verbs');
    var nextBtn = document.getElementById('next');
    var idx = 0;
    var total = words.length;
    var numCorrect = 0;
    var studySection = document.querySelector('.study');
    var correctCounter = document.querySelector('.full-height-block__counter');
    correctCounter.classList.add('active');

    ev.preventDefault();

    updateCounter(numCorrect, total, correctCounter);
    selection.classList.add('hide');
    studySection.classList.remove('hide');
    if (words.length) {
      idx++;
      study(words[0]);
      console.log("input ", words[0])
      randomize(words[0], numCorrect, total, correctCounter);
      getNextPractice(nextBtn, words, idx, study, randomize, numCorrect, total, correctCounter);
    }
    return false;
  }

  

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
  	var studySection = document.querySelector('.study');

  	ev.preventDefault();
  	selection.classList.add('hide');
  	studySection.classList.remove('hide');
  	if (words.length) {
      idx++;
      study(words[0]);
      getNext(nextBtn, words, idx, study);
  	}
  	return false;
  }


	function getNext(elem, arr, index, func) {
    elem.addEventListener('click', function(e) {
    	e.preventDefault();
    	var nxt = document.getElementById('next');
      if (index < arr.length) {
        console.log(arr.length);
      	if (index + 1 === arr.length) {
      		nxt.innerText = 'Back';
          nxt.addEventListener('click', function(){window.location = 'http://localhost:3000/';})
      	}
        func(arr[index]);
        index++;
      } 
    }, false);
	}

  function getNextPractice(elem, arr, index, func1, func2, numCorrect, total, correctCounter) {
    elem.addEventListener('click', function(e) {
      e.preventDefault();
      var nxt = document.getElementById('next');
      if (index < arr.length) {
        console.log(arr.length);
        if (index + 1 === arr.length) {
          nxt.innerText = 'Back';
          nxt.addEventListener('click', function(){window.location = 'http://localhost:3000/';})
        }
        func1(arr[index]);
        func2(arr[index], numCorrect, total, correctCounter);
        index++;
      } 
    }, false);
  }

	function fold(arr) {
		var i = 0;
		var j;
		var elem;
		var titles = document.getElementsByClassName('choose-verbs__section');
		var parentClass;
		for (; i < arr.length; i++) {
      elem = arr[i];
      elem.addEventListener('click', function() {
        parentClass = this.parentElement.classList;
        if (parentClass.contains('fold')) {
        	for (j = 0; j < titles.length; j++) {

          	titles[j].classList.add('fold');
          	console.log(titles[j].classList)
          }
        	parentClass.remove('fold');
        } else {
        	parentClass.add('fold');
        }
      })
		}
	}
  function checkInput(elem, arr, index, numCorrect, total, counterEl) {
    var input;
    var isCorrect = false;
    console.log(counterEl);
    console.log(numCorrect);

    elem.addEventListener('keydown', function(e) {
      if (!elem.classList.contains('active')) {
        if (e.keyCode === 13) {
          input = this.value;
          if (verbs[arr].length === 1) {
            isCorrect = input === verbs[arr][0];
          } else {
            isCorrect = input === verbs[arr][index];
          }
          
          if (isCorrect) {
            this.classList.add('active');
            numCorrect+= 1;
            updateCounter(numCorrect, total, counterEl);
            console.log("congrats, correct");
          } else {
            console.log("incorrect");
          }
        }
      } else {
        elem.classList.remove('active');
      }
      
    });
  }

  function randomize(verb, numCorrect, total, counterEl) {
    var index = Math.floor(Math.random() * 2);
    var forms = document.getElementsByClassName('full-height-block__list-item');
    var input = document.createElement('input');
    input.type = 'text';
    input.focus = true;
    input.classList.add('full-height-block__input');
    forms[index + 1].innerText = '';
    forms[index + 1].appendChild(input);
    checkInput(document.querySelector('.full-height-block__input'), verb, index, numCorrect, total, counterEl);
  }

  function study(el) {
    var headline = document.querySelector('.full-height-block__verb');
    var forms = document.getElementsByClassName('full-height-block__list-item');
    var i = 0;
    var study = document.querySelector('.full-height-block__content');
    var play = document.getElementById('play');
    var audio = document.getElementsByTagName('audio');
    var btnWrap = document.getElementsByClassName('btn-wrap')[0];

    headline.innerText = el;

    for (; i < 3; i++) {
    	if (i === 0) {
    		forms[i].innerText = el;
    	} else {
    		console.log(verbs[el])
    		if (verbs[el].length === 1) {
    			forms[i].innerText = verbs[el][0];
    		} else {
    			forms[i].innerText = verbs[el][i - 1];
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


