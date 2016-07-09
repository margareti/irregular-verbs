(function(){
  var verbs = {
  	'come': ['come', 'came', 'come'],
  	'sell': ['sell', 'sold', 'sold'],
  	'sit': ['sit', 'sat', 'sat'],
  	'wear': ['wear', 'wore', 'worn'],
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
    	forms[i].innerText = verbs[el][i];
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