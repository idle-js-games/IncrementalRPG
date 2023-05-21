// All OnLoad Functions
// Modal Commented out during development
$(document).ready(function () {
    $('#onLoadModal').modal();
    updateValues();


    // Get town and mayor names and display them.
    $('#modalClose').click(function () {
        names.town = document.getElementById('town').value;
        document.getElementById("townName").innerHTML = names.town;
        names.mayor = document.getElementById('mayor').value;
        document.getElementById("mayorName").innerHTML = names.mayor;
    });

   
 
    function Timer(){
    	if(timer > 0){
        	timer--;
            updateValues();
        } else{
        	lastSave = new Date().toLocaleString();
        	timer = 10;
            updateValues();
        }
    }


    setInterval(Timer,1000);
    
	setInterval(function () { saveGame(); }, 10000);
//	load_game();
}); /*document.ready*/

