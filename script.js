const searchSong = async () => {
    const searchField = document.getElementById('search-field').value;
    const url = `https://api.lyrics.ovh/suggest/${searchField}`

    //load data
    fetch(url)
        .then(res => res.json())
        .then(data => displaySongs(data.data))
        .catch(error => console.log(error));

// const searchSong = async () => {
//     const searchField = document.getElementById('search-field').value;
//     const url = `https://api.lyrics.ovh/suggest/${searchField}`

    //load data
    // const res = await fetch(url);
    // const data = await res.json();
    //  displaySongs(data.data);
}

const displaySongs = songs => {
    const songContainer = document.getElementById('song-container');
    songContainer.innerText = '';
    songs.forEach(songs => {
        const songDiv = document.createElement('div');
        songDiv.className = 'search-result col-md-8 mx-auto py-4';
        songDiv.innerHTML = `<div class="single-result row align-items-center my-3 p-3">
    <div class="col-md-8">
        <h3 class="lyrics-name">${songs.title}</h3>
        <p class="author lead">Album by <span>${songs.artist.name}</span></p>
        <audio
        controls
        src="${songs.preview}">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
    </div>
    <div class="col-md-4 text-md-right text-center">
        <button onclick="getLyric('${songs.artist.name}', '${songs.title}')" class="btn btn-success">Get Lyrics</button>
    </div>
    </div>`
        songContainer.appendChild(songDiv);

    });
}

// lyrics 
const getLyric = (artist, lyric) => {
    const url = `https://api.lyrics.ovh/v1/${artist}/${lyric}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayLyrics(data.lyrics))
        .catch(error => console.log(error));
}

const displayLyrics = lyrics => {
    const lyricsDiv = document.getElementById('single-lyrics');

    lyricsDiv.innerText = lyrics;

}