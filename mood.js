const moods={
    happy:{
        title:"Happy",
        quote:"Happiness is the best makeup btw.",
        playlist:"https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC",
        songs:["Happy - Pharrell Williams","Good as Hell - Lizzo","Can't Stop the Feeling! - Justin Timberlake"]
    },
    sad:{
        title:"Sad",
        quote:"sorry but, Crying burns calories...technically.",
        playlist:"https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0",
        songs:["Someone You Loved - Lewis Capaldi","All of Me - John Legend","Say Something - A Great Big World"]
    },
    chill:{
        title:"Chill",
        quote:"Doing absolutely nothing is a full-time job.",
        playlist:"https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6",
        songs:["Sunflower - Rex Orange County","Lost in Japan - Shawn Mendes","Electric Feel - MGMT"]
    },
    focus:{
        title:"Focus",
        quote:"Focus now, flex later.",
        playlist:"https://open.spotify.com/embed/playlist/37i9dQZF1DX8NTLI2TtZa6",
        songs:["Weightless - Marconi Union","Clair de Lune - Claude Debussy","Time - Hans Zimmer"]
    },
    romantic:{
        title:"Romantic",
        quote:"I wish I could feel this mood... but I'm single.",
        playlist:"https://open.spotify.com/embed/playlist/37i9dQZF1DX7rOY2tZUw1k",
        songs:["Perfect - Ed Sheeran","All of Me - John Legend","I Will Always Love You - Whitney Houston"]
    }
}
function showMood(moodName){
    document.getElementById("moodtitle").innerText=moods[moodName].title;
    document.getElementById("quote").innerText=moods[moodName].quote;
    let list="";
    moods[moodName].songs.forEach(song=>{
        list+=`<li>${song}</li>`;
    });
    document.getElementById("song").innerHTML=list;
    document.getElementById("spotifyPlayer").src =
moods[moodName].playlist;
}