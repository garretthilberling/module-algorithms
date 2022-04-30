// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  // add your code here...
  let playlistMins = 0;
  let playlistSongs = 0;
  arr.sort((a,b) => { return a - b; });
  
  for(let i = 0; i < arr.length; i++) {
      if(playlistMins + arr[i] < 60) {
        playlistMins += arr[i];
        playlistSongs++; 
      }
  }
  
  return playlistSongs;
};
