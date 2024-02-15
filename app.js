const music = new Audio('audio/4.mp3');


const songs = [
    {
        id: 1,
        songName: `On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.webp",
    },
    {
        id: 2,
        songName: `Be Alright <br> <div class="subtitle">Dean Lewis</div>`,
        poster: "images/2.webp",
    },
    {
        id: 3,
        songName: `Perfect<br> <div class="subtitle">Ed Sheeran</div>`,
        poster: "images/3.webp",
    },
    {
        id: 4,
        songName: `Ve Kamleya <br> <div class="subtitle">Pritam, Arijit Singh, Shreya Ghoshal, Shadab Faridi, Altamash Faridi & Amitabh Bhattacharya</div>`,
        poster: "images/4.webp",
    },
    {
        id: 5,
        songName: `Satranga <br> <div class="subtitle">Arijit Singh, Shreyas Puranik & Siddharth-Garima</div>`,
        poster: "images/5.webp",
    },
    {
        id: 6,
        songName: `Raaz Aankhein Teri <br> <div class="subtitle">Arijit Singh, Jeet Gannguli & Rashmi Virag</div>`,
        poster: "images/6.webp",
    },
    {
        id: 7,
        songName: `Aadat <br> <div class="subtitle">Atif Aslam, Jal, Mithoon & Sayeed Quadri</div>`,
        poster: "images/7.webp",
    },
    {
        id: 8,
        songName: `Woh Lamhe Woh Baatein <br> <div class="subtitle">Atif Aslam, Mithoon, Naresh Sharma, Roop Kumar Rathod & Sayeed Quadri</div>`,
        poster: "images/8.webp",
    },
    {
        id: 9,
        songName: `Tera Hua <br> <div class="subtitle">Atif Aslam</div>`,
        poster: "images/9.webp",
    },
    {
        id: 10,
        songName: `Pehle Bhi Main <br> <div class="subtitle">Vishal Mishra & Raj Shekhar</div>`,
        poster: "images/10.webp",
    },
    {
        id: 11,
        songName: `Ram Siya Ram (From "Adipurush") <br> <div class="subtitle">Sachet Tandon, Parampara Tandon & Sachet-Parampara
        </div>`,
        poster: "images/11.webp",
    },
    {
        id: 12,
        songName: `Aaj Se Teri<br>
        <div class="subtitle">Arijit Singh, Amit Trivedi & Kausar Munir - Padman</div>`,
        poster: "images/12.webp",
    },
    {
        id: 13,
        songName: `Aami Shei Manushta Aar Nei <br>
        <div class="subtitle">Anupam Roy</div>`,
        poster: "images/13.webp",
    },
    {
        id: 14,
        songName: `Tu Har Lamha <br>
        <div class="subtitle">Arijit Singh, Anupam Amod, Imran Ali & Sayeed Quadri - Khamoshiyan (Original Motion Picture Soundtrack)</div>`,
        poster: "images/14.webp",
    },
    {
        id: 15,
        songName: `Sajde <br>
        <div class="subtitle">Shankar-Ehsaan-Loy, Arijit Singh, Nihira Joshi Deshpande & Gulzar - Kill Dil</div>`,
        poster: "images/15.webp",
    },
    {
        id: 16,
        songName: `Tay Hai <br>
        <div class="subtitle">Ankit Tiwari - Rustom</div>`,
        poster: "images/16.webp",
    },
    {
        id: 17,
        songName: `Kaun Kehte Hain Bhagwan Aate Nahi <br>
        <div class="subtitle">Tulsi Kumar & Jubin Nautiyal</div>`,
        poster: "images/17.webp",
    },
    {
        id: 18,
        songName: `Vande Mataram (The Fighter Anthem) From ["Fighter"]Vande Mataram (The Fighter Anthem) From ["Fighter"] <br>
        <div class="subtitle">Vishal Dadlani, Shekhar Ravjiani, Vaibhav Gupta, Subhadeep Das Chowdhury, Dipan Mitra, Utkarsh Wankhede, Piyush Panwar, Obom Tangu & Kumaar</div>`,
        poster: "images/18.webp",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
masterPlay.addEventListener('click', () =>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1')
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }else{
        music.pause();
        wave.classList.remove('active1')
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
})

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background ='rgb(105,105,105,.0)';
    })
}
const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el)=>{
        el.classList.add('fa-circle-play');
        el.classList.remove('fa-circle-pause');
    })
}


let index = 0;
let poster_masterplay = document.getElementById('poster-masterplay')
let download_music = document.getElementById('downloadmusic')
let title = document.getElementById('title')
Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_masterplay.src = `images/${index}.webp`;
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        download_music.href = `audio/${index}.mp3`;


        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach((elss)=>{
            let {songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105,.1)";
        makeAllplays();
        el.target.classList.add('fa-circle-pause');
        el.target.classList.remove('fa-circle-play');
        wave.classList.add('active1');
    });
})


let currentstart = document.getElementById('currentstart');
let currentend = document.getElementById('currentend');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur % 60);

    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }

    currentend.innerText = `${min1}:${sec1}`;
    
    let min2 =  Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr % 60);

    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }

    currentstart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('volume');
let vol_bar = document.getElementsByClassName('volbar')[0];
let vol_dot = document.getElementById('voldot');

vol.addEventListener('change',()=>{
    if(vol.value == 0) {
        vol_icon.classList.remove('fa-volume-up');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.add('fa-volume-xmark');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('fa-volume-up');
        vol_icon.classList.add('fa-volume-low');
        vol_icon.classList.remove('fa-volume-xmark');
    }
    if(vol.value > 50){
        vol_icon.classList.add('fa-volume-up');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.remove('fa-volume-xmark');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=>{
    index-=1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
        poster_masterplay.src = `images/${index}.webp`;
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach((elss)=>{
            let {songName} = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105,.1)";
        makeAllplays();
        el.target.classList.add('fa-circle-pause');
        el.target.classList.remove('fa-circle-play');
        wave.classList.add('active1');
});


next.addEventListener('click', ()=>{
    index++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length ){
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
        poster_masterplay.src = `images/${index}.webp`;
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach((elss)=>{
            let {songName} = elss;
            title.innerHTML = songName;
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105,.1)";
        makeAllplays();
        el.target.classList.add('fa-circle-pause');
        el.target.classList.remove('fa-circle-play');
        wave.classList.add('active1');

})

music.addEventListener('ended',()=>{
        index++;
        music.src = `audio/${index}.mp3`;
        poster_masterplay.src = `images/${index}.webp`;
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        download_music.href = `audio/${index}.mp3`;


        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });

        songTitles.forEach((elss)=>{
            let {songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105,105,105,.1)";
        makeAllplays();
        el.target.classList.add('fa-circle-pause');
        el.target.classList.remove('fa-circle-play');
        wave.classList.add('active1');
});


// search data start
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const{id,songName,poster} = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href ="#"+id;
    card.innerHTML = `
    <img src="${poster}">
                            <div class="content">
                                ${songName}
                            </div>
    `;
    search_results.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');
    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";            
        }

        if (input.value == 0) {
            search_results.style.display = "None";
        } else {
            search_results.style.display = "";
        }
    }
})
// search data end 


let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
});
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let artist_sr = document.getElementsByClassName('artist_sr')[0];


pop_art_right.addEventListener('click',()=>{
    artist_sr.scrollLeft += 330;
});
pop_art_left.addEventListener('click',()=>{
    artist_sr.scrollLeft -= 330;
});