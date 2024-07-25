# Embeddable Input-Output Widgets
<div class="floatright">
<img src="../img/logo/epa.png" style="width:100%; max-width:200px; margin-left:30px">
</div>
Our [Local Industry Evaluator](../../localsite/info/) contains widgets using JQuery, Leaflet and React. 
<!-- 
Check out more [App Samples](../../io/) and [get started creating a site](https://model.earth/localsite/start/).  
Add a page to the [apps repo](../../apps/)
-->

<!--
OLD NOTE:

1. Duplicate USEEIOv1.2 to USEEIO for existing script in non-React widgets.  
2. Duplicate USEEIOv1.2 to GAUSEEIO since GA data currently only resides on the staging server.  

Manually copy the GAUSEEIO to a new folder called USEEIOv1.2 for Inflow-Outflow Chart  
-->

<!--
## Environmentally-Extended <span style="white-space:nowrap">Input-Output Model</span>

In RStudio
Tools > Install Packages > devtools

OR

install.packages(‘devtools’)          
library(devtools)

Rstudio has devtools intalled already, so maybe just library(devtools) to call in the package
-->

[The JSON API](https://github.com/ModelEarth/io/tree/main/build/api) used here is generated from the [USEEIO API](https://github.com/USEPA/USEEIO_API) which uses the [USEEIOR](https://github.com/USEPA/USEEIOR) pipeline. 
It's not necessary to interact with the USEEIO API directy.
Upcoming data for all states resides at [OpenFootprint/impacts](/openfootprint/impacts).


<!--(It replaces the use of [IOMB](https://github.com/USEPA/USEEIO_API/wiki/Build))-->

<!--
Here are [old model files](https://www.dropbox.com/sh/af48m0jsusgr3jg/AACzBSJwujR6LU0jZBhAzys6a?dl=0) for testing. (Better to use the newer data in the [static JSON files](https://github.com/modelearth/io/tree/main/build/api)) - [Build locally](../../charts/#build)
-->

Read our [Lifecycle Tools Overview](https://model.earth//community/tools/) and contribute to our  
[SQL State Model setup](/io/about/) and [International Trade Flow SQL](/useeio.js/footprint/)

## JQuery Widgets 

- [NAICS Industry List](../../localsite/info/#state=ME) and [Stand-alone](../../localsite/info/naics/) - JQuery
- [Impact Bubble Chart](bubble/) - D3 and JQuery  
- [Sankey Chart](sankey/) - D3 with Python prep  
<!--
- [Chord Chart](chord/) - Upcoming
- [OpenFootprint](/useeio.js/footprint/)
-->

<!--
If your local widgets reference the "useeio" folder, they may need to be updated occasionally as parameters change. For stability, point your local widgets at one of the [numbered backups](https://model.earth/eeio/build.2020.002) or copy the useeio folder into your project.


([old version](https://model.earth/eeio/build.2020.001), [pre-React](https://model.earth/eeio/build.2020.003) and [new version](useeio)) 
-->

## Embedable Map Widgets

- [Simple embedded map sample](/localsite/info/embed.html#state=NY) - Leaflet and JQuery
- [Farm Fresh Produce Map (from CSV files on GitHub)](../../localsite/map/#show=farmfresh) - Leaflet and JQuery

## React Widgets

[View documentation and functions](https://msrocka.github.io/useeio-widget-builds/apidoc/) generated using [TypeDoc](https://typedoc.org/).  
The React widgets in the [io repo](https://github.com/modelearth/io/) originate from the EPA's [USEEIO-widgets repo](https://github.com/USEPA/useeio-widgets/).   
Note: EPA downgraded reactjs from ^18.2.0 to ^17.0.2 to solve compability issue with MAC. (Jan 2024)

[The build folder](../build) is copied from useeio-widgets into the [io repo](https://github.com/modelearth/io/) to provide a static copy of the API's json files.  
The io repo includes additional code for integrating widgets.

- [Inflow-Outflow Chart](inflow-outflow/#set=prosperity&indicators=VADD,JOBS) - [Tires](inflow-outflow/#sectors=326210&set=prosperity&indicators=JOBS,VADD) - (<a href="../build/iochart.html#indicators=ENRG,GHG,VADD&sectors=113000,327310,327400,333613,335912,336111,562111,562212">Widget only</a>)<!-- &page=1&count=10 --><!-- [imfast.io](https://useeiowidgets.imfast.io/iochart.html#sectors=322130,325520,327910,541200)-->  
- [Sector List - Mosaic](../build/sector_list.html?view=mosaic&count=50)  
- [Sector List - Mosaic Limit Sectors](../build/sector_list.html?naics=333613,335912,336111&view=mosaic&count=50)  
- [Sector List - Display Values](../build/sector_list.html?view=mosaic&showvalues=true)  
- [Sector List - Two positive indicators](../build/sector_list.html#view=mosaic&view_indicators=JOBS,VADD&showvalues=true)
- [Industry Impact Bars with Configuration](../build/impact_chart_config.html)    
<!--
- [Sector List IO - Tire manufacturing (older version)](../build/iotables.html#sectors=326210&page=5)  
-->

<!--[Developer build (thetisiboth)](https://thetisiboth.github.io/useeio-widget-builds/)  -->
<!-- ([Recent build 1](https://msrocka.github.io/useeio-widget-builds/)) --> 

## React TO DOs

Also see our [Javascript with API TO DOs](/useeio.js/footprint/#reports) (at the bottom of that page)

### TO DO: Activate checkboxes to sort using multiple impact columns

Mock up (except we'll avoid the lines around the boxes and columns):

<a href="inflow-outflow/img/mockup-checkboxes.png"><img src="inflow-outflow/img/mockup-checkboxes.png" style="width:100%"></a><br>


Previously only the URL hash supported multiple impact sorting for the [sector-list (411 total)](/io/build/sector_list.html?view=mosaic&count=411) in  useeio-widgets ([localhost link](http://localhost:8887/useeio-widgets/build/sector_list.html?view=mosaic#indicators=ACID,GHG,HRSP)).

[Checkbox dev](https://github.com/ModelEarth/useeio-widgets/blob/master/src/widgets/sector-list/sector-list.tsx) (see history) for the Sector List in useeio-widgets at 
src -> widgets -> sector-list -> [sector-list.tsx](https://github.com/ModelEarth/useeio-widgets/commits/master/src/widgets/sector-list/sector-list.tsx)

[Build our fork of the useeio-widgets repo](https://github.com/modelearth/useeio-widgets) locally to work on the new checkboxes.

**New Features (in the latest modelearth/useeio-widgets build)**

High impact first sorts are now indicated by downward arrows.

Checkboxes now indicate which columns are the current filters, allowing for multiple columns to be selected using a URL like this:

http://localhost:8887/useeio-widgets/build/sector_list.html?view=mosaic#indicators=ACID,GHG,HRSP

BUG: The link above should not encode the commas when loading the page.
BUG: Sometimes the arrows appear using the link above, but not always.

**TO DO**

1.) Move the checkbox directly above the column (Then they won't have a 315 degree pivot.)

2.) Put the arrow inside the same a href tag as the title. (Then you won't need to add an action on the arrow itself.)

3.) Remove the underline on the title with:

	indicator a:hover{
	    text-decoration: none !important;
	}

4.) When unchecking, retain the other selected columns.

5.) When checking a box, show the highest level at the top with the first click. (The arrow will appear point up.)

6.) Adjust the angle of the arrow to point straight up and down. Wild guess:

	MuiSvgIcon-root {
		transform: translate(0px, 0px) rotate(-315deg);
	}

7.) Avoid encoding the commas in the URL #indicators=ACID,GHG,HRSP value. Figure out why the arrows are not always visible when refreshing.

8.) The new sortable checkboxes will allow impactful Jobs Supported (JOB) and Value-Added (VADD) positives to be compared with "low" impacts for other indicators. When the arrows point upward, populate a "low" hash value like this:

	#indicators=JOBS,VADD&low=ACID,GHG

The above would indicate: Lots of Jobs and Value Added, with low levels of negative impacts from Acid Rain and Green House Gases.

9.) Increase the maximum count to 411 so all the industries can be viewed.

<br>

### TO DO: Add display of totals as default, toggle than per-dollar

Total Amounts will be displayed with a toggle to Per-Dollar Spent.

Add total amounts to the [Inflow-Outflow Chart](/io/charts/inflow-outflow/#set=prosperity&indicators=VADD,JOBS) and show total amounts by default. See [total amounts examples](/localsite/info/data/totals/) and our display of easy to read totals using [commodity data procesed with python](/data-pipeline/research/economy/).  Update values displayed when the hash value changes from vtype=total to vtype=perdollar and back. Use the formatCellEasy() function in localsite.js or the python version formatCell() in the data-pipeline repo.

<hr><br>


# How to Host Widgets locally

The [localsite repo](../../localsite/) contains maps, navigation and data visualization charts.  

You can set parameters in the URL or javascript to control the display of the widgets.  [View examples in the apps repo](../../apps/).

The [io folder](https://github.com/modelearth/io/) contains a built copy of the "[build](../build)" folder and json API from [useeio-widgets](https://github.com/usepa/useeio-widgets), plus extra JQuery widgets.
<br>

1.) Create a folder for your webroot at Documents/Web or wherever you prefer.
2.) Start a local web server by right clicking your web folder and open a terminal command prompt.  Paste the following and hit return to run. This terminal will be locked from further commands since it is running your local server.

	python -m http.server 8887

3.) Open a new terminal and pull down these repos from Github. Hit return to run.

	git clone https://github.com/ModelEarth/localsite localsite &&  
	git clone https://github.com/ModelEarth/io io

You can install additional model.earth repos with our [install cmd](/localsite/start/steps)

If you'll be contributing changes, fork first the repo you're editing and clone from your fork. [Turn on GitHub Pages](/localsite/start/steps/#github-pages) so we can review your changes.

Run the following occasionally to refresh your local clones, or pull in Github Desktop:

	cd localsite && git pull https://github.com/ModelEarth/localsite main &&  
	cd ../io && git pull https://github.com/ModelEarth/io main

4.) View and update content locally at [http://localhost:8887/io/charts](http://localhost:8887/io/charts) and [http://localhost:8887/localsite/info](http://localhost:8887/localsite/info#state=ME)
<br>

# Build USEEIO-Widgets locally (React)

You can skip this section since [io/build](../build/) already contains a built instance.

You'll use these step if you are editing the USEEIO React Widgets locally. 

If you are collaborating through modelearth  on updates, clone [modelearth/useeio-widgets](https://github.com/modelearth/useeio-widgets/), otherwise clone [usepa/useeio-widgets](https://github.com/USEPA/useeio-widgets/).

<!--
<span style="background:red; padding:3px; color:#fff">NOTE:</span> The code in the useeio-widgets repo currently causes a runaway processor in the browser when used with the "localsite" repo. To avoid, the "localsite/build" folder contains the recent code from [Recent build 2](https://thetisiboth.github.io/useeio-widget-builds/).
-->

#### Node and Node Version Manager (NVM)

You'll need a current version of [Node.js](https://nodejs.org) installed. View our [node and python install notes](/io/coders/python/)


#### Open a terminal    

You can right-click the useeio-widgets folder and choose "New Terminal at Folder" on a Mac. &nbsp; [Sublime Text](https://www.sublimetext.com/) is a nice simple code editor.

#### Or open with VS Code: 

You can open the folder from VS Code.  Shortcut for opening VS Code: Open a command prompt in the repo folder and type `code .` or `code `  This may be necessary if your build does not run when opening with File > Open in VS Code.

You may need to [Configure your VS Code Editor](https://code.visualstudio.com/docs/setup/setup-overview) so running `code .` launches the editor.  Avoid running in the parent folder containing your repo(s) or your VS Code editor may not allow you to run subsequent commands inside its terminal.

To open a command shell window within VS Code by typing (Ctrl + \` backtick) or go to the "View > Terminal". 

<!--

```
cd io
```

Or use <code>cd useeio-widgets</code> if you are just using the source repo.  
-->

#### Install Node.js node_modules  

The following will add a node_modules folder containing javascript source libraries (dependencies) that will be used to output code for the widgets.  `npm ci` is an alternative to `npm install` which avoids modifying the package.lock.json file. [Learn more](https://stackoverflow.com/questions/48524417/should-the-package-lock-json-file-be-added-to-gitignore)

	cd useeio-widgets &&
	npm ci

<!--
npm ci
Use `npm ci` instead of `npm install` to avoid updating package-lock.json. [Why? npm ci](https://stackoverflow.com/questions/48524417/should-the-package-lock-json-file-be-added-to-gitignore)
-->

<!--
OLD - Did not occur with React update from EPA when running in March 2024
You can ignore errors (about 11), including "Error: `gyp` failed with exit code: 1".  
If you receive a "high severity vulnerabilities" warning, run the following as advised:  
	npm audit fix
-->

Then build the widget libraries.

Or your can copy the pre-built "[io/build](../build/)" folder which already contains the json API files.

<!--
This no longer occurs
<span style="background:red; padding:3px; color:#fff">NOTE:</span> We recommend avoiding running the following build command. The code in the useeio-widgets repo currently causes a runaway processor in the browser when used with the "localsite" repo. To avoid, the "localsite/build" folder contains the recent code from [Recent build 2](https://thetisiboth.github.io/useeio-widget-builds/).
-->

<!--
No longer necessary
We switched from recent node-v20.10.0 to older 12.22.6 to avoid this error:
error:0308010C:digital envelope routines::unsupported

nvm install 12.22.6
nvm use 12.22.6
-->

```
npm run build
```

This will create or update the `build` folder and a `lib` sub-folder containing small JavaScript libraries used by the USEEIO widgets.  

The build folder contains [example HTML files](../build/) demonstrating usage of the widgets, but you'll need the API files too...
<br>  

<!--
Note: After building, remove   a { color: #555; } in widget.css.

To Do: Surround all USEEIO widgets with a class called .ioWidget and update widget.css to limit to .ioWidget.
-->

#### Manually add JSON files for API

**Important:** Copy the io/build/api files into your useeio-widgets/build/api folder.

The JSON files have been pre-generated for you using the JSON dump cmd in the [useeio.js repo](https://github.com/modelearth/useeio.js/).
<br>

#### Now View in Brower

You can view in your webroot if you use our [server setup cmd](../../localsite/start/steps)

[http://localhost:8887/useeio-widgets/build](http://localhost:8887/useeio-widgets/build)  

Or start a server pointed directly into your useeio-widgets folder. Then open the default port (8080) at http://localhost:8080 in your browser to see the widgets.  Your command window will become inoperable since it is running a server.  Open a new command window (by clicking plus) to issue further commands.  

```
npm run server
```

Or use this standard command (coming soon, Fanyi is adding)
```
npm run dev
```
<br>


### View your Edits

Use the up-arrow to run the build line after making a change.  

	npm run build

Learn more in the VS Code [Node.js Tutorial](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial). 
<br>



<span class="local-block" style="display:none;">
<hr><br>
<h1>API Key (should not be needed)</h1>
The production API requires an API key which we store in a [private Google Doc](https://docs.google.com/document/d/1FsIATg3XS-ZlyrNabZBIR9mdhSTWv22-yp0ZCyF80rg/edit?pli=1)
<br><hr>
</span>

<!--
You can skip this step. We've already populated the **io/build/api folder** for you.

The generated .json files output from the USEEIO API load faster and you can work locally on an airplane.

There is also a staging instance of the [USEEIO API](https://github.com/USEPA/USEEIO_API). However this server is often shutdown and will return a 404 error at <a href="https://smmtool.app.cloud.gov/" target="_blank">endpoint overview</a>. Every 90 days the staging server requires a reboot. You can email the [contact person](https://github.com/USEPA/USEEIO_API/wiki/People#Contact) to restart.

Again, you don't need to run this since we're using a json instance of the API.

This one include 5 state files and will soon include all 50.

	npm run download -- --endpoint https://smmtool.app.cloud.gov/api

Running the above mirrors API data into the static json files in the `build/api` folder. 

You may optionally [request the key](https://github.com/USEPA/USEEIO_API/wiki/Use-the-API) to the production API to run the following (Interns may use the key in our Google Doc).


As of March 2024, this one does not yet contain any state folders, nor the GHG folder.
```
npm run download -- --endpoint https://api.edap-cluster.com/useeio/api --apikey [Add API key here]
```
Replace USEEIOv2.0.1-411 in the "io" repo if a newer version is generated.

Learn more about [using the USEEIO API](https://github.com/USEPA/USEEIO_API/wiki/Use-the-API)
-->


# Contribute Updates

To work with us on updates, fork the [model.earth fork of useeio-widgets](https://github.com/modelearth/useeio-widgets/)

Edit the React files that reside in useeio-widgets/src.
Files in useeio-widgets/build are overwritten when you run the build.

<!-- Fanyi says LiveReload didn't provide refresh
Build when editing - [Amplify React App](../../aws/amplify/) uses `npm start` to build on-the-fly.  
Another option: [LiveReload](https://www.logicbig.com/tutorials/misc/typescript/project-auto-refresh-with-live-reload.html) might refresh your browser as you edit.  
Install using the [Extension Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery)  (Please update our documentation, not yet confirmed). 
-->

[Python Samples](../../community/resources/useeio) and [Contributing using RStudio](../naics).

<!--
From the following:
https://stackoverflow.com/questions/18428374/commands-not-found-on-zsh

1. Use a good text editor like VS Code and open your .zshrc file (should be in your home directory. 

Command+Shift+H
Command+Shift+Dot

if you don't see it, be sure to right-click in the file folder when opening and choose option to 'show hidden files').

2. find where it states: export PATH=a-bunch-of-paths-separated-by-colons:

3. insert this at the end of the line, before the end-quote: :$HOME/.local/bin

-->
<br>


# FAQs

### Why are some values in the demand vector $0 (blank)?

In some cases there is no final demand for the respective commodity and the production of that commodity is only driven by intermediate industry transactions (note that there are different demand vectors in the model and that the selected demand can be controlled via the configuration attributes). 


### How is code formatting enforced?

The `.editorconfig` file contains the formatting settings. Modern editors have plugins for checking EditorConfig settings. This maintains consistency so we can see in the diffs what changed. There is also a ESLint configuration in the project for other settings like semicolon rules, etc.


[Active Projects](/projects/) 
