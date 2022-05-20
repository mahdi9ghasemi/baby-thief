gdjs.CutsceneCode = {};
gdjs.CutsceneCode.GDMainMenu_95BGObjects1= [];
gdjs.CutsceneCode.GDMainMenu_95BGObjects2= [];
gdjs.CutsceneCode.GDOPTION_95TEXTObjects1= [];
gdjs.CutsceneCode.GDOPTION_95TEXTObjects2= [];
gdjs.CutsceneCode.GDQUIT_95TEXTObjects1= [];
gdjs.CutsceneCode.GDQUIT_95TEXTObjects2= [];
gdjs.CutsceneCode.GDSTARTGAME_95TEXTObjects1= [];
gdjs.CutsceneCode.GDSTARTGAME_95TEXTObjects2= [];
gdjs.CutsceneCode.GDLOGO_95GAMEObjects1= [];
gdjs.CutsceneCode.GDLOGO_95GAMEObjects2= [];
gdjs.CutsceneCode.GDQuit_95BTNObjects1= [];
gdjs.CutsceneCode.GDQuit_95BTNObjects2= [];
gdjs.CutsceneCode.GDCutsceneObjects1= [];
gdjs.CutsceneCode.GDCutsceneObjects2= [];
gdjs.CutsceneCode.GDSkip_95TextObjects1= [];
gdjs.CutsceneCode.GDSkip_95TextObjects2= [];

gdjs.CutsceneCode.conditionTrue_0 = {val:false};
gdjs.CutsceneCode.condition0IsTrue_0 = {val:false};
gdjs.CutsceneCode.condition1IsTrue_0 = {val:false};


gdjs.CutsceneCode.mapOfGDgdjs_46CutsceneCode_46GDSkip_9595TextObjects1Objects = Hashtable.newFrom({"Skip_Text": gdjs.CutsceneCode.GDSkip_95TextObjects1});
gdjs.CutsceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.CutsceneCode.condition0IsTrue_0.val = false;
{
gdjs.CutsceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.CutsceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1-1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("STORY", "S", 1);
}}

}


};gdjs.CutsceneCode.mapOfGDgdjs_46CutsceneCode_46GDSkip_9595TextObjects1Objects = Hashtable.newFrom({"Skip_Text": gdjs.CutsceneCode.GDSkip_95TextObjects1});
gdjs.CutsceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cutscene"), gdjs.CutsceneCode.GDCutsceneObjects1);

gdjs.CutsceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.CutsceneCode.GDCutsceneObjects1.length;i<l;++i) {
    if ( gdjs.CutsceneCode.GDCutsceneObjects1[i].hasAnimationEnded() ) {
        gdjs.CutsceneCode.condition0IsTrue_0.val = true;
        gdjs.CutsceneCode.GDCutsceneObjects1[k] = gdjs.CutsceneCode.GDCutsceneObjects1[i];
        ++k;
    }
}
gdjs.CutsceneCode.GDCutsceneObjects1.length = k;}if (gdjs.CutsceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1-1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("STORY", "S", 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Skip_Text"), gdjs.CutsceneCode.GDSkip_95TextObjects1);

gdjs.CutsceneCode.condition0IsTrue_0.val = false;
{
gdjs.CutsceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CutsceneCode.mapOfGDgdjs_46CutsceneCode_46GDSkip_9595TextObjects1Objects, runtimeScene, true, false);
}if (gdjs.CutsceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CutsceneCode.GDSkip_95TextObjects1 */
{for(var i = 0, len = gdjs.CutsceneCode.GDSkip_95TextObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDSkip_95TextObjects1[i].setColor("131;131;131");
}
}
{ //Subevents
gdjs.CutsceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Skip_Text"), gdjs.CutsceneCode.GDSkip_95TextObjects1);

gdjs.CutsceneCode.condition0IsTrue_0.val = false;
{
gdjs.CutsceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CutsceneCode.mapOfGDgdjs_46CutsceneCode_46GDSkip_9595TextObjects1Objects, runtimeScene, true, true);
}if (gdjs.CutsceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CutsceneCode.GDSkip_95TextObjects1 */
{for(var i = 0, len = gdjs.CutsceneCode.GDSkip_95TextObjects1.length ;i < len;++i) {
    gdjs.CutsceneCode.GDSkip_95TextObjects1[i].setColor("0;0;0");
}
}}

}


};

gdjs.CutsceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CutsceneCode.GDMainMenu_95BGObjects1.length = 0;
gdjs.CutsceneCode.GDMainMenu_95BGObjects2.length = 0;
gdjs.CutsceneCode.GDOPTION_95TEXTObjects1.length = 0;
gdjs.CutsceneCode.GDOPTION_95TEXTObjects2.length = 0;
gdjs.CutsceneCode.GDQUIT_95TEXTObjects1.length = 0;
gdjs.CutsceneCode.GDQUIT_95TEXTObjects2.length = 0;
gdjs.CutsceneCode.GDSTARTGAME_95TEXTObjects1.length = 0;
gdjs.CutsceneCode.GDSTARTGAME_95TEXTObjects2.length = 0;
gdjs.CutsceneCode.GDLOGO_95GAMEObjects1.length = 0;
gdjs.CutsceneCode.GDLOGO_95GAMEObjects2.length = 0;
gdjs.CutsceneCode.GDQuit_95BTNObjects1.length = 0;
gdjs.CutsceneCode.GDQuit_95BTNObjects2.length = 0;
gdjs.CutsceneCode.GDCutsceneObjects1.length = 0;
gdjs.CutsceneCode.GDCutsceneObjects2.length = 0;
gdjs.CutsceneCode.GDSkip_95TextObjects1.length = 0;
gdjs.CutsceneCode.GDSkip_95TextObjects2.length = 0;

gdjs.CutsceneCode.eventsList1(runtimeScene);
return;

}

gdjs['CutsceneCode'] = gdjs.CutsceneCode;
