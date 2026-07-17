const moods={
    happy:{
        
        title:"Happy",
        quote:"Happiness is the best makeup btw.",
        color:"#FFE066",
        playlist:"https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC",
        songs:[{title:"Happy",artist:"Pharrell Williams",duration:"3:53"},
            {title:"Good As Hell",artist:"Lizzo",duration:"2:39"},
            {title:"Can't Stop The Feeling!",artist:"Justin Timberlake",duration:"3:56"}
        ]
},

    sad:{
        
        color:"#B8C0FF",
        title:"Sad",
        quote:"sorry but, Crying burns calories...technically.",
        playlist:"https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0",
        songs:[{title:"Someone You Loved",artist:"Lewis Capaldi",duration:"3:02"},
            {title:"All Of Me",artist:"John Legend",duration:"4:29"},
            {title:"Say Something",artist:"A Great Big World",duration:"3:49"}
        ]
},
    chill:{
        
        color:"#BDEFFF",
        title:"Chill",
        quote:"Doing absolutely nothing is a full-time job.",
        playlist:"https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6",
        songs:[{title:"Sunflower",artist:"Rex Orange County",duration:"3:10"},
            {title:"Lost In Japan",artist:"Shawn Mendes",duration:"3:21"},
            {title:"Electric Feel",artist:"MGMT",duration:"3:48"}
        ]
},
    focus:{
        
        color:"#D5F5C3",
        title:"Focus",
        quote:"Focus now, flex later.",
        playlist:"https://open.spotify.com/embed/playlist/37i9dQZF1DX8NTLI2TtZa6",
        songs:[{title:"Weightless",artist:"Marconi Union",duration:"8:10"},
            {title:"Clair de Lune",artist:"Debussy",duration:"5:11"},
            {title:"Time",artist:"Hans Zimmer",duration:"4:35"}
        ]
},
    romantic:{
        
        color:"#FFD6E7",
        title:"Romantic",
        quote:"I wish I could feel this mood... but I'm single.",
        playlist:"https://open.spotify.com/embed/playlist/37i9dQZF1DX7rOY2tZUw1k",
        songs:[{title:"Perfect",artist:"Ed Sheeran",duration:"4:23"},
            {title:"All Of Me",artist:"John Legend",duration:"4:29"},
            {title:"I Will Always Love You",artist:"Whitney Houston",duration:"4:31"}
        ]
    }
};
function showMood(name){
    const mood=moods[name];
    document.getElementById("moodtitle").innerHTML=mood.title;
    document.getElementById("moodquote").innerHTML=mood.quote;
    document.getElementById("spotifyPlayer").src=mood.playlist;
    document.body.style.background=`linear-gradient(135deg, ${mood.color}, #ffffff, #fce8ff)`;
    let html="";
    mood.songs.forEach(song=>{html += `
        <div class="songcard">
            <div class="songInfo">
            <h3>🎵 ${song.title}</h3>
            <p>${song.artist}</p>
            </div>
            <div class="songRight">
                <span>${song.duration}</span>
            </div>
        </div>
        `;});
document.getElementById("moodsong").innerHTML = html;
}
const btn=document.getElementById("themebtn");
btn.onclick=()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        btn.innerHTML="☀️";
    } else {
        btn.innerHTML="🌙";
    }
}