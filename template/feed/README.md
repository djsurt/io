**From BuildingTransparency.org**
[About OpenEPD](https://www.buildingtransparency.org/programs/openepd/)
[Material Search](https://buildingtransparency.org/ec3/material-search) - Google Login works
[OpenEPD API](https://openepd.buildingtransparency.org/) - Swagger UI
<a href="https://docs.google.com/spreadsheets/d/1q2TW0GlLlK7yH3k5TSsWGmXyL94KPI9VUWWv9vid63A/edit">OpenEPD spreadsheet</a> - Are these variable also accessible in the API?
<a href="https://buildingtransparency.org/ec3/creator-contacts/epds">How to Get an EPD</a> - Includes  “nutrition label”
<a href="https://www.oneclicklca.com/simple-epd-guide/" target="epdGuide">EPD Guide</a> - One Click LCA<br>

<b>TO DO:</b> Allow site users to enter their own BuildingTransparency key here. Use [javascript sample on starter page](../../../localsite/start/steps/).


View our [Product YAML notes](../product/) for steps on using Postman.  

## To try with BuildingTransparency.org

The follow technique is used in the [useeio.js](https://github.com/modelearth/useeio.js) repo to download an API to json files.

Try adding an API key to dumpjson-bldg-transparency.js or try appending here.
Note that API keys expire every 3 days. [Get a BuildingTransparency.org key].

```
$ node scripts/dumpjson-bldg-transparency.js --endpoint https://openepd.buildingtransparency.org/api/epds?page_number=1&page_size=10
```


## Display Footprints from Static Files

Check out how faster the EPD product list displays when <a href="../../../community/resources/diffbot/#feed=epd">loaded from a static json file</a>. 

<!--
<a href="../../products/#show=openepd">View Feed on Map</a> (allow 8 seconds) - also now 401 (Unauthorized) 
-->

<!--
By using a static json file, we'll load 30,000+ records (775K) in a quarter of a second, similar to the <a href="https://publictreemap.org">Santa Monica tree inventory</a>.
-->

<a href="https://openepd.buildingtransparency.org/#/epds/get_epds_id">Login to the OpenEPD Swagger </a> to get your bearer token for the  API

Paste the bearer token and run from a console:

	curl -X 'GET' \
	'https://openepd.buildingtransparency.org/api/epds?page_number=1&page_size=100' \
	-H 'accept: application/json' \
	-H 'filter: {"epds.name":"ASTM International"}' \
	-H 'Authorization: Bearer [Your Bearer Token]'

<!--
We recomend saving your own private desktop swagger file with your API commands. Coordinate updates with Loren.
-->

<b>TO DO:</b> Modify the API URL used in this page to return only the interesting fields, including the company and product names. Add a toggle to load all values.

<!--
Phil wrote: Soft search terms is a feature where we *delete* search terms if there are zero returns.  It's not really what you want in an API. 
-->

Here's a [blank starter for building TypeScript apps](https://stackblitz.com/edit/typescript) within [stackblitz.com](https://stackblitz.com)

You could build on <a href="../../../community/projects/#widgets">Abrie's React work</a> - Abrie has started React work in this <a href="https://github.com/abrie/zctaimpacts">ZCTA Impacts repo</a>. Here's the <a href="https://zctaimpacts.abrie.dev/#zip=30318">resulting label output</a>. 


Abrie's work could be formatted to match our [HTML template](../../io/template/) (right column). Shorten numbers. Drive location filters by URL hash [param values](../../localsite/) like #zip=30318 and #geo=US13121,US1308 for counties. Compare location to national average and add red and green to the right to indicated hotspots.

Check out [React with Blitz.js](https://blitzjs.com) for data layer abstraction that eliminates the need for REST/GraphQL.

Output Display:
<div id="urlDisplay" style="overflow-wrap: break-word;">
The API key here in javascript expires every 72 hours.<br>
The 401 error below is replaced by a list when you update the key.<br>
You can <a href="../../../localsite/start/steps/">setup our repos locally</a> to update the key.<br><br>
</div>

<div id="clickToExpand" style="display:none">Click bars to expand</div>