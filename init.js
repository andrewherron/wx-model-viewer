// All code copyright 2009, Andrew Herron andrew.s.herron@gmail.com

var S_EPOCH = new Date().getTime();

var MODELS = {
	'nam': {
		'hours': [
			{'max': 84, 'div': 6}
		],
		'maps': {
			'200': {'name': '200mb Wind, Ht'},
			'300': {'name': '300mb Wind, Ht'},
			'500': {'name': '500mb Vort, Ht'},
			'700': {'name': '700mb RH, Ht'},
			'850': {'name': '850mb Temp, Ht'},
			'p06': {'name': 'Total Pcpn 06 hrs'},
			'p12': {'name': 'Total Pcpn 12 hrs'},
			'p24': {'name': 'Total Pcpn 24 hrs'},
			'p36': {'name': 'Total Pcpn 36 hrs'},
			'p48': {'name': 'Total Pcpn 48 hrs'},
			'p60': {'name': 'Total Pcpn 60 hrs'},
			'tpp': {'name': 'Total Pcpn of Period'},
			'pcp': {'name': '850mb Temp, MSLP, 6hr Pcpn'},
			'ref': {'name': 'Sim Radar Reflectivity'},
			'sl7': {'name': 'MSLP 850-700mb'},
			'sl8': {'name': 'MSLP 1000-850mb'},
			'slp': {'name': 'MSLP 1000-500mb'}
		},
		'runs': {
			'00': { 'name': '00z' },
			'06': { 'name': '06z' },
			'12': { 'name': '12z' },
			'18': { 'name': '18z' }
		},
		'types': {
			's': { 'name': 'coarse' },
			'm': { 'name': 'medium' },
			'l': { 'name': 'fine' }
		},
		'base_url': 'http://www.nco.ncep.noaa.gov/pmb/nwprod/analysis/namer/nam/',
		'url_template': 'http://www.nco.ncep.noaa.gov/pmb/nwprod/analysis/namer/%M/%r/images/%M_%m_%P%t.gif',
		'name': 'NAM'
	},
	'gfs': {
		'hours': [
			{'max': 180, 'div': 6},
			{'max': 384, 'div': 12}
		],
		'maps': {
			'200': {'name': '200mb Wind, Ht'},
			'250': {'name': '250mb Wind, Ht'},
			'300': {'name': '300mb Wind, Ht'},
			'500': {'name': '500mb Vort, Ht'},
			'700': {'name': '700mb RH, Ht'},
			'850': {'name': '850mb Temp, Ht'},
			'85v': {'name': '850mb Vort'},
			'ten': {'name': '10m Temp, Wind, 6hr Pcpn'},
			'p06': {'name': 'Tot Pcpn 06 hrs'},
			'p12': {'name': 'Tot Pcpn 12 hrs'},
			'p24': {'name': 'Tot Pcpn 24 hrs'},
			'p36': {'name': 'Tot Pcpn 36 hrs'},
			'p48': {'name': 'Tot Pcpn 48 hrs'},
			'p60': {'name': 'Tot Pcpn 60 hrs'},
			'tpp': {'name': 'Tot Pcpn of Period'},
			'pcp': {'name': '850mb Temp, MSLP, 6hr Pcpn'},
			'sl7': {'name': 'MSLP 850-700mb'},
			'sl8': {'name': 'MSLP 1000-850mb'},
			'slp': {'name': 'MSLP 1000-500mb'}
		},
		'runs': {
			'00': { 'name': '00z' },
			'06': { 'name': '06z' },
			'12': { 'name': '12z' },
			'18': { 'name': '18z' }
		},
		'types': {
			's': { 'name': 'coarse' },
			'm': { 'name': 'medium' },
			'l': { 'name': 'fine' }
		},
		'base_url': 'http://www.nco.ncep.noaa.gov/pmb/nwprod/analysis/namer/gfs/',
		'url_template': 'http://www.nco.ncep.noaa.gov/pmb/nwprod/analysis/namer/%M/%r/images/%M_%m_%P%t.gif',
		'name': 'GFS'
	},
	'gefs': {
		'hours': [
			{'max': 180, 'div': 6},
			{'max': 384, 'div': 12}
		],
		'maps': {
			'20a': {'name': '200mb 1176 Hgt Contours'},
			'20b': {'name': '200mb 1188 Hgt Contours'},
			'20c': {'name': '200mb 1200 Hgt Contours'},
			'20d': {'name': '200mb 1212 Hgt Contours'},
			'20e': {'name': '200mb 1224 Hgt Contours'},
			'20f': {'name': '200mb 1230 Hgt Contours'},
			'50a': {'name': '500mb 510/552 Hgt Contours'},
			'50b': {'name': '500mb 516/558 Hgt Contours'},
			'50c': {'name': '500mb 522/564 Hgt Contours'},
			'50d': {'name': '500mb 528/570 Hgt Contours'},
			'50e': {'name': '500mb 534/576 Hgt Contours'},
			'50f': {'name': '500mb 540/582 Hgt Contours'},
			'sla': {'name': 'MSLP 984/1024 Isobars'},
			'slb': {'name': 'MSLP 996/1036 Isobars'},
			'slc': {'name': 'MSLP 1000/1040 Isobars'},
			'sld': {'name': 'MSLP 1004/1044 Isobars'},
			'sle': {'name': 'MSLP 1008/1048 Isobars'},
			'slf': {'name': 'MSLP 1012/1052 Isobars'}
		},
		'runs': {
			'00': { 'name': '00z' },
			'06': { 'name': '06z' },
			'12': { 'name': '12z' },
			'18': { 'name': '18z' }
		},
		'types': {
			'm': { 'name': 'medium' }
		},
		'base_url': 'http://www.nco.ncep.noaa.gov/pmb/nwprod/analysis/namer/gefs/',
		'url_template': 'http://www.nco.ncep.noaa.gov/pmb/nwprod/analysis/namer/%M/%r/images/%M_%m_%P%t.gif',
		'name': 'GEFS'			
	},
	'hiresw': {
		'hours': [
			{'max': 48, 'div': 3}
		],
		'maps': {
			'250': {'name': '250mb Wind, Ht'},
			'300': {'name': '300mb Wind, Ht'},
			'500': {'name': '500mb Vort, Ht'},
			'700': {'name': '700mb RH, Ht'},
			'850': {'name': '850mb Temp, Ht'},
			'p03': {'name': 'Tot Pcpn 03 hrs'},
			'p12': {'name': 'Tot Pcpn 12 hrs'},
			'p24': {'name': 'Tot Pcpn 24 hrs'},
			'p36': {'name': 'Tot Pcpn 36 hrs'},
			'p48': {'name': 'Tot Pcpn 48 hrs'},
			'ref': {'name': 'Sim Radar Reflectivity'},
			'slp': {'name': 'MSLP 1000-500mb'}
		},
		'runs': {
			'00': {'name': '00z (Eastern US)'},
			'06': {'name': '06z (Western US)'},
			'12': {'name': '12z (Eastern US)'},
			'18': {'name': '18z (Alaska)'}
		},
		'types': {
			'l': {'name': 'NMM'},
			'm': {'name': 'ARW'}
		},
		'base_url': 'http://www.nco.ncep.noaa.gov/pmb/nwprod/analysis/namer/hiresw/',
		'url_template': 'http://www.nco.ncep.noaa.gov/pmb/nwprod/analysis/namer/%M/%r/images/%M_%m_%P%t.gif',
		'name': 'HRW'
	},
	'sref': {
		'hours': [
			{'max': 87, 'div': 3}
		],
		'maps': {
			'25h': {'name': '250mb Hghts'},
			'25w': {'name': '250mb Winds'},
			'50h': {'name': '500mb Hghts'},
			'70r': {'name': '700mb RH'},
			'70r': {'name': '700mb Temp'},
			'85r': {'name': '850mb RH'},
			'85t': {'name': '850mb Temps'},
			'85w': {'name': '850mb Winds'},
			'at1': {'name': '1000-850 Thkns'},
			'at5': {'name': '1000-500 Thkns'},
			'at7': {'name': '850-700 Thkns'},
			'b0w': {'name': '10m Wind'},
			'b2m': {'name': '2m Temps'},
			'bsp': {'name': 'Mean SL Prs'},
			'cax': {'name': 'CAPE'},
			'cin': {'name': 'CIN'},
			'lix': {'name': 'Lifted Index'},
			'x06': {'name': '6hr Precip'},
			'x12': {'name': '12hr Precip'},
			'x24': {'name': '24hr Precip'},
			'zp6': {'name': '6hr Precip > .25'},
			'zpe': {'name': 'Prob of CAPE'},
			'zt2': {'name': '2m Temp < 0'},
			'zwd': {'name': '10m Winds > 25k'}			
		},
		'runs':	{
			'03': {'name': '03z'},
			'09': {'name': '09z'},
			'15': {'name': '15z'},
			'21': {'name': '21z'}
		},
		'types': {
			's': {'name': 'small'}
		},
		'base_url': 'http://www.nco.ncep.noaa.gov/pmb/nwprod/analysis/namer/sref/',
		'url_template': 'http://www.nco.ncep.noaa.gov/pmb/nwprod/analysis/namer/%M/%r/images/%M_%m_%P%t.gif',
		'name': 'SREF'
	},
	'wrf': {
	  'hours': [
	    {'max': 168, 'div': 12}
	   ],
	   'maps': {
	     '1': {'name': 'MSLP/2m T & Td'},
	     '2': {'name': '500mb AVOR'},
	     '3': {'name': '300mb Wind'},
	     '4': {'name': '250mb PV'},
	     '5': {'name': 'Reflectivity'},
	     '6': {'name': '6h - QPF'},
	     '7': {'name': '850mb T'},
	     '8': {'name': 'Low-Lvl RH & Sfc Wind'},
	     '9': {'name': 'Thickness'},
	     '10': {'name': 'Omega'},
	     '11': {'name': 'CAPE/CIN'},
	     '12': {'name': 'PWat'},
	     '13': {'name': 'DTW SkewT'},
	     '14': {'name': 'FNT SkewT'},
	     '15': {'name': 'MBS SkewT'},
	     '16': {'name': 'GRR SkewT'},
	     '17': {'name': 'APX SkewT'},
	     '18': {'name': 'MQT SkewT'},
	     '19': {'name': 'GRB SkewT'},
	     '20': {'name': 'MKE SkewT'},
	     '21': {'name': 'ORD SkewT'},
	     '22': {'name': 'IND SkewT'},
	     '23': {'name': 'MPX SkewT'},
	     '24': {'name': 'STL SkewT'},
	     '25': {'name': 'MCI SkewT'},
	     '26': {'name': 'OUN SkewT'},
	     '27': {'name': 'BUF SkewT'},
	     '28': {'name': 'BOS SkewT'},
	     '29': {'name': 'JFK SkewT'},
	     '30': {'name': 'DCA SkewT'},
	     '31': {'name': 'BHM SkewT'}
	   },
	   'runs': {
	     'latest': {'name': 'latest'}
	   },
	   'types': {
	     'hemi': {'name': 'hemisphere'}
	   },
	   'base_url': 'http://www.crh.noaa.gov/images/dtx/mann/',
	   'url_template': 'http://www.crh.noaa.gov/images/dtx/mann/%M%t_%m_%P.gif',
	   'name': 'DTX WRF Hemispheric'
	 }
}

var CUR_MODEL = 'nam';
var CUR_HOUR = 0;
var CUR_RUN = '00';
var CUR_MAP = 'pcp'
var CUR_TYPE = 's';
