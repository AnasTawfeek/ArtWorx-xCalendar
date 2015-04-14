/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_eee21a01d4a5415aac3254411bc8a9a9(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_eee21a01d4a5415aac3254411bc8a9a9.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fNewTemplates\u002fxCalendar\u002fItem_xCalendar.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['Content Web Parts'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'xCalendarxLoader':['true'], 'xCalendarxLoaderType':['CircularSquare'], 'xCalendarInitialDate':['now'], 'xCalendarInitialView':['month'], 'xCalendarStartDay':['sunday'], 'xCalendarDayStartTime':['00|00'], 'xCalendarDayEndTime':['24|00'], 'xCalendarDaySplitTime':['30'], 'xCalendarClassMonthsInMonth{CSS Class':[' Months - inmonth}'], 'xCalendarClassMonthsOutMonth{CSS Class':[' Months - outmonth}'], 'xCalendarClassMonthsSaturday{CSS Class':[' Months - saturday}'], 'xCalendarClassMonthsSunday{CSS Class':[' Months - sunday}'], 'xCalendarClassMonthsHolidays{CSS Class':[' Months - holidays}'], 'xCalendarClassMonthsToday{CSS Class':[' Months - today}'], 'xCalendarClassWeeksWorkday{CSS Class':[' Weeks - workday}'], 'xCalendarClassWeeksSaturday{CSS Class':[' Weeks - saturday}'], 'xCalendarClassWeeksSunday{CSS Class':[' Weeks - sunday}'], 'xCalendarClassWeeksHolidays{CSS Class':[' Weeks - holidays}'], 'xCalendarClassWeeksToday{CSS Class':[' Weeks - today}'], 'xCalendarModal':['true'], 'xCalendarModalType':['iframe'], 'xCalendarModalTitle':['current-event'], 'xTitle':['xPortalTitleOWSTEXT', 'Title'], 'Link URL':['Path'], 'xStartDate':['xPortalStartDate'], 'xEndDate':['xPortalEndDate'], 'xEventCategory':['xPortalEventCategoryOWSCHCS\u0027\n\n']};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_eee21a01d4a5415aac3254411bc8a9a9() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fNewTemplates\u002fxCalendar\u002fItem_xCalendar.js", DisplayTemplate_eee21a01d4a5415aac3254411bc8a9a9);
}
//        
        $includeLanguageScript("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fNewTemplates\u002fxCalendar\u002fItem_xCalendar.js", "~sitecollection/_catalogs/masterpage/Display Templates/Language Files/{Locale}/CustomStrings.js");
    //
}
RegisterTemplate_eee21a01d4a5415aac3254411bc8a9a9();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fContent Web Parts\u002fNewTemplates\u002fxCalendar\u002fItem_xCalendar.js"), RegisterTemplate_eee21a01d4a5415aac3254411bc8a9a9);
}