# [ArtWorx] xCalendar Display Template for SharePoint 2013
SP2013 Display Template to presentate events in responsive calender layout in content search web parts.

*xCalendar is part of the ArtWorx collection.*

xCalendar is based on [Serhioromano's Bootstrap Calendar][4], And require [ArtWorx] xLoader if you want to enable the preloader feature.

##Summery
The community release many amazing libraries out there every day, isn't it will be very nice if we integrated this libraries in SharePoint to improve the visuals and make it *Not look like SharePoint* ?

But since the SP Display Templates using the single parent (control) & repeated child (item) method, You aren't able to send all the items data one time (as JSON for example),
So the question is **Do we have to stick to SP method and keep thinking inside the box ?**

No we don't have to, What about we display the data and make our own loop inside the control, And use the item just to define the Managed  Properties we are using.
All the items data can be accessed inside the control display template, And stored  in the *ctx* there:
```javascript
ctx.ListData.ResultTables[0].ResultRows;
```
So in our case to retrieve the calendar events and store them in JSON:
```javascript
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
```
We also can create our custom settings in the content search web part by using  a simple trick [to retrieve  our  Managed Properties  in the control display template][1], Thanks to [Elio Struyf][2]  for sharing it:
```javascript
var properties = "";
// Retrieve the properties from the display template data variable
var dtd = ctx['DisplayTemplateData'];
if (!Srch.U.n(dtd) && !Srch.U.n(dtd['ManagedPropertyMapping'])) {
    properties = dtd['ManagedPropertyMapping'];
}
// Retrieve the properties from the client control
var cc = ctx['ClientControl'];
if (!Srch.U.n(cc)) {
    if (!Srch.U.n(cc.get_propertyMappings)) {
        var mappings = cc.get_propertyMappings();
        if (!Srch.U.n(mappings) && !Srch.U.w(mappings)) {
            properties = Srch.Result.parsePropertyMappingsString(mappings);
        }
    }
}
//Retrieve the settings from the properties object
var setting1 = properties["setting_Value1"];
var setting2 = properties["setting_Value2"];
```
And now we have our items data, and our custom settings!
##Documentation
###Quick setup
To use the display template copy the files to its related folders, And update the new locations in the Control_xCalendar.html
```javascript
$includeLanguageScript(this.url, "~sitecollection/_catalogs/masterpage/xPortal/style library/common/styles/xCalendar/calendar.css"); // line 19
$includeLanguageScript(this.url, "~sitecollection/_catalogs/masterpage/xPortal/style library/common/styles/xLoader/xloader.css"); // line 20
$.getScript(siteURL + "_catalogs/masterpage/xPortal/style library/common/styles/xLoader/xLoaderTmplArray.js", ...) // line 144
$.getScript(siteURL + "_catalogs/masterpage/xPortal/style library/common/scripts/xCalendar/underscore-min.js", ...) // line 202
$.getScript(siteURL + "_catalogs/masterpage/xPortal/style library/common/scripts/xCalendar/jstz.min.js", ...) // line 203
$.getScript(siteURL + "_catalogs/masterpage/xPortal/style library/common/scripts/xCalendar/language/"+langCode+".js"); // line 204
$.getScript(siteURL + "_catalogs/masterpage/xPortal/style library/common/scripts/xCalendar/calendar.min.js", ...) // line 205
tmpl_path: siteURL + '_catalogs/masterpage/xPortal/style library/common/scripts/xCalendar/tmpls/', // line 215
```
***
###Settings
**Preloader:** (true/false)

Enable/Disable the caneldar preloader, For the preloader versions please refer to [xPreloader repository][3].

**Preloader Type:** (string)

Type of the preloader, For the types and live demo please refer to [xPreloader repository][3].

**Initial Date:** ('now', 'yyyy-mm-dd')

Initial date. No matter month, week or day this will be a starting point.

**Initial View:** ('month', 'week', 'day')

Initial view.

**Week Start Day:** (int)

Week start day will be used in next version after adding the holidays feature.

**Day Start Time:** (hh|mm)

Start working time of the calendar.

**Day End Time:** (hh|mm)

Start working time of the calendar.

**Day Split Time:** (mm)

Time split 10, 15 or 30.

**CSS Class: ...:** (string)

Define classes for custom styles.

**Display Event in Modal:** (null/int)

ID of the element of modal window. If set, events URLs will be opened in modal windows.

**Modal Type:** ("iframe", "ajax", "template")

Modal handling setting.

**Modal Title:** (null/function)

Will be used in next version.

***

###Mapped Properties
**Title**

The event title.

**Link URL**

The event page.

**Start Date**

Event start date.

**End Date**

Event end date.

**Event Category**

Event category

***

##Up coming versions??
If you have any ideas or great features you would like to see in the next versions please let us know!

Also if there is any amazing library you would like to see as display template, Please share with us.

[1]: http://www.eliostruyf.com/adding-configurable-settings-display-templates/
[2]: https://twitter.com/eliostruyf
[3]: https://github.com/AnasTawfeek/-ArtWorx-xLoader
[4]: https://github.com/Serhioromano/bootstrap-calendar/
