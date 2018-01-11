var x = document.getElementById("currentSong")
function chooseSong(event){
    var song;
    if(event.innerText == 'Rap'){
        song = 'FloatingWorld.mp3';
    }else if(event.innerText == 'Country'){
        song = 'Work.mp3';
    }
    x.innerHTML = '<source src="'+song+'" type="audio/mpeg">';
}
function play(){
    x.load();
    x.play();
    
}
function pause(){
    x.pause();
}