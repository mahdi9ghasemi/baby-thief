gdjs.OptionCode = {};
gdjs.OptionCode.GDMainMenu_95BGObjects1= [];
gdjs.OptionCode.GDMainMenu_95BGObjects2= [];
gdjs.OptionCode.GDMainMenu_95BGObjects3= [];
gdjs.OptionCode.GDMainMenu_95BGObjects4= [];
gdjs.OptionCode.GDCHARACTERS_95NAME_95TEXTObjects1= [];
gdjs.OptionCode.GDCHARACTERS_95NAME_95TEXTObjects2= [];
gdjs.OptionCode.GDCHARACTERS_95NAME_95TEXTObjects3= [];
gdjs.OptionCode.GDCHARACTERS_95NAME_95TEXTObjects4= [];
gdjs.OptionCode.GDCHARACTERS_95TEXTObjects1= [];
gdjs.OptionCode.GDCHARACTERS_95TEXTObjects2= [];
gdjs.OptionCode.GDCHARACTERS_95TEXTObjects3= [];
gdjs.OptionCode.GDCHARACTERS_95TEXTObjects4= [];
gdjs.OptionCode.GDSELECTION_95LEFT_95CHARACTERSObjects1= [];
gdjs.OptionCode.GDSELECTION_95LEFT_95CHARACTERSObjects2= [];
gdjs.OptionCode.GDSELECTION_95LEFT_95CHARACTERSObjects3= [];
gdjs.OptionCode.GDSELECTION_95LEFT_95CHARACTERSObjects4= [];
gdjs.OptionCode.GDSELECTION_95RIGHT_95CHARACTERSObjects1= [];
gdjs.OptionCode.GDSELECTION_95RIGHT_95CHARACTERSObjects2= [];
gdjs.OptionCode.GDSELECTION_95RIGHT_95CHARACTERSObjects3= [];
gdjs.OptionCode.GDSELECTION_95RIGHT_95CHARACTERSObjects4= [];
gdjs.OptionCode.GDMUSIC_95TEXTObjects1= [];
gdjs.OptionCode.GDMUSIC_95TEXTObjects2= [];
gdjs.OptionCode.GDMUSIC_95TEXTObjects3= [];
gdjs.OptionCode.GDMUSIC_95TEXTObjects4= [];
gdjs.OptionCode.GDSOUND_95TEXTObjects1= [];
gdjs.OptionCode.GDSOUND_95TEXTObjects2= [];
gdjs.OptionCode.GDSOUND_95TEXTObjects3= [];
gdjs.OptionCode.GDSOUND_95TEXTObjects4= [];
gdjs.OptionCode.GDSELECTION_95LEFT_95MUSICObjects1= [];
gdjs.OptionCode.GDSELECTION_95LEFT_95MUSICObjects2= [];
gdjs.OptionCode.GDSELECTION_95LEFT_95MUSICObjects3= [];
gdjs.OptionCode.GDSELECTION_95LEFT_95MUSICObjects4= [];
gdjs.OptionCode.GDSELECTION_95RIGHT_95MUSICObjects1= [];
gdjs.OptionCode.GDSELECTION_95RIGHT_95MUSICObjects2= [];
gdjs.OptionCode.GDSELECTION_95RIGHT_95MUSICObjects3= [];
gdjs.OptionCode.GDSELECTION_95RIGHT_95MUSICObjects4= [];
gdjs.OptionCode.GDMUSIC_95OPTIONObjects1= [];
gdjs.OptionCode.GDMUSIC_95OPTIONObjects2= [];
gdjs.OptionCode.GDMUSIC_95OPTIONObjects3= [];
gdjs.OptionCode.GDMUSIC_95OPTIONObjects4= [];
gdjs.OptionCode.GDSELECTION_95SOUND_95LEFTObjects1= [];
gdjs.OptionCode.GDSELECTION_95SOUND_95LEFTObjects2= [];
gdjs.OptionCode.GDSELECTION_95SOUND_95LEFTObjects3= [];
gdjs.OptionCode.GDSELECTION_95SOUND_95LEFTObjects4= [];
gdjs.OptionCode.GDSELECTION_95SOUND_95RIGHTObjects1= [];
gdjs.OptionCode.GDSELECTION_95SOUND_95RIGHTObjects2= [];
gdjs.OptionCode.GDSELECTION_95SOUND_95RIGHTObjects3= [];
gdjs.OptionCode.GDSELECTION_95SOUND_95RIGHTObjects4= [];
gdjs.OptionCode.GDBACK_95TO_95MENU_95BTNObjects1= [];
gdjs.OptionCode.GDBACK_95TO_95MENU_95BTNObjects2= [];
gdjs.OptionCode.GDBACK_95TO_95MENU_95BTNObjects3= [];
gdjs.OptionCode.GDBACK_95TO_95MENU_95BTNObjects4= [];
gdjs.OptionCode.GDSOUND_95OPTIONObjects1= [];
gdjs.OptionCode.GDSOUND_95OPTIONObjects2= [];
gdjs.OptionCode.GDSOUND_95OPTIONObjects3= [];
gdjs.OptionCode.GDSOUND_95OPTIONObjects4= [];
gdjs.OptionCode.GDBack_95To_95Main_95Menu_95TextObjects1= [];
gdjs.OptionCode.GDBack_95To_95Main_95Menu_95TextObjects2= [];
gdjs.OptionCode.GDBack_95To_95Main_95Menu_95TextObjects3= [];
gdjs.OptionCode.GDBack_95To_95Main_95Menu_95TextObjects4= [];

gdjs.OptionCode.conditionTrue_0 = {val:false};
gdjs.OptionCode.condition0IsTrue_0 = {val:false};
gdjs.OptionCode.condition1IsTrue_0 = {val:false};
gdjs.OptionCode.conditionTrue_1 = {val:false};
gdjs.OptionCode.condition0IsTrue_1 = {val:false};
gdjs.OptionCode.condition1IsTrue_1 = {val:false};


gdjs.OptionCode.mapOfGDgdjs_46OptionCode_46GDSELECTION_9595LEFT_9595CHARACTERSObjects2Objects = Hashtable.newFrom({"SELECTION_LEFT_CHARACTERS": gdjs.OptionCode.GDSELECTION_95LEFT_95CHARACTERSObjects2});
gdjs.OptionCode.eventsList0 = function(runtimeScene) {

{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).sub(1);
}}

}


};gdjs.OptionCode.mapOfGDgdjs_46OptionCode_46GDSELECTION_9595RIGHT_9595CHARACTERSObjects2Objects = Hashtable.newFrom({"SELECTION_RIGHT_CHARACTERS": gdjs.OptionCode.GDSELECTION_95RIGHT_95CHARACTERSObjects2});
gdjs.OptionCode.eventsList1 = function(runtimeScene) {

{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).add(1);
}}

}


};gdjs.OptionCode.mapOfGDgdjs_46OptionCode_46GDSELECTION_9595RIGHT_9595MUSICObjects2Objects = Hashtable.newFrom({"SELECTION_RIGHT_MUSIC": gdjs.OptionCode.GDSELECTION_95RIGHT_95MUSICObjects2});
gdjs.OptionCode.eventsList2 = function(runtimeScene) {

{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}}

}


};gdjs.OptionCode.mapOfGDgdjs_46OptionCode_46GDSELECTION_9595LEFT_9595MUSICObjects2Objects = Hashtable.newFrom({"SELECTION_LEFT_MUSIC": gdjs.OptionCode.GDSELECTION_95LEFT_95MUSICObjects2});
gdjs.OptionCode.eventsList3 = function(runtimeScene) {

{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).sub(1);
}}

}


};gdjs.OptionCode.mapOfGDgdjs_46OptionCode_46GDSELECTION_9595SOUND_9595RIGHTObjects2Objects = Hashtable.newFrom({"SELECTION_SOUND_RIGHT": gdjs.OptionCode.GDSELECTION_95SOUND_95RIGHTObjects2});
gdjs.OptionCode.eventsList4 = function(runtimeScene) {

{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}}

}


};gdjs.OptionCode.mapOfGDgdjs_46OptionCode_46GDSELECTION_9595SOUND_9595LEFTObjects2Objects = Hashtable.newFrom({"SELECTION_SOUND_LEFT": gdjs.OptionCode.GDSELECTION_95SOUND_95LEFTObjects2});
gdjs.OptionCode.eventsList5 = function(runtimeScene) {

{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).sub(1);
}}

}


};gdjs.OptionCode.mapOfGDgdjs_46OptionCode_46GDBACK_9595TO_9595MENU_9595BTNObjects2Objects = Hashtable.newFrom({"BACK_TO_MENU_BTN": gdjs.OptionCode.GDBACK_95TO_95MENU_95BTNObjects2});
gdjs.OptionCode.eventsList6 = function(runtimeScene) {

{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Wood-Tap_1.ogg", false, 100, 1);
}}

}


};gdjs.OptionCode.eventsList7 = function(runtimeScene) {

{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Zoop_1.ogg", false, 100, 1);
}}

}


};gdjs.OptionCode.eventsList8 = function(runtimeScene) {

{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
{gdjs.OptionCode.conditionTrue_1 = gdjs.OptionCode.condition0IsTrue_0;
gdjs.OptionCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(56201836);
}
}if (gdjs.OptionCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.OptionCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.OptionCode.eventsList9 = function(runtimeScene) {

{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
{gdjs.OptionCode.conditionTrue_1 = gdjs.OptionCode.condition0IsTrue_0;
gdjs.OptionCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(56199116);
}
}if (gdjs.OptionCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.OptionCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}
{ //Subevents
gdjs.OptionCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.OptionCode.mapOfGDgdjs_46OptionCode_46GDBACK_9595TO_9595MENU_9595BTNObjects1Objects = Hashtable.newFrom({"BACK_TO_MENU_BTN": gdjs.OptionCode.GDBACK_95TO_95MENU_95BTNObjects1});
gdjs.OptionCode.eventsList10 = function(runtimeScene) {

{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) < 0;
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).sub(0);
}}

}


{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) > 3;
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).add(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SELECTION_LEFT_CHARACTERS"), gdjs.OptionCode.GDSELECTION_95LEFT_95CHARACTERSObjects2);

gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionCode.mapOfGDgdjs_46OptionCode_46GDSELECTION_9595LEFT_9595CHARACTERSObjects2Objects, runtimeScene, true, false);
}if (gdjs.OptionCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.OptionCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SELECTION_RIGHT_CHARACTERS"), gdjs.OptionCode.GDSELECTION_95RIGHT_95CHARACTERSObjects2);

gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionCode.mapOfGDgdjs_46OptionCode_46GDSELECTION_9595RIGHT_9595CHARACTERSObjects2Objects, runtimeScene, true, false);
}if (gdjs.OptionCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.OptionCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CHARACTERS_NAME_TEXT"), gdjs.OptionCode.GDCHARACTERS_95NAME_95TEXTObjects2);
gdjs.copyArray(runtimeScene.getObjects("SELECTION_LEFT_CHARACTERS"), gdjs.OptionCode.GDSELECTION_95LEFT_95CHARACTERSObjects2);
gdjs.copyArray(runtimeScene.getObjects("SELECTION_RIGHT_CHARACTERS"), gdjs.OptionCode.GDSELECTION_95RIGHT_95CHARACTERSObjects2);
{for(var i = 0, len = gdjs.OptionCode.GDSELECTION_95LEFT_95CHARACTERSObjects2.length ;i < len;++i) {
    gdjs.OptionCode.GDSELECTION_95LEFT_95CHARACTERSObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.OptionCode.GDSELECTION_95RIGHT_95CHARACTERSObjects2.length ;i < len;++i) {
    gdjs.OptionCode.GDSELECTION_95RIGHT_95CHARACTERSObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.OptionCode.GDCHARACTERS_95NAME_95TEXTObjects2.length ;i < len;++i) {
    gdjs.OptionCode.GDCHARACTERS_95NAME_95TEXTObjects2[i].setString("Hamed");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CHARACTERS_NAME_TEXT"), gdjs.OptionCode.GDCHARACTERS_95NAME_95TEXTObjects2);
gdjs.copyArray(runtimeScene.getObjects("SELECTION_LEFT_CHARACTERS"), gdjs.OptionCode.GDSELECTION_95LEFT_95CHARACTERSObjects2);
{for(var i = 0, len = gdjs.OptionCode.GDSELECTION_95LEFT_95CHARACTERSObjects2.length ;i < len;++i) {
    gdjs.OptionCode.GDSELECTION_95LEFT_95CHARACTERSObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.OptionCode.GDCHARACTERS_95NAME_95TEXTObjects2.length ;i < len;++i) {
    gdjs.OptionCode.GDCHARACTERS_95NAME_95TEXTObjects2[i].setString("Hemid");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}}

}


{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 2;
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CHARACTERS_NAME_TEXT"), gdjs.OptionCode.GDCHARACTERS_95NAME_95TEXTObjects2);
gdjs.copyArray(runtimeScene.getObjects("SELECTION_LEFT_CHARACTERS"), gdjs.OptionCode.GDSELECTION_95LEFT_95CHARACTERSObjects2);
{for(var i = 0, len = gdjs.OptionCode.GDSELECTION_95LEFT_95CHARACTERSObjects2.length ;i < len;++i) {
    gdjs.OptionCode.GDSELECTION_95LEFT_95CHARACTERSObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.OptionCode.GDCHARACTERS_95NAME_95TEXTObjects2.length ;i < len;++i) {
    gdjs.OptionCode.GDCHARACTERS_95NAME_95TEXTObjects2[i].setString("Therwall");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}}

}


{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 3;
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("CHARACTERS_NAME_TEXT"), gdjs.OptionCode.GDCHARACTERS_95NAME_95TEXTObjects2);
gdjs.copyArray(runtimeScene.getObjects("SELECTION_LEFT_CHARACTERS"), gdjs.OptionCode.GDSELECTION_95LEFT_95CHARACTERSObjects2);
gdjs.copyArray(runtimeScene.getObjects("SELECTION_RIGHT_CHARACTERS"), gdjs.OptionCode.GDSELECTION_95RIGHT_95CHARACTERSObjects2);
{for(var i = 0, len = gdjs.OptionCode.GDSELECTION_95LEFT_95CHARACTERSObjects2.length ;i < len;++i) {
    gdjs.OptionCode.GDSELECTION_95LEFT_95CHARACTERSObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.OptionCode.GDSELECTION_95RIGHT_95CHARACTERSObjects2.length ;i < len;++i) {
    gdjs.OptionCode.GDSELECTION_95RIGHT_95CHARACTERSObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.OptionCode.GDCHARACTERS_95NAME_95TEXTObjects2.length ;i < len;++i) {
    gdjs.OptionCode.GDCHARACTERS_95NAME_95TEXTObjects2[i].setString("Therywall");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SELECTION_RIGHT_MUSIC"), gdjs.OptionCode.GDSELECTION_95RIGHT_95MUSICObjects2);

gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionCode.mapOfGDgdjs_46OptionCode_46GDSELECTION_9595RIGHT_9595MUSICObjects2Objects, runtimeScene, true, false);
}if (gdjs.OptionCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.OptionCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SELECTION_LEFT_MUSIC"), gdjs.OptionCode.GDSELECTION_95LEFT_95MUSICObjects2);

gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionCode.mapOfGDgdjs_46OptionCode_46GDSELECTION_9595LEFT_9595MUSICObjects2Objects, runtimeScene, true, false);
}if (gdjs.OptionCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.OptionCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SELECTION_SOUND_RIGHT"), gdjs.OptionCode.GDSELECTION_95SOUND_95RIGHTObjects2);

gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionCode.mapOfGDgdjs_46OptionCode_46GDSELECTION_9595SOUND_9595RIGHTObjects2Objects, runtimeScene, true, false);
}if (gdjs.OptionCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.OptionCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SELECTION_SOUND_LEFT"), gdjs.OptionCode.GDSELECTION_95SOUND_95LEFTObjects2);

gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionCode.mapOfGDgdjs_46OptionCode_46GDSELECTION_9595SOUND_9595LEFTObjects2Objects, runtimeScene, true, false);
}if (gdjs.OptionCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.OptionCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BACK_TO_MENU_BTN"), gdjs.OptionCode.GDBACK_95TO_95MENU_95BTNObjects2);

gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionCode.mapOfGDgdjs_46OptionCode_46GDBACK_9595TO_9595MENU_9595BTNObjects2Objects, runtimeScene, true, false);
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OptionCode.GDBACK_95TO_95MENU_95BTNObjects2 */
{for(var i = 0, len = gdjs.OptionCode.GDBACK_95TO_95MENU_95BTNObjects2.length ;i < len;++i) {
    gdjs.OptionCode.GDBACK_95TO_95MENU_95BTNObjects2[i].setAnimation(1);
}
}
{ //Subevents
gdjs.OptionCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BACK_TO_MENU_BTN"), gdjs.OptionCode.GDBACK_95TO_95MENU_95BTNObjects1);

gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionCode.mapOfGDgdjs_46OptionCode_46GDBACK_9595TO_9595MENU_9595BTNObjects1Objects, runtimeScene, true, true);
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OptionCode.GDBACK_95TO_95MENU_95BTNObjects1 */
{for(var i = 0, len = gdjs.OptionCode.GDBACK_95TO_95MENU_95BTNObjects1.length ;i < len;++i) {
    gdjs.OptionCode.GDBACK_95TO_95MENU_95BTNObjects1[i].setAnimation(0);
}
}}

}


};gdjs.OptionCode.eventsList11 = function(runtimeScene) {

{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "01 Start Menu.ogg", 1, true, 100, 1);
}}

}


};gdjs.OptionCode.eventsList12 = function(runtimeScene) {

{


gdjs.OptionCode.eventsList10(runtimeScene);
}


{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 0;
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MUSIC_OPTION"), gdjs.OptionCode.GDMUSIC_95OPTIONObjects1);
gdjs.copyArray(runtimeScene.getObjects("SELECTION_LEFT_MUSIC"), gdjs.OptionCode.GDSELECTION_95LEFT_95MUSICObjects1);
gdjs.copyArray(runtimeScene.getObjects("SELECTION_RIGHT_MUSIC"), gdjs.OptionCode.GDSELECTION_95RIGHT_95MUSICObjects1);
{for(var i = 0, len = gdjs.OptionCode.GDMUSIC_95OPTIONObjects1.length ;i < len;++i) {
    gdjs.OptionCode.GDMUSIC_95OPTIONObjects1[i].setString("On");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.OptionCode.GDSELECTION_95LEFT_95MUSICObjects1.length ;i < len;++i) {
    gdjs.OptionCode.GDSELECTION_95LEFT_95MUSICObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.OptionCode.GDSELECTION_95RIGHT_95MUSICObjects1.length ;i < len;++i) {
    gdjs.OptionCode.GDSELECTION_95RIGHT_95MUSICObjects1[i].hide(false);
}
}{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}}

}


{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1;
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MUSIC_OPTION"), gdjs.OptionCode.GDMUSIC_95OPTIONObjects1);
gdjs.copyArray(runtimeScene.getObjects("SELECTION_LEFT_MUSIC"), gdjs.OptionCode.GDSELECTION_95LEFT_95MUSICObjects1);
gdjs.copyArray(runtimeScene.getObjects("SELECTION_RIGHT_MUSIC"), gdjs.OptionCode.GDSELECTION_95RIGHT_95MUSICObjects1);
{for(var i = 0, len = gdjs.OptionCode.GDMUSIC_95OPTIONObjects1.length ;i < len;++i) {
    gdjs.OptionCode.GDMUSIC_95OPTIONObjects1[i].setString("Off");
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.OptionCode.GDSELECTION_95RIGHT_95MUSICObjects1.length ;i < len;++i) {
    gdjs.OptionCode.GDSELECTION_95RIGHT_95MUSICObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.OptionCode.GDSELECTION_95LEFT_95MUSICObjects1.length ;i < len;++i) {
    gdjs.OptionCode.GDSELECTION_95LEFT_95MUSICObjects1[i].hide(false);
}
}{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}}

}


{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SELECTION_SOUND_LEFT"), gdjs.OptionCode.GDSELECTION_95SOUND_95LEFTObjects1);
gdjs.copyArray(runtimeScene.getObjects("SELECTION_SOUND_RIGHT"), gdjs.OptionCode.GDSELECTION_95SOUND_95RIGHTObjects1);
gdjs.copyArray(runtimeScene.getObjects("SOUND_OPTION"), gdjs.OptionCode.GDSOUND_95OPTIONObjects1);
{for(var i = 0, len = gdjs.OptionCode.GDSOUND_95OPTIONObjects1.length ;i < len;++i) {
    gdjs.OptionCode.GDSOUND_95OPTIONObjects1[i].setString("On");
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{for(var i = 0, len = gdjs.OptionCode.GDSELECTION_95SOUND_95LEFTObjects1.length ;i < len;++i) {
    gdjs.OptionCode.GDSELECTION_95SOUND_95LEFTObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.OptionCode.GDSELECTION_95SOUND_95RIGHTObjects1.length ;i < len;++i) {
    gdjs.OptionCode.GDSELECTION_95SOUND_95RIGHTObjects1[i].hide(false);
}
}}

}


{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("SELECTION_SOUND_LEFT"), gdjs.OptionCode.GDSELECTION_95SOUND_95LEFTObjects1);
gdjs.copyArray(runtimeScene.getObjects("SELECTION_SOUND_RIGHT"), gdjs.OptionCode.GDSELECTION_95SOUND_95RIGHTObjects1);
gdjs.copyArray(runtimeScene.getObjects("SOUND_OPTION"), gdjs.OptionCode.GDSOUND_95OPTIONObjects1);
{for(var i = 0, len = gdjs.OptionCode.GDSOUND_95OPTIONObjects1.length ;i < len;++i) {
    gdjs.OptionCode.GDSOUND_95OPTIONObjects1[i].setString("Off");
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{for(var i = 0, len = gdjs.OptionCode.GDSELECTION_95SOUND_95RIGHTObjects1.length ;i < len;++i) {
    gdjs.OptionCode.GDSELECTION_95SOUND_95RIGHTObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.OptionCode.GDSELECTION_95SOUND_95LEFTObjects1.length ;i < len;++i) {
    gdjs.OptionCode.GDSELECTION_95SOUND_95LEFTObjects1[i].hide(false);
}
}}

}


{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) < 0;
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("MUSIC_OPTION").sub(0);
}}

}


{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) > 1;
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("MUSIC_OPTION").add(0);
}}

}


{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) < 0;
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).sub(0);
}}

}


{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) > 1;
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).add(0);
}}

}


{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{



}


{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.OptionCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.OptionCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


gdjs.OptionCode.condition0IsTrue_0.val = false;
{
gdjs.OptionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "u");
}if (gdjs.OptionCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, false);
}}

}


};

gdjs.OptionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OptionCode.GDMainMenu_95BGObjects1.length = 0;
gdjs.OptionCode.GDMainMenu_95BGObjects2.length = 0;
gdjs.OptionCode.GDMainMenu_95BGObjects3.length = 0;
gdjs.OptionCode.GDMainMenu_95BGObjects4.length = 0;
gdjs.OptionCode.GDCHARACTERS_95NAME_95TEXTObjects1.length = 0;
gdjs.OptionCode.GDCHARACTERS_95NAME_95TEXTObjects2.length = 0;
gdjs.OptionCode.GDCHARACTERS_95NAME_95TEXTObjects3.length = 0;
gdjs.OptionCode.GDCHARACTERS_95NAME_95TEXTObjects4.length = 0;
gdjs.OptionCode.GDCHARACTERS_95TEXTObjects1.length = 0;
gdjs.OptionCode.GDCHARACTERS_95TEXTObjects2.length = 0;
gdjs.OptionCode.GDCHARACTERS_95TEXTObjects3.length = 0;
gdjs.OptionCode.GDCHARACTERS_95TEXTObjects4.length = 0;
gdjs.OptionCode.GDSELECTION_95LEFT_95CHARACTERSObjects1.length = 0;
gdjs.OptionCode.GDSELECTION_95LEFT_95CHARACTERSObjects2.length = 0;
gdjs.OptionCode.GDSELECTION_95LEFT_95CHARACTERSObjects3.length = 0;
gdjs.OptionCode.GDSELECTION_95LEFT_95CHARACTERSObjects4.length = 0;
gdjs.OptionCode.GDSELECTION_95RIGHT_95CHARACTERSObjects1.length = 0;
gdjs.OptionCode.GDSELECTION_95RIGHT_95CHARACTERSObjects2.length = 0;
gdjs.OptionCode.GDSELECTION_95RIGHT_95CHARACTERSObjects3.length = 0;
gdjs.OptionCode.GDSELECTION_95RIGHT_95CHARACTERSObjects4.length = 0;
gdjs.OptionCode.GDMUSIC_95TEXTObjects1.length = 0;
gdjs.OptionCode.GDMUSIC_95TEXTObjects2.length = 0;
gdjs.OptionCode.GDMUSIC_95TEXTObjects3.length = 0;
gdjs.OptionCode.GDMUSIC_95TEXTObjects4.length = 0;
gdjs.OptionCode.GDSOUND_95TEXTObjects1.length = 0;
gdjs.OptionCode.GDSOUND_95TEXTObjects2.length = 0;
gdjs.OptionCode.GDSOUND_95TEXTObjects3.length = 0;
gdjs.OptionCode.GDSOUND_95TEXTObjects4.length = 0;
gdjs.OptionCode.GDSELECTION_95LEFT_95MUSICObjects1.length = 0;
gdjs.OptionCode.GDSELECTION_95LEFT_95MUSICObjects2.length = 0;
gdjs.OptionCode.GDSELECTION_95LEFT_95MUSICObjects3.length = 0;
gdjs.OptionCode.GDSELECTION_95LEFT_95MUSICObjects4.length = 0;
gdjs.OptionCode.GDSELECTION_95RIGHT_95MUSICObjects1.length = 0;
gdjs.OptionCode.GDSELECTION_95RIGHT_95MUSICObjects2.length = 0;
gdjs.OptionCode.GDSELECTION_95RIGHT_95MUSICObjects3.length = 0;
gdjs.OptionCode.GDSELECTION_95RIGHT_95MUSICObjects4.length = 0;
gdjs.OptionCode.GDMUSIC_95OPTIONObjects1.length = 0;
gdjs.OptionCode.GDMUSIC_95OPTIONObjects2.length = 0;
gdjs.OptionCode.GDMUSIC_95OPTIONObjects3.length = 0;
gdjs.OptionCode.GDMUSIC_95OPTIONObjects4.length = 0;
gdjs.OptionCode.GDSELECTION_95SOUND_95LEFTObjects1.length = 0;
gdjs.OptionCode.GDSELECTION_95SOUND_95LEFTObjects2.length = 0;
gdjs.OptionCode.GDSELECTION_95SOUND_95LEFTObjects3.length = 0;
gdjs.OptionCode.GDSELECTION_95SOUND_95LEFTObjects4.length = 0;
gdjs.OptionCode.GDSELECTION_95SOUND_95RIGHTObjects1.length = 0;
gdjs.OptionCode.GDSELECTION_95SOUND_95RIGHTObjects2.length = 0;
gdjs.OptionCode.GDSELECTION_95SOUND_95RIGHTObjects3.length = 0;
gdjs.OptionCode.GDSELECTION_95SOUND_95RIGHTObjects4.length = 0;
gdjs.OptionCode.GDBACK_95TO_95MENU_95BTNObjects1.length = 0;
gdjs.OptionCode.GDBACK_95TO_95MENU_95BTNObjects2.length = 0;
gdjs.OptionCode.GDBACK_95TO_95MENU_95BTNObjects3.length = 0;
gdjs.OptionCode.GDBACK_95TO_95MENU_95BTNObjects4.length = 0;
gdjs.OptionCode.GDSOUND_95OPTIONObjects1.length = 0;
gdjs.OptionCode.GDSOUND_95OPTIONObjects2.length = 0;
gdjs.OptionCode.GDSOUND_95OPTIONObjects3.length = 0;
gdjs.OptionCode.GDSOUND_95OPTIONObjects4.length = 0;
gdjs.OptionCode.GDBack_95To_95Main_95Menu_95TextObjects1.length = 0;
gdjs.OptionCode.GDBack_95To_95Main_95Menu_95TextObjects2.length = 0;
gdjs.OptionCode.GDBack_95To_95Main_95Menu_95TextObjects3.length = 0;
gdjs.OptionCode.GDBack_95To_95Main_95Menu_95TextObjects4.length = 0;

gdjs.OptionCode.eventsList12(runtimeScene);
return;

}

gdjs['OptionCode'] = gdjs.OptionCode;
