var x = document.getElementById("currentSong");
datavalue = document.getElementById('source').datavalue;
var song;//current song playing in jukebox
var playing = false;
//List of all Playlists 
var rap = ['Feather','goosebumps'];//list of all songs in jukebox
var country =['breakyheart','hurt','yourman'];
var pop = ['Work','Slide'];
var classic = ['Canon','Allegro','Bumblebee','MansNotHot'];
var playlists = [rap,country,pop,classic]; //contains all the playlists we will have
var playlistindex;
var index; //this is so that other functions can mess with the index of list


function chooseSong(event){

	index = 0;
    if(event.id == 'Rap'){
        // song = 'FloatingWorld.mp3';
        console.log('clicked');
        playlistindex = 0;
        changeScreens('Rap');
    }else if(event.id == 'Country'){
        // song = 'Work.mp3';
        playlistindex = 1;
        changeScreens('Country');

    }else if(event.id == 'Pop'){
        // song = 'Work.mp3';
        playlistindex = 2;
        changeScreens('Pop');

    }else if(event.id == 'Classical'){
        // song = 'Work.mp3';
        playlistindex = 3;
        changeScreens('Classical');
    }
    song = playlists[playlistindex][index];
    x.innerHTML = '<source id ="sorce" src="music/'+song+'.mp3" type="audio/mpeg" datavalue="'+song+'">';
    // datavalue = song;
 
    // x.play();
}
function playsong(){
	//checks if selected song is different from current song and reloads players. if not 
	//will continue from current position in song
	 console.log(datavalue +"/"+song);		
	if(datavalue != song ){
    	datavalue = song;
    	x.load();
    }
    playing = true;
    var np = document.getElementById('NowPlaying');
    np.innerHTML = '<p>Now Playing: '+song;
    x.play();
}
function pause(){
	playing =  false;
    x.pause();
}
function shuffle(){
	index = Math.floor(Math.random()*playlists[playlistindex].length);
	song = playlists[playlistindex][index];
	// playsong();

	console.log(datavalue + " /" + song)
	if(song === datavalue && playlists[playlistindex].length != 1){
		//call this function to keep running until song is different
		console.log('same song');
		return shuffle();

	}else {
		console.log('diff song')
		// playsong();
		// console.log(datavalue)

	}
	
	x.innerHTML = '<source id ="sorce" src="music/'+song+'.mp3" type="audio/mpeg" datavalue="'+song+'">';
		// datavalue = song;
    playsong();
}

function next(){
	//goes to next song in list
	index++;
	if(index>= playlists[playlistindex].length){
		//resets index to 0 if it goes over the song limit
		index = 0;
	}
	song = playlists[playlistindex][index];
	x.innerHTML = '<source id ="sorce" src="music/'+song+'.mp3" type="audio/mpeg" datavalue="'+song+'">';
    playsong();

}
function previous(){
	index--;
	if(index< 0){
		//resets index to the last song if it goes below 0.
		index =  playlists[playlistindex].length -1;
	} 
	
	song = playlists[playlistindex][index];
	x.innerHTML = '<source id ="sorce" src="music/'+song+'.mp3" type="audio/mpeg" datavalue="'+song+'">';
	console.log(datavalue);
    playsong();
}
function toggle(){
	if(playing == false)
	{
		playsong();
	}else if (playing == true) {
		pause();
	}
}
 
function changeScreens(msg){
	var screen = document.getElementById('screen');
	screen.innerHTML = '<h3 style="color:aquamarine">'+msg+'</h3>'+
				'<div id= "AllGenre"><table id="table"style="width:100%"><tr><th>Title</th></tr>'+
                     '</table>'+
                     '<div id="NowPlaying"><p>Now Playing:</p></div></div>';
  	filltable();
}    
function filltable(){
	for(var i =0;i<playlists[playlistindex].length;i++){
		addRow(playlists[playlistindex][i]);
	}
}
function addRow(str)
{
	var table = document.getElementById('table');

	//Using table.length in insertRow adds the new row at the end of the table. Using 0
	// places it on the top
	var row = table.insertRow(table.length);

	var cell1 = row.insertCell(0);

	cell1.innerHTML = str;
}

function homeScreen(){
	var screen = document.getElementById('screen');
	screen.innerHTML ='<div id= "AllGenre">'+
                   '<div class="genre" id="Rap" onclick="chooseSong(this)">'+
                    '    <p class="playlistText">Rap</p>'+
                   ' </div>'+

                    '<div class="genre" id="Country" onclick="chooseSong(this)">'+
                       ' <p class="playlistText">Country</p>'+
                   ' </div>'+

                    '<div class="genre" id="Pop" onclick="chooseSong(this)">'+
                       ' <p class="playlistText">Pop</p>'+
                   ' </div>'+

                    '<div class="genre" id="Classical" onclick="chooseSong(this)">'+
                        '<p class="playlistText">Classical</p>'+
                    '</div>'+
                '</div>';
}

