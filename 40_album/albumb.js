"use strict";
function make_album(artist, title, tracks) {
    const track = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        track.tracks = tracks;
    }
    return track;
}
const album1 = make_album(`Michael Jackson`, `Thriller,1982-84`, 80);
console.log(album1);
const album2 = make_album(`Lionel Richie`, `Can't Slow Down,1983-84`, 40);
console.log(album2);
const album3 = make_album(`Bruce Springsteen`, `Dancing in the Dark,1984-86`, 23);
console.log(album3);
const album4 = make_album(`Janet Jackson`, `Control,1986-87`, 18);
console.log(album4);
