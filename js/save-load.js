/*
 * Save the Game to Local Storage
 */
function saveGame() {
    console.log('Saving Game');
    localStorage['rpg_save[meta]'] = btoa(JSON.stringify(meta));
    localStorage['rpg_save[resource]'] = btoa(JSON.stringify(resource));
    localStorage['rpg_save[workers]'] = btoa(JSON.stringify(workers));
    localStorage['rpg_save[buildings]'] = btoa(JSON.stringify(buildings));
    localStorage['rpg_save[upgrades]'] = btoa(JSON.stringify(upgrades));

    forceUpdateSave();
}

/*
 * Load the Game from Local Storage
 */
function loadGame() {
    if (!localStorage['rpg_save[meta]']) {
        message('No Saved Game - Starting Fresh', 'info');
        return;
    } else {
        message('Loading Saved Game', 'info');
    }

    meta = JSON.parse(atob(localStorage['rpg_save[meta]']));
   
    //resource = JSON.parse(atob(localStorage['rpg_save[resource]']));

    updateSaveStructure();


    workers = JSON.parse(atob(localStorage['rpg_save[workers]']));
    buildings = JSON.parse(atob(localStorage['rpg_save[buildings]']));
    upgrades = JSON.parse(atob(localStorage['rpg_save[upgrades]']));
}


function updateSaveStructure(){

    resource_old = JSON.parse(atob(localStorage['rpg_save[resource]']));

    // Migrate date from old structure to a new structure without break the save file
      for (const prop in resource_old) {
        if (resource.hasOwnProperty(prop)) {

           resource[prop] = resource_old[prop];
        }
      }

    // Remove the old save structure
      resource_old = undefined;

    console.log("tempResource = " + resource.wood.time_to_test); 

      
    //  Store data to a new local store structure 
    localStorage['rpg_save[resource]'] = btoa(JSON.stringify(resource));

      
}
