/* global $ */
/* global localStorage */
// BELOW Update the songs to your favorites songs. There should be at least 4.
var songs = [
    "Despacito",
    "Gangnam Style",
    "Friday",
    "Pokemon Go",
    "Pen-Pinapple-Apple-Pen"
];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_urls = [
    "https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Luis_Fonsi_Feat._Daddy_Yankee_-_Despacito_%28Official_Single_Cover%29.png/220px-Luis_Fonsi_Feat._Daddy_Yankee_-_Despacito_%28Official_Single_Cover%29.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Gangnam_Style_Official_Cover.png/220px-Gangnam_Style_Official_Cover.png",
    "https://www.nydailynews.com/resizer/jDO546ilsLSbvFlrAtqwf6ZDRCg=/1400x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/LD3YGZSLV6MVXK6GZUCFJTP2YU.jpg",
    "https://i.ytimg.com/vi/vfc42Pb5RA8/maxresdefault.jpg",
    "https://www.kiss925.com/wp-content/uploads/sites/59/2016/09/Pen-Pineapple-1052x591.png"
];
var artists = [
    "Luis Fonsi",
    "PSY",
    "Rebecca Black",
    "Mishovy silenosti",
    "Daimaou Kosaka"
];
var songLength = [
    "4:41",
    "4:12",
    "3:48",
    "1:16",
    "2:43"
];
var links = [
    "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
    "https://www.youtube.com/watch?v=9bZkp7q19f0",
    "https://www.youtube.com/watch?v=kfVsfOSbJY0",
    "https://www.youtube.com/watch?v=vfc42Pb5RA8",
    "https://www.youtube.com/watch?v=Ct6BUPvE2sM"
];
localStorage.setItem("s",songs);


function displaySongInfo(){
    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
    images_urls.forEach(function(url) {
        $("#images").append(`<img src="${url}">`); 
    });
    artists.forEach(function(artist) {
        $("#artists").append("<p>" + artist + "</p>"); 
    });
    songLength.forEach(function(length) {
        $("#lengths").append("<p>" + length + "</p>"); 
    });
    links.forEach(function(link,index) {
        $("#links").append(`<a href="${link}">${songs[index]}</a>`); 
    });
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}


function addSongInfo(){
    var songName = $("#song").val();
    var img = $("#image").val();
    var artist = $("#artist").val();
    var time = $("#length").val();
    var url = $("#link").val();
    songs.push(songName);
    // BELOW write the code to add new items to each of the other arrays
    images_urls.push(img);
    artists.push(artist);
    songLength.push(time);
    console.log(time);
    links.push(url);
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
