gdjs.THEENDCode = {};
gdjs.THEENDCode.GDBlack_95Ending_95ScreenObjects1= [];
gdjs.THEENDCode.GDBlack_95Ending_95ScreenObjects2= [];
gdjs.THEENDCode.GDTHE_95END_95TEXTObjects1= [];
gdjs.THEENDCode.GDTHE_95END_95TEXTObjects2= [];

gdjs.THEENDCode.conditionTrue_0 = {val:false};
gdjs.THEENDCode.condition0IsTrue_0 = {val:false};
gdjs.THEENDCode.condition1IsTrue_0 = {val:false};


gdjs.THEENDCode.eventsList0 = function(runtimeScene) {

{


gdjs.THEENDCode.condition0IsTrue_0.val = false;
{
gdjs.THEENDCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "THEEND5");
}if (gdjs.THEENDCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};gdjs.THEENDCode.eventsList1 = function(runtimeScene) {

{


gdjs.THEENDCode.condition0IsTrue_0.val = false;
{
gdjs.THEENDCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "THEEND4");
}if (gdjs.THEENDCode.condition0IsTrue_0.val) {
/* Reuse gdjs.THEENDCode.GDTHE_95END_95TEXTObjects1 */
{for(var i = 0, len = gdjs.THEENDCode.GDTHE_95END_95TEXTObjects1.length ;i < len;++i) {
    gdjs.THEENDCode.GDTHE_95END_95TEXTObjects1[i].setString("Thanks For Playing And Enjoy My Game");
}
}{for(var i = 0, len = gdjs.THEENDCode.GDTHE_95END_95TEXTObjects1.length ;i < len;++i) {
    gdjs.THEENDCode.GDTHE_95END_95TEXTObjects1[i].setTextAlignment("center");
}
}
{ //Subevents
gdjs.THEENDCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.THEENDCode.eventsList2 = function(runtimeScene) {

{


gdjs.THEENDCode.condition0IsTrue_0.val = false;
{
gdjs.THEENDCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "THEEND3");
}if (gdjs.THEENDCode.condition0IsTrue_0.val) {
/* Reuse gdjs.THEENDCode.GDTHE_95END_95TEXTObjects1 */
{for(var i = 0, len = gdjs.THEENDCode.GDTHE_95END_95TEXTObjects1.length ;i < len;++i) {
    gdjs.THEENDCode.GDTHE_95END_95TEXTObjects1[i].setString("MEHRDAD(Child)");
}
}{for(var i = 0, len = gdjs.THEENDCode.GDTHE_95END_95TEXTObjects1.length ;i < len;++i) {
    gdjs.THEENDCode.GDTHE_95END_95TEXTObjects1[i].setTextAlignment("center");
}
}
{ //Subevents
gdjs.THEENDCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.THEENDCode.eventsList3 = function(runtimeScene) {

{


gdjs.THEENDCode.condition0IsTrue_0.val = false;
{
gdjs.THEENDCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "THEEND2");
}if (gdjs.THEENDCode.condition0IsTrue_0.val) {
/* Reuse gdjs.THEENDCode.GDTHE_95END_95TEXTObjects1 */
{for(var i = 0, len = gdjs.THEENDCode.GDTHE_95END_95TEXTObjects1.length ;i < len;++i) {
    gdjs.THEENDCode.GDTHE_95END_95TEXTObjects1[i].setString("THALIF(Final Boss)");
}
}{for(var i = 0, len = gdjs.THEENDCode.GDTHE_95END_95TEXTObjects1.length ;i < len;++i) {
    gdjs.THEENDCode.GDTHE_95END_95TEXTObjects1[i].setTextAlignment("center");
}
}
{ //Subevents
gdjs.THEENDCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.THEENDCode.eventsList4 = function(runtimeScene) {

{


gdjs.THEENDCode.condition0IsTrue_0.val = false;
{
gdjs.THEENDCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.THEENDCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "14 Ending.ogg", 1, true, 100, 1);
}}

}


};gdjs.THEENDCode.eventsList5 = function(runtimeScene) {

{


gdjs.THEENDCode.condition0IsTrue_0.val = false;
{
gdjs.THEENDCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "THEEND");
}if (gdjs.THEENDCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("THE_END_TEXT"), gdjs.THEENDCode.GDTHE_95END_95TEXTObjects1);
{for(var i = 0, len = gdjs.THEENDCode.GDTHE_95END_95TEXTObjects1.length ;i < len;++i) {
    gdjs.THEENDCode.GDTHE_95END_95TEXTObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.THEENDCode.GDTHE_95END_95TEXTObjects1.length ;i < len;++i) {
    gdjs.THEENDCode.GDTHE_95END_95TEXTObjects1[i].setString("Characters");
}
}
{ //Subevents
gdjs.THEENDCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.THEENDCode.condition0IsTrue_0.val = false;
{
gdjs.THEENDCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.THEENDCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.THEENDCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.THEENDCode.condition0IsTrue_0.val = false;
{
gdjs.THEENDCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.THEENDCode.condition0IsTrue_0.val) {
}

}


};

gdjs.THEENDCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.THEENDCode.GDBlack_95Ending_95ScreenObjects1.length = 0;
gdjs.THEENDCode.GDBlack_95Ending_95ScreenObjects2.length = 0;
gdjs.THEENDCode.GDTHE_95END_95TEXTObjects1.length = 0;
gdjs.THEENDCode.GDTHE_95END_95TEXTObjects2.length = 0;

gdjs.THEENDCode.eventsList5(runtimeScene);
return;

}

gdjs['THEENDCode'] = gdjs.THEENDCode;
