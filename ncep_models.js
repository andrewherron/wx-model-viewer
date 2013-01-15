// All code copyright 2009, Andrew Herron andrew.s.herron@gmail.com

$(document).addEvent('domready', function() {
	$(document).addEvent('keyup', doKeyAction);
	$('help').addEvent('click', toggleHelp);
	$$('select').addEvent('change', selectChange);
	$('keyboard-layout').makeDraggable();
	$('close').addEvent('click', toggleHelp);
	loadSelects();
	checkForLink();
	getImage();
});

function selectChange(e) {
	var sel_ele = e.target;
	switch (sel_ele.id) {
		case 'type-select':
			selectType(sel_ele.value);
			break;
		case 'model-select':
			selectModel(sel_ele.value);
			break;
		case 'run-select':
			selectRun(sel_ele.value);
			break;
		case 'hour-select':
			selectHour(sel_ele.value);
			break;
		case 'map-select':
			selectMap(sel_ele.value);
			break;
	}
	getImage();
}


function loadSelects() {
	loadModelSelect();
	selectModel(CUR_MODEL);
}

function loadTypeSelect() {
	var sel_ele = $('type-select');
	sel_ele.empty();
	for(var t in MODELS[CUR_MODEL].types) {
		var sel_opt = new Element(
			'option', {
				'value': t,
				'html': MODELS[CUR_MODEL].types[t].name
			}
		);
		sel_opt.inject(sel_ele);
	}
}

function loadModelSelect() {
	var sel_ele = $('model-select');
	sel_ele.empty();
	for(var m in MODELS) {
		var sel_opt = new Element(
			'option', {
				'value': m,
				'html': MODELS[m].name
			}
		);
		sel_opt.inject(sel_ele);
	}
}

function loadRunSelect() {
	var sel_ele = $('run-select');
	sel_ele.empty();
	for(var r in MODELS[CUR_MODEL].runs) {
		var sel_opt = new Element(
			'option', {
				'value': r,
				'html': MODELS[CUR_MODEL].runs[r].name
			}
		);
		sel_opt.inject(sel_ele);
	}
}

function loadHourSelect() {
	var sel_ele = $('hour-select');
	sel_ele.empty();
	var hour_start = 0;
	$each(MODELS[CUR_MODEL].hours, function(hh) {
		hour_start = (hour_start > 0) ? hour_start + hh.div : hour_start;
		for(var h = hour_start; h <= hh.max; h += hh.div) {
			var sel_opt = new Element(
				'option', {
					'value': h,
					'html': fixHour(h)
				}
			);
			sel_opt.inject(sel_ele);
		}
		hour_start = hh.max;
	});
}

function loadMapSelect() {
	var sel_ele = $('map-select');
	sel_ele.empty();
	for(var m in MODELS[CUR_MODEL].maps) {
		var sel_opt = new Element(
			'option', {
				'value': m,
				'html': MODELS[CUR_MODEL].maps[m].name
			}
		);
		sel_opt.inject(sel_ele);
	};
}

function selectModel(model) {
  
  if (MODELS[model] == undefined) return;
  
	CUR_MODEL = model;
	setSelectValue($('model-select'), CUR_MODEL);
	
	loadTypeSelect();
	if (MODELS[CUR_MODEL].types[CUR_TYPE] == undefined) {
		selectType(getFirstOption('type-select'));
	} else {
		selectType(CUR_TYPE)
	}
	
	loadRunSelect();
	if (MODELS[CUR_MODEL].runs[CUR_RUN] == undefined) {
		selectRun(getFirstOption('run-select'));
	} else {
		selectRun(CUR_RUN);
	}
	
	loadMapSelect();
	if (MODELS[CUR_MODEL].maps[CUR_MAP] == undefined) {
		selectMap(getFirstOption('map-select'));
	} else {
		selectMap(CUR_MAP);
	}
	
	loadHourSelect();
	if (checkHourRange(CUR_HOUR)) {
		selectHour(CUR_HOUR);
	} else {
		selectHour(findHourHash(CUR_HOUR).max);
	}
	//getImage();
}

function selectHour(hour) {
	CUR_HOUR = hour;
	setSelectValue($('hour-select'), CUR_HOUR);
	//getImage();
}

function selectRun(run) {
	CUR_RUN = run;
	setSelectValue($('run-select'), CUR_RUN);
	//getImage();
}

function selectMap(map) {
	CUR_MAP = map;
	setSelectValue($('map-select'), CUR_MAP);
	//getImage();
}

function selectType(type) {
	CUR_TYPE = type;
	setSelectValue($('type-select'), CUR_TYPE);
	//getImage();
}

function checkForLink() {
  if (window.location.href.indexOf('?') > -1) {
    var hash = getUrlVars();
    if (hash['m']) selectModel(hash['m']);
    if (hash['h']) selectHour(hash['h'].toInt());
    if (hash['r']) selectRun(hash['r']);
    if (hash['ma']) selectMap(hash['ma']);
    if (hash['t']) selectType(hash['t']);
  }
}

function getImage() {
	var image_tag = document.getElementById('model-image');
	var model = MODELS[CUR_MODEL];
	var image_url = [model.base_url,fixRun(CUR_RUN),'/images/',CUR_MODEL,'_',CUR_MAP,'_',fixHour(CUR_HOUR),CUR_TYPE,'.gif?',S_EPOCH].join('');
	image_url = renderURL();
	image_tag.src = image_url;
	
	var image_link = $('link');
	var image_url = ['?m=',CUR_MODEL,'&h=',CUR_HOUR,'&r=',CUR_RUN,'&ma=',CUR_MAP,'&t=',CUR_TYPE].join('');
	image_link.setAttribute('href', image_url);
}

function doKeyAction(event) {
	var error = '';
	switch(event.key) {
		case 'n':
			error = selectPrevModel();
			break;
		case 'm':
			error = selectNextModel();
			break;
		case 'j':
			error = selectPrevHour();
			break;
		case 'l':
			error = selectNextHour();
			break;
		case 'y':
			error = selectPrevType();
			break;
		case 'h':
			error = selectNextType();
			break;
		case 'i':
			error = selectPrevMap();
			break;
		case 'k':
			error = selectNextMap();
			break;
		case 'u':
			error = selectPrevRun(event.shift);
			break;
		case 'o':
			error = selectNextRun(event.shift);
			break;
	}
	if (error) {
		alert(error);
	} else {
		getImage();
	}
}

function selectPrevRun(shift) {
	var prevRun = checkFor($('run-select'), CUR_RUN, 'prev');
	if (prevRun) {
		selectRun(prevRun.value);
		if (shift) selectNextHour();
		return false;
	} else {
		return 'Already at first run';
	}
}

function selectNextRun(shift) {
	var nextRun = checkFor($('run-select'), CUR_RUN, 'next');
	if (nextRun) {
		selectRun(nextRun.value);
		if (shift) selectPrevHour();
		return false;
	} else {
		return 'Already at last run';
	}
}

function selectPrevMap() {
	var prevMap = checkFor($('map-select'), CUR_MAP, 'prev');
	if (prevMap) {
		selectMap(prevMap.value);
		return false;
	} else {
		return 'Already at first map';
	}
}

function selectNextMap() {
	var nextMap = checkFor($('map-select'), CUR_MAP, 'next');
	if (nextMap) {
		selectMap(nextMap.value);
		return false;
	} else {
		return 'Already at last map';
	}
}

function selectPrevModel() {
	var prevModel = checkFor($('model-select'), CUR_MODEL, 'prev');
	if (prevModel) {
		selectModel(prevModel.value);
		return false;
	} else {
		return 'Already at first model';
	}
}

function selectNextModel() {
	var nextModel = checkFor($('model-select'), CUR_MODEL, 'next');
	if (nextModel) {
		selectModel(nextModel.value);
		return false;
	} else {
		return 'Already at last model'
	}
}

function selectPrevType() {
	var prevType = checkFor($('type-select'), CUR_TYPE, 'prev');
	if (prevType) {
		selectType(prevType.value);
		return false;
	} else {
		return 'Already at first type'
	}
}

function selectNextType() {
	var nextType = checkFor($('type-select'), CUR_TYPE, 'next');
	if (nextType) {
		selectType(nextType.value);
		return false;
	} else {
		return 'Already at last type'
	}
}

function selectPrevHour() {
	var prevHour = checkFor($('hour-select'), CUR_HOUR, 'prev');
	if (prevHour) {
		selectHour(prevHour.value);
		return false;
	} else {
		return 'Can not go below zero hour'
	}
}

function selectNextHour() {
	var nextHour = checkFor($('hour-select'), CUR_HOUR, 'next');
	if (nextHour) {
		selectHour(nextHour.value);
		return false;
	} else {
		return 'Hour out of range'
	}
}
