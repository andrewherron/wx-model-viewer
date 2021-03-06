// All code copyright 2009, Andrew Herron andrew.s.herron@gmail.com

var S_EPOCH = new Date().getTime();

var MODELS = {
	'nam': {
		'hours': [
			{'max': 84, 'div': 3}
		],
		'maps': {
			'200_wnd_ht': {'name': '200mb Wind, Ht'},
			'250_wnd_ht': {'name': '250mb Wind, Ht'},
			'250_stream': {'name': '250mb Stream'},
			'300_wnd_ht': {'name': '300mb Wind, Ht'},
			'500_vort_ht': {'name': '500mb Vort, Ht'},
			'500_rh_ht': {'name': '500mb RH, Ht'},
			'700_rh_ht': {'name': '700mb RH, Ht'},
			'850_temp_ht': {'name': '850mb Temp, Ht'},
			'850_vort_ht': {'name': '850mb Vort, Ht'},
			'850_rh_ht': {'name': '850mb RH, Ht'},
			'850_pw_ht': {'name': '850mb PW, Ht'},
			'850_stream': {'name': '850mb Stream'},
			'850_temp_mslp_precip': {'name': '850mb Temp, MSLP, 6hr Pcpn'},
			'10m_wnd_precip': {'name': '10m Wind, Pcpn'},
			'precip_p03': {'name': 'Total Pcpn 03 hrs'},
			'precip_p06': {'name': 'Total Pcpn 06 hrs'},
			'precip_p12': {'name': 'Total Pcpn 12 hrs'},
			'precip_p24': {'name': 'Total Pcpn 24 hrs'},
			'precip_p36': {'name': 'Total Pcpn 36 hrs'},
			'precip_p48': {'name': 'Total Pcpn 48 hrs'},
			'precip_p60': {'name': 'Total Pcpn 60 hrs'},
			'precip_ptot': {'name': 'Total Pcpn of Period'},
			'sim_radar': {'name': 'Sim Radar Reflectivity'},
			'850_700_thick': {'name': 'MSLP 850-700mb, 6hr Pcpn'},
			'1000_850_thick': {'name': 'MSLP 1000-850mb, 6hr Pcpn'},
			'1000_500_thick': {'name': 'MSLP 1000-500mb, 6hr Pcpn'},
			'850vor_500ht_200wd': {'name': '850mb Vort, 500mb Ht, 200mb Wind'}
		},
		'runs': {
			'00': { 'name': '00z' },
			'06': { 'name': '06z' },
			'12': { 'name': '12z' },
			'18': { 'name': '18z' }
		},
		'types': {
			'namer': { 'name': 'namer' }
		},
		'base_url': 'http://mag.ncep.noaa.gov/data/nam/',
		'url_template': 'http://mag.ncep.noaa.gov/data/nam/%r/%M_%t_%P_%m.gif',
		'name': 'NAM'
	},
	'gfs': {
		'hours': [
			{'max': 192, 'div': 3},
			{'max': 384, 'div': 12}
		],
		'maps': {
			'200_wnd_ht': {'name': '200mb Wind, Ht'},
			'250_wnd_ht': {'name': '250mb Wind, Ht'},
			'250_stream': {'name': '250mb Stream'},
			'300_wnd_ht': {'name': '300mb Wind, Ht'},
			'500_vort_ht': {'name': '500mb Vort, Ht'},
			'500_rh_ht': {'name': '500mb RH, Ht'},
			'700_rh_ht': {'name': '700mb RH, Ht'},
			'850_temp_ht': {'name': '850mb Temp, Ht'},
			'850_vort_ht': {'name': '850mb Vort, Ht'},
			'850_rh_ht': {'name': '850mb RH, Ht'},
			'850_pw_ht': {'name': '850mb PW, Ht'},
			'850_stream': {'name': '850mb Stream'},
			'850_temp_mslp_precip': {'name': '850mb Temp, MSLP, 6hr Pcpn'},
			'10m_wnd_precip': {'name': '10m Wind, Pcpn'},
			'precip_p03': {'name': 'Total Pcpn 03 hrs'},
			'precip_p06': {'name': 'Total Pcpn 06 hrs'},
			'precip_p12': {'name': 'Total Pcpn 12 hrs'},
			'precip_p24': {'name': 'Total Pcpn 24 hrs'},
			'precip_p36': {'name': 'Total Pcpn 36 hrs'},
			'precip_p48': {'name': 'Total Pcpn 48 hrs'},
			'precip_p60': {'name': 'Total Pcpn 60 hrs'},
			'precip_ptot': {'name': 'Total Pcpn of Period'},
			'sim_radar': {'name': 'Sim Radar Reflectivity'},
			'850_700_thick': {'name': 'MSLP 850-700mb, 6hr Pcpn'},
			'1000_850_thick': {'name': 'MSLP 1000-850mb, 6hr Pcpn'},
			'1000_500_thick': {'name': 'MSLP 1000-500mb, 6hr Pcpn'},
			'850vor_500ht_200wd': {'name': '850mb Vort, 500mb Ht, 200mb Wind'}
		},
		'runs': {
			'00': { 'name': '00z' },
			'06': { 'name': '06z' },
			'12': { 'name': '12z' },
			'18': { 'name': '18z' }
		},
		'types': {
			'namer': { 'name': 'namer' },
			'samer': {'name': 'samer'},
			'spac': {'name': 'spac'},
			'epac': {'name': 'epac'},
			'npac': {'name': 'npac'},
			'atlantic': {'name': 'atlantic'},
			'wnatl': {'name': 'wnatl'},
			'europe': {'name': 'europe'},
			'asia': {'name': 'asia'},
			'africa': {'name': 'africa'},
			'polar': {'name': 'polar'}
		},
		'base_url': 'http://mag.ncep.noaa.gov/data/gfs/',
		'url_template': 'http://mag.ncep.noaa.gov/data/gfs/%r/%M_%t_%P_%m.gif',
		'name': 'GFS'
	},
	'rapeta': {
		'hours': [
			{'max': 84, 'div': 6}
		],
		'maps': {
			'sfc_temp': {'name': 'Surface Temp (F)'},
			'sfc_dewp': {'name': 'Surface Dewpoint (F)'},
			'sfc_mslp': {'name': 'Surface MSLP'},
			'sfc_thet': {'name': 'Surface Theta-E'},
			'sfc_prcp': {'name': 'Surface Precip (6hr)'},
			'sfc_ptyp': {'name': 'Surface Precip Type'},
			'sfc_cape': {'name': 'Surface CAPE/CIN'},
			'sfc_pwat': {'name': 'Surface PWat/LI'},
			'sfc_sreh': {'name': 'Surface Storm Relative Helicity'}
		},
		'runs': {
			'': { 'name': 'Current' }
		},
		'types': {
			'': { 'name': ''}
		},
		'base_url': 'http://www.rap.ucar.edu/weather/model/eta',
		'url_template': 'http://www.rap.ucar.edu/weather/model/eta%phr_%m.gif',
		'hour_string_length': 2,
		'name': 'UCAR RAP ETA'
	},
	'dtxwrf': {
	  'hours': [
	    {'max': 18.5, 'div': 0.5}
	   ],
	   'maps': {
	     '1': {'name': '2m Temp / Dewpoint'},
	     '2': {'name': 'Composite Reflectivity'},
	     '3': {'name': '950mb Height / Wind'},
	     '4': {'name': '850mb Height / Wind'},
	     '5': {'name': '700mb Height / Wind'},
	     '6': {'name': '500mb Height / Wind'},
	     '7': {'name': 'MSLP / Sfc Wind / 1h Pcp'},
	     '8': {'name': '950mb Height / RH / Temp'},
	     '9': {'name': '850mb Height / RH / Temp'},
	     '10': {'name': '700mb Height / RH / Temp'},
	     '11': {'name': '500mb Height / Temp / Wind'},
	     '12': {'name': '10m Wind'},
	     '13': {'name': '950-850mb Omega'},
	     '14': {'name': 'Surface CAPE'},
	     '15': {'name': 'DTX SkewT'},
	     '16': {'name': 'FNT SkewT'},
	     '17': {'name': 'MBS SkewT'},
	     '18': {'name': 'GRR SkewT'},
	     '19': {'name': 'APX SkewT'},
	     '20': {'name': '1km Shear Vector'},
	     '21': {'name': '6km Shear Vector'},
	     '22': {'name': 'LCL Height'},
	     '23': {'name': 'Precipitable Water'}
	   },
	   'runs': {
	     '00': {'name': '00z'},
		 '03': {'name': '03z'},
		 '06': {'name': '06z'},
		 '09': {'name': '09z'},
		 '12': {'name': '12z'},
		 '15': {'name': '15z'},
		 '18': {'name': '18z'},
		 '21': {'name': '21z'}
	   },
	   'types': {
	     's': {'name': 'small'}
	   },
	   'base_url': 'http://www.crh.noaa.gov/images/dtx/WRF/HiRes/',
	   'url_template': 'http://www.crh.noaa.gov/images/dtx/WRF/HiRes/overview_%r_%H_%m.gif',
	   'hour_string_length': 1,
	   'name': 'DTX WRF HiRes'
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
		'name': '* GEFS'			
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
		'name': '* HRW'
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
		'name': '* SREF'
	},
	'cent4km': {
	  'hours': [
		{'max': 36, 'div': 1}
	  ],
	  'maps': {
		'today_1h': {'name': '1hr Precip'},
		'refd_1000m': {'name': 'Sim Ref 1km AGL'},
		'mx1000refd': {'name': 'Max Sim Ref 1km AGL'},
		'refc': {'name': 'Sim Sfc Ref Composite'},
		'uphl': {'name': 'Updraft Helicity'},
		'mxuphl': {'name': 'Max Updraft Helicity'},
		'echotop': {'name': 'Sim Echo Tops'},
		'etop50': {'name': 'Sim Echo Tops 50dBz LVL'},
		'tcolc': {'name': 'Total Column Condensate'},
		'vil': {'name': 'Sim VIL'},
		'mwrf': {'name': 'Mass Wghtd Rime Factor'},
		't2ms': {'name': '2m Temps'}
	  },
	  'runs': {
		'00': {'name': '00z'},
		'12': {'name': '12z'}
	  },
	  'types': {
		'4km': {'name': '4km'}
	  },
	  'base_url': 'http://www.emc.ncep.noaa.gov/mmb/mpyle/cent4km/conus/',
	  'url_template': 'http://www.emc.ncep.noaa.gov/mmb/mpyle/cent4km/conus/%r/%m_f%p.gif',
	  'hour_string_length': 2,
	  'name': '* 4km CONUS WRF-NMM'
	}
}

var CUR_MODEL = 'nam';
var CUR_HOUR = 0;
var CUR_RUN = '00';
var CUR_MAP = '850_temp_mslp_precip'
var CUR_TYPE = 'namer';
