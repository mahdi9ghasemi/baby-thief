
if (typeof gdjs.evtsExt__BackButton__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__BackButton__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BackButton__onFirstSceneLoaded = {};

gdjs.evtsExt__BackButton__onFirstSceneLoaded.conditionTrue_0 = {val:false};
gdjs.evtsExt__BackButton__onFirstSceneLoaded.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__BackButton__onFirstSceneLoaded.userFunc0x3021c90 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs.evtTools.back_button = {
    triggered: false,
    _popStateListener: (event) => {
        gdjs.evtTools.back_button.triggered = true;
        history.pushState("", ""); // Push a new fake state as the old one was popped
    }
};

// Handle back button on the web
history.pushState("", ""); // Push a fake state to prevent switching page when clicking on back
window.addEventListener('popstate', gdjs.evtTools.back_button._popStateListener);

// Handle back button on cordova
document.addEventListener("backbutton", e => {
    e.preventDefault();
    gdjs.evtTools.back_button.triggered = true;
}, false); 

};
gdjs.evtsExt__BackButton__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__BackButton__onFirstSceneLoaded.userFunc0x3021c90(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__BackButton__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__BackButton__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__BackButton__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__BackButton__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__BackButton__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__BackButton__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__BackButton__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
