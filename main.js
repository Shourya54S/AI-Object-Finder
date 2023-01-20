song = "";
function preload(){
song = loadSound("song.mp3");
} 
function draw(){}
function play(){ 
song.play(); 
song.setVolume(0.2);
}