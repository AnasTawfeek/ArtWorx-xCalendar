/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_0b2c32adbe524ac591ffd18daf9ee7b5(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_0b2c32adbe524ac591ffd18daf9ee7b5.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fNewTemplates\u002fxCalendar\u002fControl_xCalendar.js';
  ctx['DisplayTemplateData']['TemplateType']='Control';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

ms_outHtml.push('',''
); 
			if (!$isNull(ctx.ClientControl) &&
				!$isNull(ctx.ClientControl.shouldRenderControl) &&
				!ctx.ClientControl.shouldRenderControl())
			{
				return "";
			}
			ctx.ListDataJSONGroupsKey = "ResultTables";
			var $noResults = Srch.ContentBySearch.getControlTemplateEncodedNoResultsMessage(ctx.ClientControl);

			var noResultsClassName = "ms-srch-result-noResults";

			var ListRenderRenderWrapper = function(itemRenderResult, inCtx, tpl)
			{
				var iStr = [];
				iStr.push('<li class="news-item">');
				iStr.push(itemRenderResult);
				iStr.push('</li>');
				return iStr.join('');
			}
			ctx['ItemRenderWrapper'] = ListRenderRenderWrapper;


			if (!$isNull(ctx.ClientControl) &&
				!$isNull(ctx.ClientControl.shouldRenderControl) &&
				!ctx.ClientControl.shouldRenderControl())
			{
				return "";
			}
			ctx.ListDataJSONGroupsKey = "ResultTables";
			var siteURL = SP.PageContextInfo.get_siteServerRelativeUrl();


			//#################################
			// Start: Fetch Calendar Events
			//#################################
			var eventsObj = ctx.ListData.ResultTables[0].ResultRows;
			var events_source = [];
			$.each(eventsObj, function(index){
				var startDate = new Date(this.xPortalStartDate);
				var startDateMS = startDate.getTime();
				var endDate = new Date(this.xPortalEndDate);
				var endDateMS = endDate.getTime();
				events_source[index] = {
					'id': this.DocId,
					'title': this.xPortalEventCategoryOWSCHCS + ' - ' + this.Title,
					'url': this.Path,
					'class': 'event-info',
					'start': startDateMS,
					'end': endDateMS
				};
			});

			//#################################
			// End: Fetch Calendar Events
			//#################################



			//#################################
			// Start: Fetch Calendar Settings
			//#################################
			var properties = "";
			var settings = {};
			var dtd = ctx['DisplayTemplateData'];
			if (!Srch.U.n(dtd) && !Srch.U.n(dtd['ManagedPropertyMapping'])) {
				properties = dtd['ManagedPropertyMapping'];
			}
			var cc = ctx['ClientControl'];
			if (!Srch.U.n(cc)) {
				if (!Srch.U.n(cc.get_propertyMappings)) {
					var mappings = cc.get_propertyMappings();
					if (!Srch.U.n(mappings) && !Srch.U.w(mappings)) {
						properties = Srch.Result.parsePropertyMappingsString(mappings);
					}
				}
			}
			for (var key in properties) {
			  if (properties.hasOwnProperty(key)) {
				settingKey = key.replace(/\s+/, "");
				settingVal = properties[key][0];
				settings[settingKey] = settingVal;
			  }
			}
			//#################################
			// End: Fetch Calendar Settings
			//#################################

			//#################################
			// Start: Cleaning Settings
			//#################################
				if(settings['xCalendarModal'] === ''){
					settings['xCalendarModal'] = null;
				}

				if(settings['xCalendarModalTitle'] === ''){
					settings['xCalendarModalTitle'] = null;
				}
				settings['xCalendarDayStartTime'] = settings['xCalendarDayStartTime'].replace("\|", ":");
				settings['xCalendarDayEndTime'] = settings['xCalendarDayEndTime'].replace("\|", ":");
				settings['xCalendarDaySplitTime'] = settings['xCalendarDaySplitTime'].replace("\|", ":");
			//#################################
			// End: Cleaning Settings
			//#################################

			//#################################
			// Start: Preloader
			//#################################
			$.getScript(siteURL + "_catalogs/masterpage/xPortal/style library/common/styles/xLoader/xLoaderTmplArray.js", function(){
				if(settings['xCalendarxLoader'] === 'true'){
					var calendarDiv = $('#calendarContainar');
					calendarDiv.append(preloaderTmpl[settings['xCalendarxLoaderType']]);
				}
			});
			//#################################
			// End: Preloader
			//#################################

		ms_outHtml.push(''
,'		<div id="calendarContainar">'
,'			<div class="form-inline xcalendar-controls" style="width:100%;">'
,'				<div class="button-group" style="float:left;">'
,'					<span class="btn btn-primary" data-calendar-nav="prev"><i class="fa fa-chevron-left"></i></span>'
,'					<span class="btn btn-warning" data-calendar-nav="today">Today</span>'
,'					<span class="btn btn-primary" data-calendar-nav="next"><i class="fa fa-chevron-right"></i></span>'
,'				</div>'
,'				<div class="button-group" style="float:right;">'
,'					<span class="btn btn-success" data-calendar-view="year">Year</span>'
,'					<span class="btn btn-success" data-calendar-view="month">Month</span>'
,'					<span class="btn btn-success" data-calendar-view="week">Week</span>'
,'					<span class="btn btn-success" data-calendar-view="day">Day</span>'
,'				</div>'
,'			</div>'
,'			<div class="clearfix"></div>'
,'			<div id="calendar">'
,'				', ctx.RenderGroups(ctx) ,''
,'			</div>'
,'		</div>'
,'				'
);		
		
		AddPostRenderCallback(ctx, function(){
			var langs = {
					1025: 'ar-SA',
					1026: 'bg-BG',
					1031: 'de-DE',
					1032: 'el-GR',
					1033: '',
					1036: 'fr-FR',
					1038: 'hu-HU',
					1040: 'it-IT',
					1043: 'nl-NL',
					1045: 'pl-PL',
					1046: 'pt-BR',
					1048: 'ro-RO',
					1049: 'ru-RU',
					1051: 'sk-SR',
					1053: 'sv-SE',
					1057: 'id-ID',
					2058: 'es-MX',
					3082: 'es-ES',
					9226: 'es-CO',
				};
			var langId = _spPageContextInfo.currentLanguage;
			var langCode = langs[langId];
			
			$.getScript(siteURL + "_catalogs/masterpage/xPortal/style library/common/scripts/xCalendar/underscore-min.js", function(){
				$.getScript(siteURL + "_catalogs/masterpage/xPortal/style library/common/scripts/xCalendar/jstz.min.js", function(){
						$.getScript(siteURL + "_catalogs/masterpage/xPortal/style library/common/scripts/xCalendar/language/"+langCode+".js");
					$.getScript(siteURL + "_catalogs/masterpage/xPortal/style library/common/scripts/xCalendar/calendar.min.js", function(){
						var options = {
							events_source: function(){
								return events_source;
							},
							view: settings['xCalendarInitialView'],
							day: settings['xCalendarInitialDate'],
							time_start:         settings['xCalendarDayStartTime'],
							time_end:           settings['xCalendarDayEndTime'],
							time_split:         settings['xCalendarDaySplitTime'],
							tmpl_path: siteURL + '_catalogs/masterpage/xPortal/style library/common/scripts/xCalendar/tmpls/',
							tmpl_cache: false,
							onAfterEventsLoad: function(events) {
								if(!events) {
									return;
								}
								var list = $('#eventlist');
								list.html('');

								$.each(events, function(key, val) {
									$(document.createElement('li'))
										.html('<a href="' + val.url + '">' + val.title + '</a>')
										.appendTo(list);
								});
							},
							onAfterViewLoad: function(view) {
								if(settings['xCalendarxLoader'] === 'true'){
									$('#calendarContainar #xLoader').slideUp(1000);
								}
								$('#calendarContainar').css('min-hight', 'auto');
							},
							classes: {
								months: {
									inmonth:  settings['xCalendarClassMonthsInMonth'],
									outmonth: settings['xCalendarClassMonthsOutMonth'],
									saturday: settings['xCalendarClassMonthsSaturday'],
									sunday:   settings['xCalendarClassMonthsSunday'],
									holidays: settings['xCalendarClassMonthsHolidays'],
									today:    settings['xCalendarClassMonthsToday']
								},
								week:   {
									workday:  settings['xCalendarClassWeeksWorkday'],
									saturday: settings['xCalendarClassWeeksSaturday'],
									sunday:   settings['xCalendarClassWeeksSunday'],
									holidays: settings['xCalendarClassWeeksHolidays'],
									today:    settings['xCalendarClassWeeksToday']
								}
							},
							modal: settings['xCalendarModal'],
							modal_type: settings['xCalendarModalType'],
						};

						var calendar = $('#calendar').calendar(options);

						$('.xcalendar-controls span[data-calendar-nav]').each(function() {
							var $this = $(this);
							$this.click(function() {
								calendar.navigate($this.data('calendar-nav'));
							});
						});

						$('.xcalendar-controls span[data-calendar-view]').each(function() {
							var $this = $(this);
							$this.click(function() {
								calendar.view($this.data('calendar-view'));
							});
						});

						$('#events-modal .modal-header, #events-modal .modal-footer').click(function(e){
							//e.preventDefault();
							//e.stopPropagation();
						});
					});
					
				});
			});
		});		
		ms_outHtml.push(''
,'		'
);
			if (ctx.ClientControl.get_shouldShowNoResultMessage()){
		ms_outHtml.push(''
,'		<div class="', noResultsClassName ,' error">'
,'			', $noResults ,'</div>'
);
			}
		ms_outHtml.push(''
,'		<div class="clear">'
,'		</div>'
,'	'
);

  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_0b2c32adbe524ac591ffd18daf9ee7b5() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fNewTemplates\u002fxCalendar\u002fControl_xCalendar.js", DisplayTemplate_0b2c32adbe524ac591ffd18daf9ee7b5);
}
//
		$includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fNewTemplates\u002fxCalendar\u002fControl_xCalendar.js", "~sitecollection/_catalogs/masterpage/xPortal/style library/common/styles/xCalendar/calendar.css");
		$includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fNewTemplates\u002fxCalendar\u002fControl_xCalendar.js", "~sitecollection/_catalogs/masterpage/xPortal/style library/common/styles/xLoader/xloader.css");
	//
}
RegisterTemplate_0b2c32adbe524ac591ffd18daf9ee7b5();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fNewTemplates\u002fxCalendar\u002fControl_xCalendar.js"), RegisterTemplate_0b2c32adbe524ac591ffd18daf9ee7b5);
}