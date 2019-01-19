(function(){
  window.twx = window.twx || {};

  var requires = ["ionic","twx.byoc","ngJustGage","common-html-widgets-ng"];
  var twxViewControllersModule = angular.module('twxViewControllers', requires);
  twxViewControllersModule.run(function($templateCache) {
    //Inject an ng-if for preview cases where the web-assembly module needs time to load & compile async.
    //Delays loading model-items until its ready and the model tags are processed.
    
      var viewHTML =  '<ion-view hasGridEvenRows="false" view-type="ar" twx-view="Home" view-title="Home" ctrl-name="Home_TwxViewController" can-swipe-back="false"><div class="overlay ng-hide" ng-show=""></div><ion-content scroll="false" ><twx-widget widget-id="view-1" original-widget="twx-view" widget-name="view-1"><twx-widget-property name="widgetName" datatype="string" value="view-1"></twx-widget-property><twx-widget-property name="viewtype" datatype="string" value="ar"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><twx-container-content class="{{me.class}}"><twx-widget widget-id="3DContainer-1" original-widget="twx-dt-view" widget-name="3D Container"><twx-widget-service name="unlockCameraAndOrientation"></twx-widget-service><twx-widget-service name="lockCameraAndOrientation"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="3D Container"></twx-widget-property><twx-widget-property name="far" datatype="number" value="200"></twx-widget-property><twx-widget-property name="near" datatype="number" value="0.01"></twx-widget-property><twx-widget-property name="dropshadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="enabletrackingevents" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="camera" datatype="json" value="{}"></twx-widget-property><twx-widget-property name="persistmap" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="src" datatype="string" value="TW-VuMark.xml"></twx-widget-property><twx-widget-property name="extendedtracking" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><twx-dt-view near="0.01" far="200" extendedtracking="true" persistmap="false" dropshadow="{{me.dropshadow}}">\n'+
'     <twx-dt-tracker id="tracker1" enabletrackingevents="false">\n'+
'        <twx-container-content>\n'+
'           <div class="targetGuide" ng-class="targetGuideClass" ng-hide="hideTargetGuide">\n'+
'               <div class="bracket-top-left"></div>\n'+
'               <div class="bracket-top-right"></div>\n'+
'               <div class="bracket-bottom-right"></div>\n'+
'               <div class="bracket-bottom-left"></div>\n'+
'               <div class="targetGuideText hint" ng-hide="hideTargetGuide">{{targetGuideHint}}</div>\n'+
'           </div>\n'+
'        <twx-widget widget-id="imageTarget-2" original-widget="twx-dt-target-image" widget-name="cereal-Target"><twx-widget-event name="trackingacquired" value="getDataFromTarget()"></twx-widget-event><twx-widget-property name="widgetName" datatype="string" value="cereal-Target"></twx-widget-property><twx-widget-property name="stationary" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="trackingIndicator" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="istracked" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="placeholder_img" datatype="" value="/extensions/images/placeholder_img_target.svg"></twx-widget-property><twx-widget-property name="targetId" datatype="string" value="e0a28bbd-1d2f-414f-a3bb-24de3e60d0f1"></twx-widget-property><twx-widget-property name="dataset" datatype="resource_url" value="app/resources/_generated_/itg/e0a28bbd-1d2f-414f-a3bb-24de3e60d0f1.dat"></twx-widget-property><twx-widget-property name="rz" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="ry" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="rx" datatype="number" value="-90.00"></twx-widget-property><twx-widget-property name="z" datatype="number" value="0"></twx-widget-property><twx-widget-property name="y" datatype="number" value="0"></twx-widget-property><twx-widget-property name="x" datatype="number" value="0"></twx-widget-property><twx-widget-property name="width" datatype="number" value="0.0254"></twx-widget-property><twx-widget-property name="url" datatype="resource_url" value="app/resources/Uploaded/IMG_20190118_165323032.jpg"></twx-widget-property><twx-widget-content><twx-dt-target id="imageTarget-2" guide-src="{{me.url || me.placeholder_img }}" size="{{me.width}}" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" src="vuforia-image:///app/resources/_generated_/itg/e0a28bbd-1d2f-414f-a3bb-24de3e60d0f1?id=e0a28bbd-1d2f-414f-a3bb-24de3e60d0f1" targetid="{{me.targetId}}" istracked="{{me.istracked}}" trackingindicator="{{me.trackingIndicator}}" stationary="{{me.stationary}}"><twx-dt-image id="imageTarget-2-targetTracer" sz="1" sy="1" sx="1" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" hidden="{{!me.trackingIndicator}}" billboard="{{me.billboard}}" occlude="{{me.occlude}}" decal="{{me.decal}}" shader="imageRecogniser;active f {{pulse}}; imageWidth f {{tracerWidth}}; imageHeight f {{tracerHeight}}" height="{{me.width}}" width="{{me.width}}" src="img/recognisedSquare.png?name=gradientSampler" targetid="{{me.targetId}}" stationary="{{me.stationary}}"></twx-dt-image></twx-dt-target></twx-widget-content></twx-widget><twx-widget widget-id="model-1" original-widget="twx-dt-model" widget-name="bear-Model"><twx-widget-service name="stop"></twx-widget-service><twx-widget-service name="rewind"></twx-widget-service><twx-widget-service name="reset"></twx-widget-service><twx-widget-service name="playAll"></twx-widget-service><twx-widget-service name="play"></twx-widget-service><twx-widget-service name="forward"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="bear-Model"></twx-widget-property><twx-widget-property name="sequencePartIds" datatype="string"></twx-widget-property><twx-widget-property name="playing" datatype="boolean"></twx-widget-property><twx-widget-property name="stepDescription" datatype="string"></twx-widget-property><twx-widget-property name="stepName" datatype="string"></twx-widget-property><twx-widget-property name="currentStep" datatype="number"></twx-widget-property><twx-widget-property name="steps" datatype="number"></twx-widget-property><twx-widget-property name="showSequenceInCanvas" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="sequence" datatype="resource_url" value=""></twx-widget-property><twx-widget-property name="sequenceList" datatype="infotable"></twx-widget-property><twx-widget-property name="shader" datatype="string" value=""></twx-widget-property><twx-widget-property name="translucent" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="opacity" datatype="number" value="1"></twx-widget-property><twx-widget-property name="decal" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="occlude" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="forceHidden" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="rz" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="ry" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="rx" datatype="number" value="-90.00"></twx-widget-property><twx-widget-property name="z" datatype="number" value="0.0157"></twx-widget-property><twx-widget-property name="y" datatype="number" value="-0.0032"></twx-widget-property><twx-widget-property name="x" datatype="number" value="0.0297"></twx-widget-property><twx-widget-property name="scale" datatype="string" value="0.0015"></twx-widget-property><twx-widget-property name="src" datatype="resource_url" value="app/resources/Uploaded/BlackBear.pvz"></twx-widget-property><twx-widget-content><twx-dt-model id="model-1" ng-src="{{me.src | trustUrl}}" src="app/resources/Uploaded/BlackBear.pvz" sx="{{me.scale.split(&apos; &apos;)[0] || me.scale}}" sy="{{me.scale.split(&apos; &apos;)[1] || me.scale}}" sz="{{me.scale.split(&apos; &apos;)[2] || me.scale}}" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" hidden="{{!app.fn.isTrue(me.visible)}}" force-hidden="{{me.forceHidden}}" occlude="{{me.occlude}}" decal="{{me.decal}}" opacity="{{me.opacity}}" phantom="{{!me.translucent}}" shader="{{me.shader}}" sequencelist="{{me.sequenceList}}" sequence="{{me.sequence}}" showsequenceincanvas="{{me.showSequenceInCanvas}}" steps="{{me.steps}}" currentstep="{{me.currentStep}}" stepname="{{me.stepName}}" stepdescription="{{me.stepDescription}}" playing="{{me.playing}}" sequencepartids="{{me.sequencePartIds}}"><twx-container-content></twx-container-content></twx-dt-model></twx-widget-content></twx-widget><twx-widget widget-id="3DLabel-2" original-widget="twx-dt-label" widget-name="3DLabel-2"><twx-widget-property name="widgetName" datatype="string" value="3DLabel-2"></twx-widget-property><twx-widget-property name="shader" datatype="string" value=""></twx-widget-property><twx-widget-property name="pivot" datatype="select" value="5"></twx-widget-property><twx-widget-property name="opacity" datatype="number" value="1"></twx-widget-property><twx-widget-property name="experimentalOneSided" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="decal" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="occlude" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="billboard" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="rz" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="ry" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="rx" datatype="number" value="-90.00"></twx-widget-property><twx-widget-property name="z" datatype="number" value="-0.0154"></twx-widget-property><twx-widget-property name="y" datatype="number" value="0.0000"></twx-widget-property><twx-widget-property name="x" datatype="number" value="0.0253"></twx-widget-property><twx-widget-property name="scale" datatype="string" value="0.1000"></twx-widget-property><twx-widget-property name="fontOutlineColor" datatype="string"></twx-widget-property><twx-widget-property name="fontColor" datatype="string"></twx-widget-property><twx-widget-property name="fontFamily" datatype="string"></twx-widget-property><twx-widget-property name="textprops" datatype="string" value=""></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="text"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="width" datatype="number" value=""></twx-widget-property><twx-widget-property name="height" datatype="number" value=""></twx-widget-property><twx-widget-property name="text" datatype="string" value="Impact"></twx-widget-property><twx-widget-content><twx-dt-label id="3DLabel-2" text="{{me.text}}" height="{{me.height}}" width="{{me.width}}" class="basic-3d-state-formatting {{me.class}}" enablestateformatting="{{me.enableStateFormatting}}" stateformatvalue="{{me.stateFormatValue}}" stateformat="{{me.stateFormat}}" textattrs="{{me.textprops}}" fontfamily="{{me.fontFamily}}" fontcolor="{{me.fontColor}}" fontoutlinecolor="{{me.fontOutlineColor}}" sx="{{me.scale.split(&apos; &apos;)[0] || me.scale}}" sy="{{me.scale.split(&apos; &apos;)[1] || me.scale}}" sz="{{me.scale.split(&apos; &apos;)[2] || me.scale}}" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" hidden="{{!app.fn.isTrue(me.visible)}}" billboard="{{me.billboard}}" occlude="{{me.occlude}}" decal="{{me.decal}}" experimental-one-sided="{{me.experimentalOneSided}}" opacity="{{me.opacity}}" pivot="{{me.pivot}}" shader="{{me.shader}}"></twx-dt-label></twx-widget-content></twx-widget><twx-widget widget-id="3DGauge-1" original-widget="twx-dt-sensor" widget-name="3DGauge-1"><twx-widget-property name="widgetName" datatype="string" value="3DGauge-1"></twx-widget-property><twx-widget-property name="width" datatype="number" value=""></twx-widget-property><twx-widget-property name="height" datatype="number" value=""></twx-widget-property><twx-widget-property name="shader" datatype="string" value=""></twx-widget-property><twx-widget-property name="pivot" datatype="select" value="5"></twx-widget-property><twx-widget-property name="opacity" datatype="number" value="1"></twx-widget-property><twx-widget-property name="experimentalOneSided" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="decal" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="occlude" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="billboard" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="canvaswidth" datatype="number" value="128"></twx-widget-property><twx-widget-property name="canvasheight" datatype="number" value="128"></twx-widget-property><twx-widget-property name="canvasgrowthoverride" datatype="string" value="image+text"></twx-widget-property><twx-widget-property name="imagey" datatype="number" value="0"></twx-widget-property><twx-widget-property name="imagex" datatype="number" value="0"></twx-widget-property><twx-widget-property name="rz" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="ry" datatype="number" value="0.00"></twx-widget-property><twx-widget-property name="rx" datatype="number" value="-90.00"></twx-widget-property><twx-widget-property name="z" datatype="number" value="0.0139"></twx-widget-property><twx-widget-property name="y" datatype="number" value="0.0027"></twx-widget-property><twx-widget-property name="x" datatype="number" value="0.0026"></twx-widget-property><twx-widget-property name="scale" datatype="string" value="0.0600"></twx-widget-property><twx-widget-property name="imageattrs" datatype="string" value=""></twx-widget-property><twx-widget-property name="texty" datatype="number" value="94"></twx-widget-property><twx-widget-property name="textx" datatype="number" value="64"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="text"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="textattrs" datatype="string" value="fill:rgba(255, 255, 255, 1);textbaseline:middle;textalign:center"></twx-widget-property><twx-widget-property name="fontsize" datatype="string" value="40px"></twx-widget-property><twx-widget-property name="font" datatype="string" value="Arial"></twx-widget-property><twx-widget-property name="src" datatype="resource_url" value="app/resources/Default/vu_gauge1.svg"></twx-widget-property><twx-widget-property name="text" datatype="string" value="300"></twx-widget-property><twx-widget-content><twx-dt-sensor id="3DGauge-1" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" sx="{{me.scale.split(&apos; &apos;)[0] || me.scale}}" sy="{{me.scale.split(&apos; &apos;)[1] || me.scale}}" sz="{{me.scale.split(&apos; &apos;)[2] || me.scale}}" billboard="{{me.billboard}}" occlude="{{me.occlude}}" opacity="{{me.opacity}}" pivot="{{me.pivot}}" decal="{{me.decal}}" canvasheight="{{me.canvasheight}}" canvaswidth="{{me.canvaswidth}}" height="{{me.height}}" width="{{me.width}}" imageattrs="{{app.fn.buildImageAttrs(me.imagex,me.imagey,me.imageattrs)}}" textattrs="{{app.fn.buildTextAttrs(me.textx,me.texty,me.font,me.fontsize,me.textattrs)}}" canvasgrowthoverride="{{me.canvasgrowthoverride}}" textx="{{me.textx}}" texty="{{me.texty}}" imagex="{{me.imagex}}" imagey="{{me.imagey}}" text="{{me.text}}" ng-src="{{me.src | trustUrl}}" src="app/resources/Default/vu_gauge1.svg" shader="{{me.shader}}" hidden="{{!app.fn.isTrue(me.visible)}}" experimental-one-sided="{{me.experimentalOneSided}}"></twx-dt-sensor></twx-widget-content></twx-widget></twx-container-content>\n'+
'     </twx-dt-tracker>\n'+
'</twx-dt-view></twx-widget-content></twx-widget><twx-widget widget-id="2DOverlay-1" original-widget="twx-overlay" widget-name="2D Overlay"><twx-widget-property name="widgetName" datatype="string" value="2D Overlay"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><div class="twx-2d-overlay {{me.class}}" ng-show="app.fn.isTrue(me.visible)"><twx-container-content><div class="panel undefined top" style=" "><twx-widget widget-id="button-1" original-widget="twx-button" widget-name="button-1"><twx-widget-property name="widgetName" datatype="string" value="button-1"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="text" datatype="string" value="Button"></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content></twx-widget><twx-widget widget-id="gauge-1" original-widget="twx-gauge" widget-name="gauge-1"><twx-widget-service name="updateChart"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="gauge-1"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="height" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="width" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="backgroundcolor" datatype="string" value="#edebeb"></twx-widget-property><twx-widget-property name="valuecolor" datatype="string" value=""></twx-widget-property><twx-widget-property name="valuefontcolor" datatype="string" value="#000000"></twx-widget-property><twx-widget-property name="titlefontcolor" datatype="string" value="#000000"></twx-widget-property><twx-widget-property name="hideinnershadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="donutstartangle" datatype="number" value="0"></twx-widget-property><twx-widget-property name="donut" datatype="number" value="180"></twx-widget-property><twx-widget-property name="titleposition" datatype="string" value="below"></twx-widget-property><twx-widget-property name="title" datatype="string" value=""></twx-widget-property><twx-widget-property name="humanFriendlyDecimal" datatype="number" value="0"></twx-widget-property><twx-widget-property name="value" datatype="string" value="60"></twx-widget-property><twx-widget-property name="max" datatype="string" value="100"></twx-widget-property><twx-widget-property name="min" datatype="string" value="0"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="value"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div class="gage-container" style="width: 100%; height: 100%;"><just-gage ng-show="app.fn.isTrue(me.visible)" id="gauge-cc19f62d-a886-7336-19af-c67be9f468c7" class="{{me.class}}" donut="me.donut" hideinnershadow="me.hideinnershadow" donutstartangle="me.donutstartangle" titleposition="me.titleposition" valuecolor="me.valuecolor" backgroundcolor="me.backgroundcolor" valuefontcolor="me.valuefontcolor" titlefontcolor="me.titlefontcolor" max="me.max" min="me.min" value="{{me.value}}" title="" width="100%" height="100%" options="{humanFriendlyDecimal: 0, humanFriendly: undefined}"></just-gage></div></twx-widget-content></twx-widget></div><div class="panel body undefined"><div class="panel undefined left" style=" "><twx-widget widget-id="label-1" original-widget="twx-label" widget-name="label-1"><twx-widget-property name="widgetName" datatype="string" value="label-1"></twx-widget-property><twx-widget-property name="wrap" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="padding" datatype="string"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string" value="text"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string" value="simple-label"></twx-widget-property><twx-widget-property name="text" datatype="string" value="Label"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" class="labelWidget {{me.class}} wrapSettingsClass" style="" twx-native-events="">{{me.text}}</div></twx-widget-content></twx-widget></div><div class="panel undefined center" style=" "><twx-widget widget-id="list-1" original-widget="twx-list" widget-name="list-1" scrollable="true"><twx-widget-property name="widgetName" datatype="string" value="list-1"></twx-widget-property><twx-widget-property name="itempadding" datatype="string" value=""></twx-widget-property><twx-widget-property name="scrollable" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="label" datatype="string"></twx-widget-property><twx-widget-property name="multiselect" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="list" datatype="infotable"></twx-widget-property><twx-widget-content><ion-list ng-show="app.fn.isTrue(me.visible)" class=""><ion-item ng-repeat="item in me.list" style="" class="item {{me.class}}" ng-click="app.fn.clickItemInRepeater(item,(me.list || parentList.list),(me.multiselect || parentList.multiselect));fireEvent(&apos;itemclick&apos;, item);" ng-class="{selected: item._isSelected}">{{item[me.label || parentList.label]}}</ion-item></ion-list></twx-widget-content></twx-widget><twx-widget widget-id="repeater-1" original-widget="twx-repeater" widget-name="repeater-1" scrollable="true"><twx-widget-property name="widgetName" datatype="string" value="repeater-1"></twx-widget-property><twx-widget-property name="wrap" datatype="string" value="nowrap"></twx-widget-property><twx-widget-property name="alignment" datatype="string" value="stretch"></twx-widget-property><twx-widget-property name="justification" datatype="string" value="flex-start"></twx-widget-property><twx-widget-property name="direction" datatype="string" value="column"></twx-widget-property><twx-widget-property name="scrollable" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="multiselect" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="selection" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="width" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="repeatercontentmargin" datatype="string"></twx-widget-property><twx-widget-property name="repeatercontentpadding" datatype="string"></twx-widget-property><twx-widget-property name="repeatercontentheight" datatype="string" value="auto"></twx-widget-property><twx-widget-property name="repeatercontentwidth" datatype="string" value="100%"></twx-widget-property><twx-widget-property name="repeatercontentclass" datatype="string"></twx-widget-property><twx-widget-property name="data" datatype="infotable"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" class="repeater {{me.class}}  " style="flex-wrap: {{me.wrap}}; -webkit-flex-wrap: {{me.wrap}}; width: {{me.width}};"><div class="repeater-cell {{me.repeatercontentclass}} ng-class:{&apos;selected&apos;: app.fn.isItemSelected(item)}" ng-click="app.fn.clickItemInRepeater(item,me.data,me.multiselect);fireEvent(&apos;itemclick&apos;, item,me.data,me.multiselect); " style="height: {{me.repeatercontentheight}}; display: flex; justify-content: {{me.justification}};width: {{me.repeatercontentwidth}}; " ng-repeat="item in me.data"><twx-repeater-content style="display: flex; flex-direction: {{me.direction}}; justify-content: {{me.justification}}; -webkit-justify-content: {{me.justification}}; align-self: {{me.alignment}}; width: {{me.repeatercontentwidth}};"></twx-repeater-content></div></div></twx-widget-content></twx-widget><twx-widget widget-id="textArea-1" original-widget="twx-textarea" widget-name="textArea-1"><twx-widget-property name="widgetName" datatype="string" value="textArea-1"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="padding" datatype="string" value=""></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="maxlength" datatype="number"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="readonly" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="rows" datatype="number" value="3"></twx-widget-property><twx-widget-property name="label" datatype="string" value=""></twx-widget-property><twx-widget-property name="placeholder" datatype="string" value=""></twx-widget-property><twx-widget-property name="text" datatype="string" value="Air Quality: 5"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" class="twxTextArea {{me.class}}" style="margin:; padding: ;" twx-native-events="click"><label>{{me.label}}</label><textarea maxlength="{{me.maxlength}}" rows="{{me.rows}}" placeholder="{{me.placeholder}}" ng-disabled="app.fn.isTrue(me.disabled)" ng-model="me.text" onchange="twx.app.fn.triggerStudioEvent(event, &apos;change&apos;, event.target.value)"></textarea></div></twx-widget-content></twx-widget><twx-widget widget-id="dataGrid-1" original-widget="twx-data-grid" widget-name="dataGrid-1"><twx-widget-property name="widgetName" datatype="string" value="dataGrid-1"></twx-widget-property><twx-widget-property name="cellClass" datatype="string" value=""></twx-widget-property><twx-widget-property name="rowClass" datatype="string" value=""></twx-widget-property><twx-widget-property name="headerClass" datatype="string" value=""></twx-widget-property><twx-widget-property name="stateFormat" datatype="string"></twx-widget-property><twx-widget-property name="stateFormatValue" datatype="string"></twx-widget-property><twx-widget-property name="enableStateFormatting" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="class" datatype="string" value=""></twx-widget-property><twx-widget-property name="label" datatype="string" value="Label"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="data" datatype="columns" value=""></twx-widget-property><twx-widget-content>        <table ng-show="app.fn.isTrue(me.visible)" class="twx-data-grid {{me.class}}">          <thead class="{{me.headerClass}}">             <tr>            </tr>          </thead>          <tbody>          <tr ng-repeat="item in me.data" class="item-row {{me.rowClass}}" ng-class="{&apos;{{&apos;selected &apos;}}&apos;: item._isSelected}" ng-click="app.fn.clickItemInRepeater(item,me.data,me.multiselect);fireEvent(&apos;itemclick&apos;, item);">              <twx-repeater-content></twx-repeater-content>            </tr>          </tbody>        </table></twx-widget-content></twx-widget><twx-widget widget-id="hyperlink-1" original-widget="twx-hyperlink" widget-name="hyperlink-1"><twx-widget-property name="widgetName" datatype="string" value="hyperlink-1"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="url" datatype="string" value="https://media.giphy.com/media/uWBgDgyBk9lWLXGAC0/giphy.gif"></twx-widget-property><twx-widget-property name="text" datatype="string" value="Hyperlink Text"></twx-widget-property><twx-widget-content><a twx-link="" class="twxHyperlink {{me.class}}" twx-native-events="" target="_blank" ng-href="{{me.url}}" ng-show="app.fn.isTrue(me.visible)" style="">{{me.text}}</a></twx-widget-content></twx-widget></div><div class="panel undefined right" style=" "></div></div><div class="panel undefined bottom" style=" "><twx-widget widget-id="gridLayout-1" original-widget="twx-gridlayout" widget-name="gridLayout-1"><twx-widget-property name="widgetName" datatype="string" value="gridLayout-1"></twx-widget-property><twx-widget-property name="evenlyspacedrows" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="margin" datatype="string" value=""></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><div ng-show="app.fn.isTrue(me.visible)" even-rows="false" class="gridLayout {{me.class}}" style="padding:;"><twx-container-content><div class="row undefined" style=""><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"></div><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: center;padding: 0px;flex-wrap: wrap;"><twx-widget widget-id="button-2" original-widget="twx-button" widget-name="button-2"><twx-widget-event name="click" value="myfunction()"></twx-widget-event><twx-widget-property name="widgetName" datatype="string" value="button-2"></twx-widget-property><twx-widget-property name="margin" datatype="string"></twx-widget-property><twx-widget-property name="disabled" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="text" datatype="string" value="Button"></twx-widget-property><twx-widget-content><button style="" ng-show="app.fn.isTrue(me.visible)" ng-disabled="app.fn.isTrue(me.disabled)" class="button {{me.class}}" twx-native-events="">{{me.text}}</button></twx-widget-content></twx-widget></div><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"></div><div class="col undefined" style="flex-direction:column;justify-content: flex-start;align-items: stretch;padding: 0px;flex-wrap: wrap;"></div></div></twx-container-content></div></twx-widget-content></twx-widget></div></twx-container-content></div></twx-widget-content></twx-widget></twx-container-content></twx-widget-content><twx-fragment-parameters></twx-fragment-parameters><twx-view-data></twx-view-data></twx-widget></ion-content></ion-view>\n';
      if (twx.app.isPreview() && viewHTML.indexOf('view-type="ar"') > 0) {
        viewHTML = viewHTML.replace(/<twx-dt-modelitem /ig, '<twx-dt-modelitem ng-if="$root.thingViewReady !== false" ');
      }
      $templateCache.put('app/components/Home.html', viewHTML);
    
      var viewHTML =  '<ion-view hasGridEvenRows="false" view-type="ar" twx-view="view-2" view-title="view-2" ctrl-name="view-2_TwxViewController" can-swipe-back="false"><div class="overlay ng-hide" ng-show=""></div><ion-content scroll="false" ><twx-widget widget-id="view-1" original-widget="twx-view" widget-name="view-1"><twx-widget-property name="widgetName" datatype="string" value="view-1"></twx-widget-property><twx-widget-property name="viewtype" datatype="string" value="ar"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-content><twx-container-content class="{{me.class}}"><twx-widget widget-id="3DContainer-1" original-widget="twx-dt-view" widget-name="3D Container"><twx-widget-service name="unlockCameraAndOrientation"></twx-widget-service><twx-widget-service name="lockCameraAndOrientation"></twx-widget-service><twx-widget-property name="widgetName" datatype="string" value="3D Container"></twx-widget-property><twx-widget-property name="far" datatype="number" value="200"></twx-widget-property><twx-widget-property name="near" datatype="number" value="0.01"></twx-widget-property><twx-widget-property name="dropshadow" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="enabletrackingevents" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="camera" datatype="json" value="{}"></twx-widget-property><twx-widget-property name="persistmap" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="src" datatype="string" value="TW-VuMark.xml"></twx-widget-property><twx-widget-property name="extendedtracking" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><twx-dt-view near="0.01" far="200" extendedtracking="true" persistmap="false" dropshadow="{{me.dropshadow}}">\n'+
'     <twx-dt-tracker id="tracker1" enabletrackingevents="false">\n'+
'        <twx-container-content>\n'+
'           <div class="targetGuide" ng-class="targetGuideClass" ng-hide="hideTargetGuide">\n'+
'               <div class="bracket-top-left"></div>\n'+
'               <div class="bracket-top-right"></div>\n'+
'               <div class="bracket-bottom-right"></div>\n'+
'               <div class="bracket-bottom-left"></div>\n'+
'               <div class="targetGuideText hint" ng-hide="hideTargetGuide">{{targetGuideHint}}</div>\n'+
'           </div>\n'+
'        <twx-widget widget-id="imageTarget-1" original-widget="twx-dt-target-image" widget-name="imageTarget-1"><twx-widget-property name="widgetName" datatype="string" value="imageTarget-1"></twx-widget-property><twx-widget-property name="stationary" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="trackingIndicator" datatype="boolean" value="true"></twx-widget-property><twx-widget-property name="istracked" datatype="boolean" value="false"></twx-widget-property><twx-widget-property name="placeholder_img" datatype="" value="/extensions/images/placeholder_img_target.svg"></twx-widget-property><twx-widget-property name="targetId" datatype="string" value="cf8ee1f1-b821-465c-938b-aae3283322e7"></twx-widget-property><twx-widget-property name="dataset" datatype="resource_url" value="app/resources/_generated_/itg/cf8ee1f1-b821-465c-938b-aae3283322e7.dat"></twx-widget-property><twx-widget-property name="rz" datatype="number" value="0"></twx-widget-property><twx-widget-property name="ry" datatype="number" value="-90"></twx-widget-property><twx-widget-property name="rx" datatype="number" value="-90"></twx-widget-property><twx-widget-property name="z" datatype="number" value="0"></twx-widget-property><twx-widget-property name="y" datatype="number" value="0"></twx-widget-property><twx-widget-property name="x" datatype="number" value="0"></twx-widget-property><twx-widget-property name="width" datatype="number" value="0.0254"></twx-widget-property><twx-widget-property name="url" datatype="resource_url" value="app/resources/Uploaded/IMG_20190118_172315906.jpg"></twx-widget-property><twx-widget-content><twx-dt-target id="imageTarget-1" guide-src="{{me.url || me.placeholder_img }}" size="{{me.width}}" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" src="vuforia-image:///app/resources/_generated_/itg/cf8ee1f1-b821-465c-938b-aae3283322e7?id=cf8ee1f1-b821-465c-938b-aae3283322e7" targetid="{{me.targetId}}" istracked="{{me.istracked}}" trackingindicator="{{me.trackingIndicator}}" stationary="{{me.stationary}}"><twx-dt-image id="imageTarget-1-targetTracer" sz="1" sy="1" sx="1" x="{{me.x}}" y="{{me.y}}" z="{{me.z}}" rx="{{me.rx}}" ry="{{me.ry}}" rz="{{me.rz}}" hidden="{{!me.trackingIndicator}}" billboard="{{me.billboard}}" occlude="{{me.occlude}}" decal="{{me.decal}}" shader="imageRecogniser;active f {{pulse}}; imageWidth f {{tracerWidth}}; imageHeight f {{tracerHeight}}" height="{{me.width}}" width="{{me.width}}" src="img/recognisedSquare.png?name=gradientSampler" targetid="{{me.targetId}}" stationary="{{me.stationary}}"></twx-dt-image></twx-dt-target></twx-widget-content></twx-widget></twx-container-content>\n'+
'     </twx-dt-tracker>\n'+
'</twx-dt-view></twx-widget-content></twx-widget><twx-widget widget-id="2DOverlay-1" original-widget="twx-overlay" widget-name="2D Overlay"><twx-widget-property name="widgetName" datatype="string" value="2D Overlay"></twx-widget-property><twx-widget-property name="class" datatype="string"></twx-widget-property><twx-widget-property name="visible" datatype="boolean" value="true"></twx-widget-property><twx-widget-content><div class="twx-2d-overlay {{me.class}}" ng-show="app.fn.isTrue(me.visible)"><twx-container-content><div class="panel undefined top" style=" "></div><div class="panel body undefined"><div class="panel undefined left" style=" "></div><div class="panel undefined center" style=" "></div><div class="panel undefined right" style=" "></div></div><div class="panel undefined bottom" style=" "></div></twx-container-content></div></twx-widget-content></twx-widget></twx-container-content></twx-widget-content><twx-fragment-parameters></twx-fragment-parameters><twx-view-data></twx-view-data></twx-widget></ion-content></ion-view>\n';
      if (twx.app.isPreview() && viewHTML.indexOf('view-type="ar"') > 0) {
        viewHTML = viewHTML.replace(/<twx-dt-modelitem /ig, '<twx-dt-modelitem ng-if="$root.thingViewReady !== false" ');
      }
      $templateCache.put('app/components/view-2.html', viewHTML);
    

    
  });

  

  twxViewControllersModule.controller('Home_TwxViewController',
      function ($scope, $element, $attrs, $timeout, $interval, $http, $ionicPopup, $ionicPopover, $stateParams, $location, $rootScope, tml3dRenderer, $injector, $sce) {
    $scope.app = twx.appScope;
    $scope.device = twx.device;
    $scope.view = {
        mdl: {
            custom: {}
        },
        wdg: {},
        fn: {},
        evt: {},
        prm: {},
        view: {}
    };

    var myWidgets = '';
    var activeWidgetEvents = {};
    var customWidgetEventListeners = [];

    if( $attrs['twxView'] !== undefined && $attrs['twxView'].length > 0 ) {
        $scope.app.view = $scope.app.view || {};
        $scope.app.view[$attrs['twxView']] = $scope.view;
    }

    this.setProperty = function(widgetProperty,value) {
        $scope.view.wdg[$attrs.widgetId][widgetProperty] = value;

    };

    this.addWidget = function(widgetScope,widgetElem,widgetAttrs) {
        var widgetId = widgetAttrs['widgetId'] || widgetAttrs['model'];
        var x = $scope;
        $scope.view.wdg = $scope.view.wdg || {};
        $scope.view.wdg[widgetId] = widgetScope[widgetId];
        myWidgets += '|' + widgetId;
        widgetScope['_widgetId'] = widgetId;
        //console.log('twxView --- adding widget "' + widgetId + '" to view - total widgets: ' + myWidgets);
    };

    $scope.getWidgetScope = function(widgetId){
      return $scope.view.wdg[widgetId];
    };

    $scope.getWidgetProp = function (widgetId, prop) {
      var propVal;
      if ($scope.view.wdg[widgetId] && $scope.view.wdg[widgetId][prop]) {
        propVal = $scope.view.wdg[widgetId][prop];
      }
      return propVal;
    };

    $scope.setWidgetProp = function (widgetId, prop, val) {
      if ($scope.view.wdg[widgetId]) {
        $scope.view.wdg[widgetId][prop] = val;
      }
    };

    $scope.addWidgetEventListener = function (widgetId, widgetEvent, callback) {
      customWidgetEventListeners.push({
        widgetId: widgetId,
        widgetEvent: widgetEvent,
        callback: callback
      });
      if (!activeWidgetEvents[widgetEvent]) {
        activeWidgetEvents[widgetEvent] = true;
        $scope.$on(widgetEvent, function (event, args) {
          _.each(customWidgetEventListeners, function (listenerInfo) {
            if (listenerInfo.widgetId == event.targetScope.widgetId && listenerInfo.widgetEvent == event.name) {
              listenerInfo.callback();
            }
          });
        });
      }
    };

    $scope.pulse = 1.0;

    $scope.tracerWidth = 0.0;
    $scope.tracerHeight = 0.0;
    $scope.tracerDimensions = { minX: 0, maxX: 1, minY: 0, maxY: 1 };
    $scope.loadingPromise = null;
    $scope.modelLoaded = $element.find('twx-dt-model').length === 0;
    var modelCount = $element.find('twx-dt-model').length;
    var modelLoadedCount = 0;
    var targets = $element.find('twx-dt-target');

    // hide the target guide initially until the actual image to use is known.
    $scope.hideTargetGuide = true;

    function setImageTrackerTracerDimensions(src) {
      let image = new Image();
      image.onload = () => {
        $scope.tracerWidth = image.width;
        $scope.tracerHeight = image.height;
        $scope.$apply();
      };

      image.src = src;
    }

    var setGuideImageData = function() {
      if (targets[0]) { // assume one target only
        var src = targets[0].getAttribute("src");

        if (src.startsWith("vuforia-vumark://")) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "thingmark";
          $scope.targetGuideHint = "Point camera at ThingMark";
        } else if (src.startsWith('vuforia-image://')) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "imageTarget";
          $scope.targetGuideHint = 'Point camera at image';
          setImageTrackerTracerDimensions(targets[0].getAttribute("guide-src"));
        } else if (!src.startsWith("spatial://")) {
          $scope.hideTargetGuide = false;
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          if (targetGuideDiv) {
            $scope.targetGuideClass = "imagemark";
            targetGuideDiv.style.backgroundImage = "url('" + targets[0].getAttribute("guide-src") + "')";
          }
        }
      }
    };

    $scope.$applyAsync(function() {
      // This has to be invoked asynchronously now to give angular time to digest and interpolate the value of
      // guide-src="{{ ... }}" to the real value.
      setGuideImageData();
    });

    $scope.$on('trackingacquired', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.startLoadingIndicatorIfNeeded(trackedObjects);
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('trackinglost', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('modelLoaded', function (evt, arg) {
      modelLoadedCount++;
      $scope.modelLoaded = true;

      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    // starts the 'spinner' animation around the thing code while the model is loading
    $scope.startLoadingIndicatorIfNeeded = function (trackedObjects) {
      if (!twx.app.fn.isCompatibleObjectsTracked(trackedObjects, targets)) {
        return;
      }

      // Start animation if this is first successful call to startLoadingIndicatorIfNeeded.
      var spinnerInterval = 0.03;
      if ($scope.pulse === 1.0 && $scope.loadingPromise === null) {
        $scope.loadingPromise = $interval(function () {
          // stop the animation after it makes one complete loop around
          if($scope.pulse <= 0) {
            // stop the animation
            $interval.cancel($scope.loadingPromise);
            $scope.loadingPromise = null;
            $scope.pulse = 0;
          }
          $scope.pulse -= spinnerInterval;
        }, 100);
      }
    };

    /**
     * @param trackedObjects [Elements]
     */
    $scope.applyTargetGuideIfNeeded = function(trackedObjects) {
      var hideTargetGuide = twx.app.fn.computeHideTargetGuide(trackedObjects, targets, modelLoadedCount, modelCount);

      $scope.$apply(function () {
        $scope.hideTargetGuide = hideTargetGuide;
      });
    };

    (function($scope, $element, $attrs, $timeout){

      // $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available


//$scope.view.wdg["3DLabel-1"]["visible"]=true

//$scope.view.wdg["3DLabel-1"]["text"]="food is good"

// function   example  ...

//$scope.myfunction =function() {
  
//$scope.view.wdg["3DLabel-1"]["visible"]=true

//$scope.view.wdg["3DLabel-1"]["text"]="food is good"
//}


$scope.getDataFromTarget = function() {
   //$scope.view.wdg["model-1"]["visible"] = true
  //$scope.view.wdg["3DLabel-1"]["text"]="food is good";
}

    }($scope, $element, $attrs, $timeout))

  });

  

  twxViewControllersModule.controller('view-2_TwxViewController',
      function ($scope, $element, $attrs, $timeout, $interval, $http, $ionicPopup, $ionicPopover, $stateParams, $location, $rootScope, tml3dRenderer, $injector, $sce) {
    $scope.app = twx.appScope;
    $scope.device = twx.device;
    $scope.view = {
        mdl: {
            custom: {}
        },
        wdg: {},
        fn: {},
        evt: {},
        prm: {},
        view: {}
    };

    var myWidgets = '';
    var activeWidgetEvents = {};
    var customWidgetEventListeners = [];

    if( $attrs['twxView'] !== undefined && $attrs['twxView'].length > 0 ) {
        $scope.app.view = $scope.app.view || {};
        $scope.app.view[$attrs['twxView']] = $scope.view;
    }

    this.setProperty = function(widgetProperty,value) {
        $scope.view.wdg[$attrs.widgetId][widgetProperty] = value;

    };

    this.addWidget = function(widgetScope,widgetElem,widgetAttrs) {
        var widgetId = widgetAttrs['widgetId'] || widgetAttrs['model'];
        var x = $scope;
        $scope.view.wdg = $scope.view.wdg || {};
        $scope.view.wdg[widgetId] = widgetScope[widgetId];
        myWidgets += '|' + widgetId;
        widgetScope['_widgetId'] = widgetId;
        //console.log('twxView --- adding widget "' + widgetId + '" to view - total widgets: ' + myWidgets);
    };

    $scope.getWidgetScope = function(widgetId){
      return $scope.view.wdg[widgetId];
    };

    $scope.getWidgetProp = function (widgetId, prop) {
      var propVal;
      if ($scope.view.wdg[widgetId] && $scope.view.wdg[widgetId][prop]) {
        propVal = $scope.view.wdg[widgetId][prop];
      }
      return propVal;
    };

    $scope.setWidgetProp = function (widgetId, prop, val) {
      if ($scope.view.wdg[widgetId]) {
        $scope.view.wdg[widgetId][prop] = val;
      }
    };

    $scope.addWidgetEventListener = function (widgetId, widgetEvent, callback) {
      customWidgetEventListeners.push({
        widgetId: widgetId,
        widgetEvent: widgetEvent,
        callback: callback
      });
      if (!activeWidgetEvents[widgetEvent]) {
        activeWidgetEvents[widgetEvent] = true;
        $scope.$on(widgetEvent, function (event, args) {
          _.each(customWidgetEventListeners, function (listenerInfo) {
            if (listenerInfo.widgetId == event.targetScope.widgetId && listenerInfo.widgetEvent == event.name) {
              listenerInfo.callback();
            }
          });
        });
      }
    };

    $scope.pulse = 1.0;

    $scope.tracerWidth = 0.0;
    $scope.tracerHeight = 0.0;
    $scope.tracerDimensions = { minX: 0, maxX: 1, minY: 0, maxY: 1 };
    $scope.loadingPromise = null;
    $scope.modelLoaded = $element.find('twx-dt-model').length === 0;
    var modelCount = $element.find('twx-dt-model').length;
    var modelLoadedCount = 0;
    var targets = $element.find('twx-dt-target');

    // hide the target guide initially until the actual image to use is known.
    $scope.hideTargetGuide = true;

    function setImageTrackerTracerDimensions(src) {
      let image = new Image();
      image.onload = () => {
        $scope.tracerWidth = image.width;
        $scope.tracerHeight = image.height;
        $scope.$apply();
      };

      image.src = src;
    }

    var setGuideImageData = function() {
      if (targets[0]) { // assume one target only
        var src = targets[0].getAttribute("src");

        if (src.startsWith("vuforia-vumark://")) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "thingmark";
          $scope.targetGuideHint = "Point camera at ThingMark";
        } else if (src.startsWith('vuforia-image://')) {
          $scope.hideTargetGuide = false;
          $scope.targetGuideClass = "imageTarget";
          $scope.targetGuideHint = 'Point camera at image';
          setImageTrackerTracerDimensions(targets[0].getAttribute("guide-src"));
        } else if (!src.startsWith("spatial://")) {
          $scope.hideTargetGuide = false;
          var targetGuideDiv = $element[0].querySelector("div.targetGuide");
          if (targetGuideDiv) {
            $scope.targetGuideClass = "imagemark";
            targetGuideDiv.style.backgroundImage = "url('" + targets[0].getAttribute("guide-src") + "')";
          }
        }
      }
    };

    $scope.$applyAsync(function() {
      // This has to be invoked asynchronously now to give angular time to digest and interpolate the value of
      // guide-src="{{ ... }}" to the real value.
      setGuideImageData();
    });

    $scope.$on('trackingacquired', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.startLoadingIndicatorIfNeeded(trackedObjects);
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('trackinglost', function (evt, arg) {
      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    $scope.$on('modelLoaded', function (evt, arg) {
      modelLoadedCount++;
      $scope.modelLoaded = true;

      tml3dRenderer.getTracked(function(trackedObjects) {
        $scope.applyTargetGuideIfNeeded(trackedObjects);
      });
    });

    // starts the 'spinner' animation around the thing code while the model is loading
    $scope.startLoadingIndicatorIfNeeded = function (trackedObjects) {
      if (!twx.app.fn.isCompatibleObjectsTracked(trackedObjects, targets)) {
        return;
      }

      // Start animation if this is first successful call to startLoadingIndicatorIfNeeded.
      var spinnerInterval = 0.03;
      if ($scope.pulse === 1.0 && $scope.loadingPromise === null) {
        $scope.loadingPromise = $interval(function () {
          // stop the animation after it makes one complete loop around
          if($scope.pulse <= 0) {
            // stop the animation
            $interval.cancel($scope.loadingPromise);
            $scope.loadingPromise = null;
            $scope.pulse = 0;
          }
          $scope.pulse -= spinnerInterval;
        }, 100);
      }
    };

    /**
     * @param trackedObjects [Elements]
     */
    $scope.applyTargetGuideIfNeeded = function(trackedObjects) {
      var hideTargetGuide = twx.app.fn.computeHideTargetGuide(trackedObjects, targets, modelLoadedCount, modelCount);

      $scope.$apply(function () {
        $scope.hideTargetGuide = hideTargetGuide;
      });
    };

    (function($scope, $element, $attrs, $timeout){

      // $scope, $element, $attrs, $injector, $sce, $timeout, $http, $ionicPopup, and $ionicPopover services are available




    }($scope, $element, $attrs, $timeout))

  });

  

  var moduleDependencies = ['ionic', 'ngCordova', 'vuforia-angular', 'com.thingworx.services', 'twxRuntime'];
  var app = angular.module('app', moduleDependencies);
    twx = twx || {};
    twx.appXXX = app;

  app.config(function(DataConnectorConfigProvider, $ionicConfigProvider) {
    //Configured TWX server
    app.twxRoot = "/Thingworx";

    // Get this from application config later
    DataConnectorConfigProvider.addDataProvider({
        name: 'ThingworxConnector',
        urlRoot: app.twxRoot
    });

    $ionicConfigProvider.views.swipeBackEnabled(false);
  });

  // filter to allow remote resources (images, models, etc.) to be loaded
  app.filter('trustUrl', function($sce) {
      return function(url) {
          return $sce.trustAsResourceUrl(url);
      };
  });

  app.controller('AppCtrl', function ($scope, $rootScope, $state, $stateParams, $ionicModal, $location, $http, $injector, $templateCache) {
      var appScope = this;
      twx.appScope = this;
      var locationParams = {};
      // replace any occurrences of unreplaced URL params (i.e. {{foo:bar}}) with an empty string - DT-18867
      for(var entry of (new URLSearchParams(location.search.replace(/{{[a-zA-Z]*:[a-zA-Z]*}}/g, ''))).entries()) {
        locationParams[entry[0]] = entry[1];
      }
      twx.app.params = angular.extend(twx.app.params, $stateParams, locationParams);
      $scope.app.params = angular.extend({}, twx.app.params);
      appScope.params = twx.app.params;
      appScope.fn = twx.app.fn;
      appScope.mdl = twx.app.mdl;
      appScope.evt = twx.app.evt;

      twx.device.mdl['CurrentDevice'] = {
            svc: {
              'getCameraPictureURL': {}
            }
          };

      appScope.camera = {};
      appScope.camera.lastPictureData = "";
      appScope.camera.getPictureData = function(){
        var options = {
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA
        };
        var $cordovaCamera = $injector.get('$cordovaCamera');
        $cordovaCamera.getPicture(options).then(function (imageData) {
          appScope.camera.lastPictureData = imageData;
        }, function (err) {
          console.error('Error getting camera.', err);
        });
      };

      appScope.camera.getPictureURL = function(){
        var options = {
          destinationType: Camera.DestinationType.FILE_URI,
          sourceType: Camera.PictureSourceType.CAMERA
        };
        var $cordovaCamera = $injector.get('$cordovaCamera');
        $cordovaCamera.getPicture(options).then(function (imageURI) {
          appScope.camera.lastPictureURL = imageURI;
          twx.device.mdl['CurrentDevice'].svc['getCameraPictureURL'].data = imageURI;
        }, function (err) {
          console.error('Error getting camera picture.', err);
        });
      };

      $scope.$on('device.mdl.CurrentDevice.svc.getCameraPictureURL', function () {
            appScope.camera.getPictureURL();
        });

      $scope.$on('app-fn-navigate',function(e,data) {
        twx.app.fn.navigate(data['viewname']);
      });

      if($rootScope.enableVoiceCommands && twx.app.isPreview()) {
        $rootScope.$on('$ionicView.afterEnter', function(event, toState, toParams, fromState, fromParams) {
          // get the app events each time the view changes to ensure we're displaying the "triggerable" app events for the current view
          $scope.appEvents = twx.app.getAppEventsWithHandlers();
        });
       }

      $scope.showModal = function(view){

        var modalContents = '';
        var modalUrl = 'app/components/' + view + '.html';
        $http.get(modalUrl).then(function(response) {
          modalContents = response.data;
          var modalTransformedContents = modalContents.replace('ion-view','ion-modal-view');
          $scope.modal = $ionicModal.fromTemplate(modalTransformedContents, {
            scope: $scope,
            animation: 'slide-in-up'
          });
          $scope.modal.show();
          $scope.$broadcast('show-modal');
        });

      };

      $scope.hideModal = function(){
        $scope.modal.hide();
        $scope.modal.remove();
      };

      $scope.$on('app-fn-show-modal',function(e,data) {
        // DT-18461 modalIsActive helps us to add particular listener in twxWidget controller (in runtime)
        $scope.modalIsActive = true;
        $scope.showModal(data['viewname']);
      });

      $scope.$on('app-fn-hide-modal',function(e,data) {
        delete $scope.modalIsActive;
        $scope.hideModal();
      });

      appScope.acceleration = {};
      appScope.location = {};
      appScope.location.getCurrentLocation = function(){
        var posOptions = {timeout: 10000, enableHighAccuracy: false};
        var $cordovaGeolocation = $injector.get('$cordovaGeolocation');
        $cordovaGeolocation
          .getCurrentPosition(posOptions)
          .then(function (position) {
            var lat  = position.coords.latitude;
            var long = position.coords.longitude;
            appScope.location.lastLocation = { latitude: lat, longitude: long };
          }, function(err) {
            console.error("Error getting current position", err);
          });
      };
      appScope.location.lastLocation = {
        latitude: 40.056545,
        longitude: -99.672037
      };

      if($rootScope.enableVoiceCommands) {
        // add the speech service to the app scope when there are voice alias'd app events
        appScope.speech = $injector.get('appSpeechService');
        if(twx.app.isPreview()) {
            // in preview for eyewear projects, we'll wrap the calls to app.speech.synthesizeSpeech so we can display the text in the snackbar
            appScope.speech.synthesizeSpeech = _.wrap(appScope.speech.synthesizeSpeech, function(func, info) {
              twx.app.fn.addSnackbarMessage(info.text, 'voice-response');
              return func(info);
            });
        }
      }

      twx.device.camera = appScope.camera;
      twx.device.location = appScope.location;
      twx.device.acceleration = appScope.acceleration;
      appScope.listCanSwipe = true;
    });

  app.controller('AppsMenuCtrl', function ($scope, $timeout, $http, $ionicSideMenuDelegate, $location, $ionicHistory) {
      $scope.isCordovaApp = window.cordova === undefined ? false : true;
      if( !($scope.isCordovaApp) ) {
        $scope.hasBackView = function () {
           return ($ionicHistory.backView() != null);
        };
      }
      else {
        //DT-12925: Disable swipe gesture to show the menu when the spatial target is in view
        $scope.$on('$ionicView.afterEnter', function() {
          $timeout(function() {
            $ionicSideMenuDelegate.canDragContent(document.querySelectorAll('[original-widget="twx-dt-target-spatial"]').length === 0);
          }, 10); //Just after other listeners still removing the old view widgets
        });
      }

      $scope.toggleLeftMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
      };

      $scope.navigateFromLeftMenu = function (path) {
        $location.path(path);
        $ionicSideMenuDelegate.toggleLeft();
      };

      $scope.$watch(function(){
          return $ionicSideMenuDelegate.getOpenRatio();
      }, function(newValue, oldValue) {
          $scope.hideLeftMenu = !$ionicSideMenuDelegate.isOpenLeft();
      });
    });

  app.controller('BaseCtrl', function ($scope, $parse, $location, $state, $ionicPopup, $timeout, $injector) {
    $scope['twInvokeAction'] = function(name){
      if (this['twActions'] && this['twActions'][name]){
        var action = this['twActions'][name];
        var fn = $parse(action.do, /* interceptorFn */ null, /* expensiveChecks */ true);
        fn(action.scope);
      } else {
        console.log('Action "' + name + '" not found');
      }
    };

    $scope._setCurrentAndNavigate = function(items, item, target){
      items.Current = item;
      $scope.navigate(target);
    };

    $scope.showConfirmPopup = function (title, subtitle, confirmEventId, confirmView) {
      var confirmPopup = $ionicPopup.confirm({
        title: title,
        template: subtitle
      });
      confirmPopup.then(function (res) {
        if (res) {
          $scope.$emit(confirmEventId);
          if (confirmView !== '') {
            $scope.navigateOnTimeout(confirmView);
          }
        }
      });
    };

    $scope.navigateOnTimeout = function(target){
      $timeout(function () {
        $scope.navigate(target);
      }, 300);
    };

    $scope.$on('$stateChangeStart',function() {
      try {
        var vuforiaCleanup = $injector.get('vuforiaCleanup');
        if (vuforiaCleanup) {
          vuforiaCleanup.requestCleanupAndPause();
        }
      } catch(e) {console.log(e);}
    });

    $scope.navigate = function(target){
      $state.go(target);
    };
  });

}(window, document, angular));

/**
 * Adds a description meta tag for each supported language.  If the meta tag already exists, it will update the contents.
 */
function appendDescriptionMetaData(descriptionObj) {
  descriptionObj = descriptionObj || {};
  var head = document.querySelector('head');

  // append a 'description' meta tag for each supported language
  Object.keys(descriptionObj).forEach(function(lang) {
    var meta = document.querySelector('meta[name="description"][lang="' + lang + '"]');
    if(!meta) {
      meta = document.createElement('meta');
      meta.name = "description";
      meta.lang = lang;
      meta.content = descriptionObj[lang];

      // add the meta tag to the document's head element
      head.appendChild(meta);
    } else {
      // update the meta tag value
      meta.content = descriptionObj[lang];
    }
  });
};

/**
 *  initialize the mobile app/experience title and populate the params in the window.twx.app.params object.
 */
function updateTitleWithExpTitle() {
  var defaultParams = {"vumark":{"id":"vumark","isbound":"false","isdeletable":"false","name":"ThingMark","value":""},"template":{"id":"template","isbound":"false","isdeletable":"false","name":"Thing Template","value":""},"thing":{"id":"thing","isbound":"false","isdeletable":"false","name":"Thing","value":""},"data":{"id":"data","isbound":"false","isdeletable":"true","name":"data","value":"hello!"}};

  Object.keys(defaultParams).forEach(function(key) {
    if (defaultParams[key].value) {
      window.twx.app.params[key] = defaultParams[key].value;
    }
  });

  // get the index of the experience being loaded, default to the first view if the 'expIndex' is not passed on the URL

  var urlParams = new URLSearchParams(location.search);
  var title = '';
  var descriptionObj = {};
  if (urlParams.has('expIndex')) {
    //Old bookmarks will come through here, may not be correct if experiences have been redone in a different order
    var expIdx = parseInt(twx.app.fn.getParameterByName('expIndex', location.href) || '0', 10);
    title = experienceInfo.getTitleByIndex(expIdx);
    descriptionObj = experienceInfo.getDescription(expIdx);
  }
  else if (urlParams.has('expId')) {
    //expId could still be old/stale if experiences have been all deleted and redone
    var exp = experienceInfo.findExperienceById(parseFloat(urlParams.get('expId')));
    title = experienceInfo.getTitle(exp);
    descriptionObj = exp.description;
  }
  else {
    title = experienceInfo.getTitleByIndex(0);
    descriptionObj = experienceInfo.getDescription(0);
    if (!title) {
      title = urlParams.get('project');
    }
  }

  // set the page title as the name of the loaded experience
  document.title = title;

  appendDescriptionMetaData(descriptionObj);
}

var experienceInfo = new twx.app.ExperienceInfo({"name":"","version":"1.0.0","requires":["w320dp"],"experiences":[{"vumark":"29407:1","experienceType":"vumark","id":1,"index-keys":["urn:vuforia:vumark:29407:1"],"title":{"en":"Cookie"},"description":{"en":"","en-US":""},"requires":["AR-tracking"],"tags":[],"icon":"","viewName":"Home","url-template":"index.html?expId=1&vumark={{vuforia:vumark}}","entryPoint":"index.html?expId=1","thumbnail":""}],"accessType":"private","designedfor":[]});
