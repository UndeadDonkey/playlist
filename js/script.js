/* global $ */

// BELOW Update the songs to your favorites songs. There should be at least 4.
var songs = [
    "Despacito",
    "Gangnam Style",
    "Friday",
    "Pokemon Go",
    "Pen-Pinapple-Apple-Pen",
    "Mine Diamonds"
];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_urls = [
    "",
    "",
    "",
    "",
    "","","",
    "","",
    "",
    "",
    "","","","",
];
var artists = [];
var songLength = [];
var links = [];



function displaySongInfo(){
    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    var songName = $("#song").val();
    songs.push(songName);
    // BELOW write the code to add new items to each of the other arrays


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
