gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDMainMenu_95BGObjects1= [];
gdjs.MainMenuCode.GDMainMenu_95BGObjects2= [];
gdjs.MainMenuCode.GDMainMenu_95BGObjects3= [];
gdjs.MainMenuCode.GDMainMenu_95BGObjects4= [];
gdjs.MainMenuCode.GDOPTION_95TEXTObjects1= [];
gdjs.MainMenuCode.GDOPTION_95TEXTObjects2= [];
gdjs.MainMenuCode.GDOPTION_95TEXTObjects3= [];
gdjs.MainMenuCode.GDOPTION_95TEXTObjects4= [];
gdjs.MainMenuCode.GDQUIT_95TEXTObjects1= [];
gdjs.MainMenuCode.GDQUIT_95TEXTObjects2= [];
gdjs.MainMenuCode.GDQUIT_95TEXTObjects3= [];
gdjs.MainMenuCode.GDQUIT_95TEXTObjects4= [];
gdjs.MainMenuCode.GDSTARTGAME_95TEXTObjects1= [];
gdjs.MainMenuCode.GDSTARTGAME_95TEXTObjects2= [];
gdjs.MainMenuCode.GDSTARTGAME_95TEXTObjects3= [];
gdjs.MainMenuCode.GDSTARTGAME_95TEXTObjects4= [];
gdjs.MainMenuCode.GDLOGO_95GAMEObjects1= [];
gdjs.MainMenuCode.GDLOGO_95GAMEObjects2= [];
gdjs.MainMenuCode.GDLOGO_95GAMEObjects3= [];
gdjs.MainMenuCode.GDLOGO_95GAMEObjects4= [];
gdjs.MainMenuCode.GDQuit_95BTNObjects1= [];
gdjs.MainMenuCode.GDQuit_95BTNObjects2= [];
gdjs.MainMenuCode.GDQuit_95BTNObjects3= [];
gdjs.MainMenuCode.GDQuit_95BTNObjects4= [];
gdjs.MainMenuCode.GDOption_95BTNObjects1= [];
gdjs.MainMenuCode.GDOption_95BTNObjects2= [];
gdjs.MainMenuCode.GDOption_95BTNObjects3= [];
gdjs.MainMenuCode.GDOption_95BTNObjects4= [];
gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects1= [];
gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2= [];
gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects3= [];
gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects4= [];
gdjs.MainMenuCode.GDCONTROLLER_95START_95BUTTONObjects1= [];
gdjs.MainMenuCode.GDCONTROLLER_95START_95BUTTONObjects2= [];
gdjs.MainMenuCode.GDCONTROLLER_95START_95BUTTONObjects3= [];
gdjs.MainMenuCode.GDCONTROLLER_95START_95BUTTONObjects4= [];
gdjs.MainMenuCode.GDCONTROLLER_95BACK_95BUTTONObjects1= [];
gdjs.MainMenuCode.GDCONTROLLER_95BACK_95BUTTONObjects2= [];
gdjs.MainMenuCode.GDCONTROLLER_95BACK_95BUTTONObjects3= [];
gdjs.MainMenuCode.GDCONTROLLER_95BACK_95BUTTONObjects4= [];
gdjs.MainMenuCode.GDselection_95LevelsObjects1= [];
gdjs.MainMenuCode.GDselection_95LevelsObjects2= [];
gdjs.MainMenuCode.GDselection_95LevelsObjects3= [];
gdjs.MainMenuCode.GDselection_95LevelsObjects4= [];
gdjs.MainMenuCode.GDLaungugeObjects1= [];
gdjs.MainMenuCode.GDLaungugeObjects2= [];
gdjs.MainMenuCode.GDLaungugeObjects3= [];
gdjs.MainMenuCode.GDLaungugeObjects4= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};
gdjs.MainMenuCode.conditionTrue_1 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_1 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_1 = {val:false};


gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDSTART_9595Game_9595BTNObjects2Objects = Hashtable.newFrom({"START_Game_BTN": gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2});
gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Wood-Tap_1.ogg", false, 100, 1);
}}

}


};gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Zoop_1.ogg", false, 100, 1);
}}

}


};gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(56005588);
}
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(56003756);
}
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cutscene", false);
}
{ //Subevents
gdjs.MainMenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("START_Game_BTN"), gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDSTART_9595Game_9595BTNObjects2Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDSTART_9595Game_9595BTNObjects2Objects = Hashtable.newFrom({"START_Game_BTN": gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2});
gdjs.MainMenuCode.eventsList5 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Wood-Tap_1.ogg", false, 100, 1);
}}

}


};gdjs.MainMenuCode.eventsList6 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Zoop_1.ogg", false, 100, 1);
}}

}


};gdjs.MainMenuCode.eventsList7 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(56010084);
}
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.eventsList8 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(56007796);
}
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1-1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(3);
}
{ //Subevents
gdjs.MainMenuCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("START_Game_BTN"), gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDSTART_9595Game_9595BTNObjects2Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDOption_9595BTNObjects2Objects = Hashtable.newFrom({"Option_BTN": gdjs.MainMenuCode.GDOption_95BTNObjects2});
gdjs.MainMenuCode.eventsList10 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Wood-Tap_1.ogg", false, 100, 1);
}}

}


};gdjs.MainMenuCode.eventsList11 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Zoop_1.ogg", false, 100, 1);
}}

}


};gdjs.MainMenuCode.eventsList12 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(56013700);
}
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.eventsList13 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(56011836);
}
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Option", false);
}
{ //Subevents
gdjs.MainMenuCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDQuit_9595BTNObjects2Objects = Hashtable.newFrom({"Quit_BTN": gdjs.MainMenuCode.GDQuit_95BTNObjects2});
gdjs.MainMenuCode.eventsList14 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Wood-Tap_1.ogg", false, 100, 1);
}}

}


};gdjs.MainMenuCode.eventsList15 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Zoop_1.ogg", false, 100, 1);
}}

}


};gdjs.MainMenuCode.eventsList16 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(56017284);
}
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.eventsList17 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(56015436);
}
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Exit Menu", false);
}
{ //Subevents
gdjs.MainMenuCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDOption_9595BTNObjects2Objects = Hashtable.newFrom({"Option_BTN": gdjs.MainMenuCode.GDOption_95BTNObjects2});
gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDSTART_9595Game_9595BTNObjects2Objects = Hashtable.newFrom({"START_Game_BTN": gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2});
gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDQuit_9595BTNObjects2Objects = Hashtable.newFrom({"Quit_BTN": gdjs.MainMenuCode.GDQuit_95BTNObjects2});
gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDselection_9595LevelsObjects2Objects = Hashtable.newFrom({"selection_Levels": gdjs.MainMenuCode.GDselection_95LevelsObjects2});
gdjs.MainMenuCode.eventsList18 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level_Selection", false);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDselection_9595LevelsObjects1Objects = Hashtable.newFrom({"selection_Levels": gdjs.MainMenuCode.GDselection_95LevelsObjects1});
gdjs.MainMenuCode.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MainMenuCode.GDselection_95LevelsObjects1, gdjs.MainMenuCode.GDselection_95LevelsObjects2);


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDselection_9595LevelsObjects2Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDselection_95LevelsObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDselection_95LevelsObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDselection_95LevelsObjects2[i].setColor("197;197;197");
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList18(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.MainMenuCode.GDselection_95LevelsObjects1 */

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDselection_9595LevelsObjects1Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDselection_95LevelsObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDselection_95LevelsObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDselection_95LevelsObjects1[i].setColor("255;255;255");
}
}}

}


};gdjs.MainMenuCode.eventsList20 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)) == 0;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)) == 1;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Option_BTN"), gdjs.MainMenuCode.GDOption_95BTNObjects2);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDOption_9595BTNObjects2Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDOption_95BTNObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDOption_95BTNObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDOption_95BTNObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.MainMenuCode.GDQuit_95BTNObjects1, gdjs.MainMenuCode.GDQuit_95BTNObjects2);


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDQuit_9595BTNObjects2Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDQuit_95BTNObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDQuit_95BTNObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDQuit_95BTNObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList17(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Option_BTN"), gdjs.MainMenuCode.GDOption_95BTNObjects2);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDOption_9595BTNObjects2Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDOption_95BTNObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDOption_95BTNObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDOption_95BTNObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("START_Game_BTN"), gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDSTART_9595Game_9595BTNObjects2Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(gdjs.MainMenuCode.GDQuit_95BTNObjects1, gdjs.MainMenuCode.GDQuit_95BTNObjects2);


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDQuit_9595BTNObjects2Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDQuit_95BTNObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDQuit_95BTNObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDQuit_95BTNObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)) == 0;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.MainMenuCode.GDselection_95LevelsObjects1, gdjs.MainMenuCode.GDselection_95LevelsObjects2);

{for(var i = 0, len = gdjs.MainMenuCode.GDselection_95LevelsObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDselection_95LevelsObjects2[i].hide();
}
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)) == 1;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDselection_95LevelsObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDselection_95LevelsObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDselection_95LevelsObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDSTART_9595Game_9595BTNObjects2Objects = Hashtable.newFrom({"START_Game_BTN": gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2});
gdjs.MainMenuCode.eventsList21 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Wood-Tap_1.ogg", false, 100, 1);
}}

}


};gdjs.MainMenuCode.eventsList22 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Zoop_1.ogg", false, 100, 1);
}}

}


};gdjs.MainMenuCode.eventsList23 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(56027972);
}
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList22(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.eventsList24 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(56026140);
}
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList21(runtimeScene);} //End of subevents
}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cutscene", false);
}
{ //Subevents
gdjs.MainMenuCode.eventsList23(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.eventsList25 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("START_Game_BTN"), gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDSTART_9595Game_9595BTNObjects2Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList24(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDSTART_9595Game_9595BTNObjects2Objects = Hashtable.newFrom({"START_Game_BTN": gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2});
gdjs.MainMenuCode.eventsList26 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Wood-Tap_1.ogg", false, 100, 1);
}}

}


};gdjs.MainMenuCode.eventsList27 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Zoop_1.ogg", false, 100, 1);
}}

}


};gdjs.MainMenuCode.eventsList28 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(56032468);
}
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList27(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.eventsList29 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(56030180);
}
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList26(runtimeScene);} //End of subevents
}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1-1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(3);
}
{ //Subevents
gdjs.MainMenuCode.eventsList28(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.eventsList30 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("START_Game_BTN"), gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDSTART_9595Game_9595BTNObjects2Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList29(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDOption_9595BTNObjects2Objects = Hashtable.newFrom({"Option_BTN": gdjs.MainMenuCode.GDOption_95BTNObjects2});
gdjs.MainMenuCode.eventsList31 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Wood-Tap_1.ogg", false, 100, 1);
}}

}


};gdjs.MainMenuCode.eventsList32 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Zoop_1.ogg", false, 100, 1);
}}

}


};gdjs.MainMenuCode.eventsList33 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(56036084);
}
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList32(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.eventsList34 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.MainMenuCode.conditionTrue_1 = gdjs.MainMenuCode.condition0IsTrue_0;
gdjs.MainMenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(56034220);
}
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList31(runtimeScene);} //End of subevents
}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Option", false);
}
{ //Subevents
gdjs.MainMenuCode.eventsList33(runtimeScene);} //End of subevents
}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDOption_9595BTNObjects2Objects = Hashtable.newFrom({"Option_BTN": gdjs.MainMenuCode.GDOption_95BTNObjects2});
gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDSTART_9595Game_9595BTNObjects2Objects = Hashtable.newFrom({"START_Game_BTN": gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2});
gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDselection_9595LevelsObjects3Objects = Hashtable.newFrom({"selection_Levels": gdjs.MainMenuCode.GDselection_95LevelsObjects3});
gdjs.MainMenuCode.eventsList35 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level_Selection", false);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDselection_9595LevelsObjects2Objects = Hashtable.newFrom({"selection_Levels": gdjs.MainMenuCode.GDselection_95LevelsObjects2});
gdjs.MainMenuCode.eventsList36 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MainMenuCode.GDselection_95LevelsObjects2, gdjs.MainMenuCode.GDselection_95LevelsObjects3);


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDselection_9595LevelsObjects3Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDselection_95LevelsObjects3 */
{for(var i = 0, len = gdjs.MainMenuCode.GDselection_95LevelsObjects3.length ;i < len;++i) {
    gdjs.MainMenuCode.GDselection_95LevelsObjects3[i].setColor("197;197;197");
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList35(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.MainMenuCode.GDselection_95LevelsObjects2 */

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDselection_9595LevelsObjects2Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDselection_95LevelsObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDselection_95LevelsObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDselection_95LevelsObjects2[i].setColor("255;255;255");
}
}}

}


};gdjs.MainMenuCode.eventsList37 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)) == 0;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList25(runtimeScene);} //End of subevents
}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)) == 1;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList30(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Option_BTN"), gdjs.MainMenuCode.GDOption_95BTNObjects2);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDOption_9595BTNObjects2Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDOption_95BTNObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDOption_95BTNObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDOption_95BTNObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList34(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Option_BTN"), gdjs.MainMenuCode.GDOption_95BTNObjects2);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDOption_9595BTNObjects2Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDOption_95BTNObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDOption_95BTNObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDOption_95BTNObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("START_Game_BTN"), gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDSTART_9595Game_9595BTNObjects2Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2 */
{for(var i = 0, len = gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2[i].setAnimation(0);
}
}}

}


{


{
}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)) == 0;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("selection_Levels"), gdjs.MainMenuCode.GDselection_95LevelsObjects2);
{for(var i = 0, len = gdjs.MainMenuCode.GDselection_95LevelsObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDselection_95LevelsObjects2[i].hide();
}
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)) == 1;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("selection_Levels"), gdjs.MainMenuCode.GDselection_95LevelsObjects2);
{for(var i = 0, len = gdjs.MainMenuCode.GDselection_95LevelsObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDselection_95LevelsObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList36(runtimeScene);} //End of subevents
}

}


{


{
}

}


};gdjs.MainMenuCode.eventsList38 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "01 Start Menu.ogg", 1, false, 100, 1);
}}

}


};gdjs.MainMenuCode.eventsList39 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "01 Start Menu.ogg", 1, true, 100, 1);
}}

}


};gdjs.MainMenuCode.eventsList40 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("STORY")) == 1;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(1);
}}

}


};gdjs.MainMenuCode.eventsList41 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("LEVELSELECTION")) == 1;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(1);
}}

}


};gdjs.MainMenuCode.eventsList42 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QUIT_TEXT"), gdjs.MainMenuCode.GDQUIT_95TEXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("Quit_BTN"), gdjs.MainMenuCode.GDQuit_95BTNObjects1);
gdjs.copyArray(runtimeScene.getObjects("selection_Levels"), gdjs.MainMenuCode.GDselection_95LevelsObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDQuit_95BTNObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDQuit_95BTNObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDQUIT_95TEXTObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDQUIT_95TEXTObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDselection_95LevelsObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDselection_95LevelsObjects1[i].hide();
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList20(runtimeScene);} //End of subevents
}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.systemInfo.isMobile();
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QUIT_TEXT"), gdjs.MainMenuCode.GDQUIT_95TEXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("Quit_BTN"), gdjs.MainMenuCode.GDQuit_95BTNObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDQuit_95BTNObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDQuit_95BTNObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDQUIT_95TEXTObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDQUIT_95TEXTObjects1[i].hide();
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList37(runtimeScene);} //End of subevents
}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList38(runtimeScene);} //End of subevents
}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "START", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cutscene", false);
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "BACK", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Controller_type.func(runtimeScene, 1, "Xbox", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CONTROLLER_BACK_BUTTON"), gdjs.MainMenuCode.GDCONTROLLER_95BACK_95BUTTONObjects1);
gdjs.copyArray(runtimeScene.getObjects("CONTROLLER_START_BUTTON"), gdjs.MainMenuCode.GDCONTROLLER_95START_95BUTTONObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDCONTROLLER_95START_95BUTTONObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCONTROLLER_95START_95BUTTONObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDCONTROLLER_95BACK_95BUTTONObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCONTROLLER_95BACK_95BUTTONObjects1[i].hide(false);
}
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = !(gdjs.evtsExt__Gamepads__C_Controller_type.func(runtimeScene, 1, "Xbox", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CONTROLLER_BACK_BUTTON"), gdjs.MainMenuCode.GDCONTROLLER_95BACK_95BUTTONObjects1);
gdjs.copyArray(runtimeScene.getObjects("CONTROLLER_START_BUTTON"), gdjs.MainMenuCode.GDCONTROLLER_95START_95BUTTONObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDCONTROLLER_95START_95BUTTONObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCONTROLLER_95START_95BUTTONObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDCONTROLLER_95BACK_95BUTTONObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDCONTROLLER_95BACK_95BUTTONObjects1[i].hide();
}
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "u");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, false);
}}

}


{



}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList39(runtimeScene);} //End of subevents
}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("STORY", "S");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("STORY", "S", 0);
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = !(gdjs.evtTools.storage.elementExistsInJSONFile("STORY", "S"));
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("STORY", "S", runtimeScene, runtimeScene.getVariables().get("STORY"));
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList40(runtimeScene);} //End of subevents
}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.storage.elementExistsInJSONFile("LEVELSELECTION", "L");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("LEVELSELECTION", "L", 0);
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = !(gdjs.evtTools.storage.elementExistsInJSONFile("LEVELSELECTION", "L"));
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.readNumberFromJSONFile("LEVELSELECTION", "L", runtimeScene, runtimeScene.getVariables().get("LEVELSCELECTION"));
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainMenuCode.eventsList41(runtimeScene);} //End of subevents
}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDMainMenu_95BGObjects1.length = 0;
gdjs.MainMenuCode.GDMainMenu_95BGObjects2.length = 0;
gdjs.MainMenuCode.GDMainMenu_95BGObjects3.length = 0;
gdjs.MainMenuCode.GDMainMenu_95BGObjects4.length = 0;
gdjs.MainMenuCode.GDOPTION_95TEXTObjects1.length = 0;
gdjs.MainMenuCode.GDOPTION_95TEXTObjects2.length = 0;
gdjs.MainMenuCode.GDOPTION_95TEXTObjects3.length = 0;
gdjs.MainMenuCode.GDOPTION_95TEXTObjects4.length = 0;
gdjs.MainMenuCode.GDQUIT_95TEXTObjects1.length = 0;
gdjs.MainMenuCode.GDQUIT_95TEXTObjects2.length = 0;
gdjs.MainMenuCode.GDQUIT_95TEXTObjects3.length = 0;
gdjs.MainMenuCode.GDQUIT_95TEXTObjects4.length = 0;
gdjs.MainMenuCode.GDSTARTGAME_95TEXTObjects1.length = 0;
gdjs.MainMenuCode.GDSTARTGAME_95TEXTObjects2.length = 0;
gdjs.MainMenuCode.GDSTARTGAME_95TEXTObjects3.length = 0;
gdjs.MainMenuCode.GDSTARTGAME_95TEXTObjects4.length = 0;
gdjs.MainMenuCode.GDLOGO_95GAMEObjects1.length = 0;
gdjs.MainMenuCode.GDLOGO_95GAMEObjects2.length = 0;
gdjs.MainMenuCode.GDLOGO_95GAMEObjects3.length = 0;
gdjs.MainMenuCode.GDLOGO_95GAMEObjects4.length = 0;
gdjs.MainMenuCode.GDQuit_95BTNObjects1.length = 0;
gdjs.MainMenuCode.GDQuit_95BTNObjects2.length = 0;
gdjs.MainMenuCode.GDQuit_95BTNObjects3.length = 0;
gdjs.MainMenuCode.GDQuit_95BTNObjects4.length = 0;
gdjs.MainMenuCode.GDOption_95BTNObjects1.length = 0;
gdjs.MainMenuCode.GDOption_95BTNObjects2.length = 0;
gdjs.MainMenuCode.GDOption_95BTNObjects3.length = 0;
gdjs.MainMenuCode.GDOption_95BTNObjects4.length = 0;
gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects1.length = 0;
gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects2.length = 0;
gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects3.length = 0;
gdjs.MainMenuCode.GDSTART_95Game_95BTNObjects4.length = 0;
gdjs.MainMenuCode.GDCONTROLLER_95START_95BUTTONObjects1.length = 0;
gdjs.MainMenuCode.GDCONTROLLER_95START_95BUTTONObjects2.length = 0;
gdjs.MainMenuCode.GDCONTROLLER_95START_95BUTTONObjects3.length = 0;
gdjs.MainMenuCode.GDCONTROLLER_95START_95BUTTONObjects4.length = 0;
gdjs.MainMenuCode.GDCONTROLLER_95BACK_95BUTTONObjects1.length = 0;
gdjs.MainMenuCode.GDCONTROLLER_95BACK_95BUTTONObjects2.length = 0;
gdjs.MainMenuCode.GDCONTROLLER_95BACK_95BUTTONObjects3.length = 0;
gdjs.MainMenuCode.GDCONTROLLER_95BACK_95BUTTONObjects4.length = 0;
gdjs.MainMenuCode.GDselection_95LevelsObjects1.length = 0;
gdjs.MainMenuCode.GDselection_95LevelsObjects2.length = 0;
gdjs.MainMenuCode.GDselection_95LevelsObjects3.length = 0;
gdjs.MainMenuCode.GDselection_95LevelsObjects4.length = 0;
gdjs.MainMenuCode.GDLaungugeObjects1.length = 0;
gdjs.MainMenuCode.GDLaungugeObjects2.length = 0;
gdjs.MainMenuCode.GDLaungugeObjects3.length = 0;
gdjs.MainMenuCode.GDLaungugeObjects4.length = 0;

gdjs.MainMenuCode.eventsList42(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
