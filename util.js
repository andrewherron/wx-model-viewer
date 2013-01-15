// All code copyright Andrew Herron andrew.s.herron@gmail.com

function toggleHelp() {
	$('keyboard-layout').toggleClass('show');
}

function checkFor(sel_ele, CUR, dir) {
	var sel_opt = {};
	var ret_val = false;
	$each($$(sel_ele.getElementsByTagName('option')), function(o) {
		if (o.value == CUR) {
			sel_opt = $(o);
		};
	});
	switch(dir) {
		case 'next':
			if ($defined(sel_opt.getNext())) {
				ret_val = sel_opt.getNext();
			} else {
				ret_val = false;
			}
			break;
		case 'prev':
			if ($defined(sel_opt.getPrevious())) {
				ret_val = sel_opt.getPrevious();
			} else {
				ret_val = false;
			}
			break;
	}
	return ret_val;
}

function findHourHash(hour) {
	hash = {'max':0, 'div':0}
	var i = 0;
	while (i < MODELS[CUR_MODEL].hours.length) {
		hash = MODELS[CUR_MODEL].hours[i];
		if (hour > hash.max) {
			i++;
		} else {
			i = MODELS[CUR_MODEL].hours.length;
		}
	}
	return hash;	
}

function checkHourRange(hour) {
	return (hour <= findHourHash(hour).max);
}

function getFirstOption(id) {
	var sel_ele = $(id);
	var sel_opt = sel_ele.getElementsByTagName('option')[0];
	return sel_opt.value;
}


function fixHour(num) {
	return fixNum(num, 3);
}

function fixRun(num) {
	return fixNum(num, 2);
}

function fixNum(num, len) {
	var numString = num.toString();
	while (numString.length < len) {
		numString = '0' + numString;
	}
	return numString;
}

function setSelectValue(sel_ele, val) {
	$each($$(sel_ele.getElementsByTagName('option')), function(o,i) {
		o.selected = false;
		if (o.value == val) {
			o.selected = true;
		}
	});
}

function getUrlVars() {
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

  for(var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
 
  return vars;
}

function renderURL() {
	var cm = MODELS[CUR_MODEL];
	
	var rendered = cm.url_template.replace(/%\w/g, replaceStr);
	
	return rendered;
}

function replaceStr(s) {
	switch(s) {
		case '%M':
			return CUR_MODEL;
			break;
		case '%t':
			return CUR_TYPE;
			break;
		case '%r':
			return CUR_RUN;
			break;
		case '%h':
			return CUR_HOUR;
			break;
		case '%m':
			return CUR_MAP;
			break;
		case '%p':
			return fixNum(CUR_HOUR, 2);
			break;
		case '%P':
			return fixNum(CUR_HOUR, 3);
			break;
	}
}