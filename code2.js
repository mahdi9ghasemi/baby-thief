gdjs.Exit_32MenuCode = {};
gdjs.Exit_32MenuCode.GDMainMenu_95BGObjects1= [];
gdjs.Exit_32MenuCode.GDMainMenu_95BGObjects2= [];
gdjs.Exit_32MenuCode.GDMainMenu_95BGObjects3= [];
gdjs.Exit_32MenuCode.GDNO_95TEXTObjects1= [];
gdjs.Exit_32MenuCode.GDNO_95TEXTObjects2= [];
gdjs.Exit_32MenuCode.GDNO_95TEXTObjects3= [];
gdjs.Exit_32MenuCode.GDYES_95TEXTObjects1= [];
gdjs.Exit_32MenuCode.GDYES_95TEXTObjects2= [];
gdjs.Exit_32MenuCode.GDYES_95TEXTObjects3= [];
gdjs.Exit_32MenuCode.GDLOGO_95GAMEObjects1= [];
gdjs.Exit_32MenuCode.GDLOGO_95GAMEObjects2= [];
gdjs.Exit_32MenuCode.GDLOGO_95GAMEObjects3= [];
gdjs.Exit_32MenuCode.GDNO_95BTNObjects1= [];
gdjs.Exit_32MenuCode.GDNO_95BTNObjects2= [];
gdjs.Exit_32MenuCode.GDNO_95BTNObjects3= [];
gdjs.Exit_32MenuCode.GDYES_95BTNObjects1= [];
gdjs.Exit_32MenuCode.GDYES_95BTNObjects2= [];
gdjs.Exit_32MenuCode.GDYES_95BTNObjects3= [];
gdjs.Exit_32MenuCode.GDQUSION_95QUITObjects1= [];
gdjs.Exit_32MenuCode.GDQUSION_95QUITObjects2= [];
gdjs.Exit_32MenuCode.GDQUSION_95QUITObjects3= [];

gdjs.Exit_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Exit_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Exit_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Exit_32MenuCode.conditionTrue_1 = {val:false};
gdjs.Exit_32MenuCode.condition0IsTrue_1 = {val:false};
gdjs.Exit_32MenuCode.condition1IsTrue_1 = {val:false};


gdjs.Exit_32MenuCode.mapOfGDgdjs_46Exit_9532MenuCode_46GDYES_9595BTNObjects1Objects = Hashtable.newFrom({"YES_BTN": gdjs.Exit_32MenuCode.GDYES_95BTNObjects1});
gdjs.Exit_32MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.Exit_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Exit_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.Exit_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Wood-Tap_1.ogg", false, 100, 1);
}}

}


};gdjs.Exit_32MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.Exit_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Exit_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.Exit_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Zoop_1.ogg", false, 100, 1);
}}

}


};gdjs.Exit_32MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.Exit_32MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.Exit_32MenuCode.conditionTrue_1 = gdjs.Exit_32MenuCode.condition0IsTrue_0;
gdjs.Exit_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(56228892);
}
}if (gdjs.Exit_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Exit_32MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Exit_32MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.Exit_32MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.Exit_32MenuCode.conditionTrue_1 = gdjs.Exit_32MenuCode.condition0IsTrue_0;
gdjs.Exit_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(56225436);
}
}if (gdjs.Exit_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Exit_32MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Exit_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Exit_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Exit_32MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MainMenu_BG"), gdjs.Exit_32MenuCode.GDMainMenu_95BGObjects1);
gdjs.copyArray(runtimeScene.getObjects("NO_BTN"), gdjs.Exit_32MenuCode.GDNO_95BTNObjects1);
gdjs.copyArray(runtimeScene.getObjects("NO_TEXT"), gdjs.Exit_32MenuCode.GDNO_95TEXTObjects1);
gdjs.copyArray(runtimeScene.getObjects("QUSION_QUIT"), gdjs.Exit_32MenuCode.GDQUSION_95QUITObjects1);
/* Reuse gdjs.Exit_32MenuCode.GDYES_95BTNObjects1 */
gdjs.copyArray(runtimeScene.getObjects("YES_TEXT"), gdjs.Exit_32MenuCode.GDYES_95TEXTObjects1);
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}{for(var i = 0, len = gdjs.Exit_32MenuCode.GDYES_95BTNObjects1.length ;i < len;++i) {
    gdjs.Exit_32MenuCode.GDYES_95BTNObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Exit_32MenuCode.GDNO_95BTNObjects1.length ;i < len;++i) {
    gdjs.Exit_32MenuCode.GDNO_95BTNObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Exit_32MenuCode.GDQUSION_95QUITObjects1.length ;i < len;++i) {
    gdjs.Exit_32MenuCode.GDQUSION_95QUITObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Exit_32MenuCode.GDYES_95TEXTObjects1.length ;i < len;++i) {
    gdjs.Exit_32MenuCode.GDYES_95TEXTObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Exit_32MenuCode.GDNO_95TEXTObjects1.length ;i < len;++i) {
    gdjs.Exit_32MenuCode.GDNO_95TEXTObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Exit_32MenuCode.GDMainMenu_95BGObjects1.length ;i < len;++i) {
    gdjs.Exit_32MenuCode.GDMainMenu_95BGObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}
{ //Subevents
gdjs.Exit_32MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Exit_32MenuCode.mapOfGDgdjs_46Exit_9532MenuCode_46GDNO_9595BTNObjects1Objects = Hashtable.newFrom({"NO_BTN": gdjs.Exit_32MenuCode.GDNO_95BTNObjects1});
gdjs.Exit_32MenuCode.eventsList4 = function(runtimeScene) {

{


gdjs.Exit_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Exit_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.Exit_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Wood-Tap_1.ogg", false, 100, 1);
}}

}


};gdjs.Exit_32MenuCode.eventsList5 = function(runtimeScene) {

{


gdjs.Exit_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Exit_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.Exit_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Zoop_1.ogg", false, 100, 1);
}}

}


};gdjs.Exit_32MenuCode.eventsList6 = function(runtimeScene) {

{


gdjs.Exit_32MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.Exit_32MenuCode.conditionTrue_1 = gdjs.Exit_32MenuCode.condition0IsTrue_0;
gdjs.Exit_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(56232460);
}
}if (gdjs.Exit_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Exit_32MenuCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Exit_32MenuCode.eventsList7 = function(runtimeScene) {

{


gdjs.Exit_32MenuCode.condition0IsTrue_0.val = false;
{
{gdjs.Exit_32MenuCode.conditionTrue_1 = gdjs.Exit_32MenuCode.condition0IsTrue_0;
gdjs.Exit_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(56230676);
}
}if (gdjs.Exit_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Exit_32MenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.Exit_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Exit_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Exit_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}
{ //Subevents
gdjs.Exit_32MenuCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Exit_32MenuCode.mapOfGDgdjs_46Exit_9532MenuCode_46GDYES_9595BTNObjects1Objects = Hashtable.newFrom({"YES_BTN": gdjs.Exit_32MenuCode.GDYES_95BTNObjects1});
gdjs.Exit_32MenuCode.mapOfGDgdjs_46Exit_9532MenuCode_46GDNO_9595BTNObjects1Objects = Hashtable.newFrom({"NO_BTN": gdjs.Exit_32MenuCode.GDNO_95BTNObjects1});
gdjs.Exit_32MenuCode.eventsList8 = function(runtimeScene) {

{


gdjs.Exit_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Exit_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.Exit_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "01 Start Menu.ogg", 1, true, 100, 1);
}}

}


};gdjs.Exit_32MenuCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("YES_BTN"), gdjs.Exit_32MenuCode.GDYES_95BTNObjects1);

gdjs.Exit_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Exit_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Exit_32MenuCode.mapOfGDgdjs_46Exit_9532MenuCode_46GDYES_9595BTNObjects1Objects, runtimeScene, true, false);
}if (gdjs.Exit_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Exit_32MenuCode.GDYES_95BTNObjects1 */
{for(var i = 0, len = gdjs.Exit_32MenuCode.GDYES_95BTNObjects1.length ;i < len;++i) {
    gdjs.Exit_32MenuCode.GDYES_95BTNObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Exit_32MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NO_BTN"), gdjs.Exit_32MenuCode.GDNO_95BTNObjects1);

gdjs.Exit_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Exit_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Exit_32MenuCode.mapOfGDgdjs_46Exit_9532MenuCode_46GDNO_9595BTNObjects1Objects, runtimeScene, true, false);
}if (gdjs.Exit_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Exit_32MenuCode.GDNO_95BTNObjects1 */
{for(var i = 0, len = gdjs.Exit_32MenuCode.GDNO_95BTNObjects1.length ;i < len;++i) {
    gdjs.Exit_32MenuCode.GDNO_95BTNObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Exit_32MenuCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("YES_BTN"), gdjs.Exit_32MenuCode.GDYES_95BTNObjects1);

gdjs.Exit_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Exit_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Exit_32MenuCode.mapOfGDgdjs_46Exit_9532MenuCode_46GDYES_9595BTNObjects1Objects, runtimeScene, true, true);
}if (gdjs.Exit_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Exit_32MenuCode.GDYES_95BTNObjects1 */
{for(var i = 0, len = gdjs.Exit_32MenuCode.GDYES_95BTNObjects1.length ;i < len;++i) {
    gdjs.Exit_32MenuCode.GDYES_95BTNObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NO_BTN"), gdjs.Exit_32MenuCode.GDNO_95BTNObjects1);

gdjs.Exit_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Exit_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Exit_32MenuCode.mapOfGDgdjs_46Exit_9532MenuCode_46GDNO_9595BTNObjects1Objects, runtimeScene, true, true);
}if (gdjs.Exit_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Exit_32MenuCode.GDNO_95BTNObjects1 */
{for(var i = 0, len = gdjs.Exit_32MenuCode.GDNO_95BTNObjects1.length ;i < len;++i) {
    gdjs.Exit_32MenuCode.GDNO_95BTNObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.Exit_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Exit_32MenuCode.condition0IsTrue_0.val = gdjs.evtsExt__Gamepads__C_Controller_type.func(runtimeScene, 1, "Xbox", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.Exit_32MenuCode.condition0IsTrue_0.val) {
}

}


{


gdjs.Exit_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Exit_32MenuCode.condition0IsTrue_0.val = !(gdjs.evtsExt__Gamepads__C_Controller_type.func(runtimeScene, 1, "Xbox", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}if (gdjs.Exit_32MenuCode.condition0IsTrue_0.val) {
}

}


{


gdjs.Exit_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Exit_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if (gdjs.Exit_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{



}


{


gdjs.Exit_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Exit_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Exit_32MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Exit_32MenuCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


gdjs.Exit_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Exit_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "u");
}if (gdjs.Exit_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, false);
}}

}


};

gdjs.Exit_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Exit_32MenuCode.GDMainMenu_95BGObjects1.length = 0;
gdjs.Exit_32MenuCode.GDMainMenu_95BGObjects2.length = 0;
gdjs.Exit_32MenuCode.GDMainMenu_95BGObjects3.length = 0;
gdjs.Exit_32MenuCode.GDNO_95TEXTObjects1.length = 0;
gdjs.Exit_32MenuCode.GDNO_95TEXTObjects2.length = 0;
gdjs.Exit_32MenuCode.GDNO_95TEXTObjects3.length = 0;
gdjs.Exit_32MenuCode.GDYES_95TEXTObjects1.length = 0;
gdjs.Exit_32MenuCode.GDYES_95TEXTObjects2.length = 0;
gdjs.Exit_32MenuCode.GDYES_95TEXTObjects3.length = 0;
gdjs.Exit_32MenuCode.GDLOGO_95GAMEObjects1.length = 0;
gdjs.Exit_32MenuCode.GDLOGO_95GAMEObjects2.length = 0;
gdjs.Exit_32MenuCode.GDLOGO_95GAMEObjects3.length = 0;
gdjs.Exit_32MenuCode.GDNO_95BTNObjects1.length = 0;
gdjs.Exit_32MenuCode.GDNO_95BTNObjects2.length = 0;
gdjs.Exit_32MenuCode.GDNO_95BTNObjects3.length = 0;
gdjs.Exit_32MenuCode.GDYES_95BTNObjects1.length = 0;
gdjs.Exit_32MenuCode.GDYES_95BTNObjects2.length = 0;
gdjs.Exit_32MenuCode.GDYES_95BTNObjects3.length = 0;
gdjs.Exit_32MenuCode.GDQUSION_95QUITObjects1.length = 0;
gdjs.Exit_32MenuCode.GDQUSION_95QUITObjects2.length = 0;
gdjs.Exit_32MenuCode.GDQUSION_95QUITObjects3.length = 0;

gdjs.Exit_32MenuCode.eventsList9(runtimeScene);
return;

}

gdjs['Exit_32MenuCode'] = gdjs.Exit_32MenuCode;
