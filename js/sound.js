//Audio Declarations
var chopping_wood_audio = new Audio("sounds/resources/chopping_wood.mp3");
var mine_stone_audio = new Audio("sounds/resources/mine_stone.mp3");
var mine_iron_audio = new Audio("sounds/resources/mine_iron.mp3");
var gather_food_audio = new Audio("sounds/resources/gather_food.mp3");
var background_audio = new Audio("sounds/background/bensound-happiness.mp3");

//Audio Helper Function

function audioHelper(audioSupport){
	if(audioSupport.duration > 0 && !audioSupport.paused){
		//already playing
		audioSupport.pause();
		audioSupport.currentTime = 0;
		audioSupport.play();
	} else{
        	//not playing
			audioSupport.play();    
        }
}


//Audio Helper Function

function playSound(sound_name){
	
	 if(sound_name == 'wood'){
            audioHelper(chopping_wood_audio);  
     }

      if(sound_name == 'stone' || sound_name == 'brick' || sound_name == 'gold'  || sound_name == 'silver'){
            audioHelper(mine_stone_audio);  
         }

 if(sound_name == 'iron'){
            audioHelper(mine_iron_audio);  
         }


 if(sound_name == 'meat'){
            audioHelper(gather_food_audio);  
         }


}