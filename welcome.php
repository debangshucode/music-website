<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <header>
        <div class="menu-side">
            <h1>Playlist</h1>
            <div class="playlist">
                <h4 class="active"><span></span><i class="fa-solid fa-music"></i> Playlist</h4>
                <h4><span></span><i class="fa-solid fa-music"></i> Recents</h4>
                <h4><span></span><i class="fa-solid fa-music"></i> Recommend</h4>
            </div>
            <div class="menu-song">
                <li class="songItem">
                    <span>01</span>
                    <img src="images/1.webp" alt="">
                    <h5>On My Way <br> <div class="subtitle">Alan Walker</div></h5>
                    <i class="fa-solid playlistplay fa-circle-play" id="1"></i>
                </li>
                <li class="songItem">
                    <span>02</span>
                    <img src="images/2.webp" alt="">
                    <h5>Be Alright <br> <div class="subtitle">Dean Lewis</div></h5>
                    <i class="fa-solid playlistplay fa-circle-play" id="2"></i>
                </li>
                <li class="songItem">
                    <span>03</span>
                    <img src="images/3.webp" alt="">
                    <h5>Perfect<br> <div class="subtitle">Ed Sheeran</div></h5>
                    <i class="fa-solid playlistplay fa-circle-play" id="3"></i>
                </li>
                <li class="songItem">
                    <span>04</span>
                    <img src="images/4.webp" alt="">
                    <h5>Ve Kamleya <br> <div class="subtitle">Pritam, Arijit Singh, Shreya Ghoshal, Shadab Faridi, Altamash Faridi & Amitabh Bhattacharya</div></h5>
                    <i class="fa-solid playlistplay fa-circle-play" id="4"></i>
                </li>
                <li class="songItem">
                    <span>05</span>
                    <img src="images/5.webp" alt="">
                    <h5>Satranga <br> <div class="subtitle">Arijit Singh, Shreyas Puranik & Siddharth-Garima</div></h5>
                    <i class="fa-solid playlistplay fa-circle-play" id="5"></i>
                </li>
                <li class="songItem">
                    <span>06</span>
                    <img src="images/6.webp" alt="">
                    <h5>Raaz Aankhein Teri <br> <div class="subtitle">Arijit Singh, Jeet Gannguli & Rashmi Virag</div></h5>
                    <i class="fa-solid playlistplay fa-circle-play" id="6"></i>
                </li>
                <li class="songItem">
                    <span>07</span>
                    <img src="images/7.webp" alt="">
                    <h5>Aadat <br> <div class="subtitle">Atif Aslam, Jal, Mithoon & Sayeed Quadri</div></h5>
                    <i class="fa-solid playlistplay fa-circle-play" id="7"></i>
                </li>
                <li class="songItem">
                    <span>08</span>
                    <img src="images/8.webp" alt="">
                    <h5>Woh Lamhe Woh Baatein <br> <div class="subtitle">Atif Aslam, Mithoon, Naresh Sharma, Roop Kumar Rathod & Sayeed Quadri</div></h5>
                    <i class="fa-solid playlistplay fa-circle-play" id="8"></i>
                </li>
                <li class="songItem">
                    <span>09</span>
                    <img src="images/9.webp" alt="">
                    <h5>Tera Hua <br> <div class="subtitle">Atif Aslam</div></h5>
                    <i class="fa-solid playlistplay fa-circle-play" id="9"></i>
                </li>
            </div>
        </div>
        
        <div class="song-side">
            <nav>
                <ul>
                    <li>Discover <span></span></li>
                    <li>My Library</li>
                    <li>Radio</li>
                </ul>
                <div class="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search Music...">
                    <div class="search_results">
                    </div>
                </div>
                <div class="user">
                    <img src="images/user.png" alt="">
                </div>
            </nav>
            <div class="content">
                <h1>Arijit Singh</h1>
                <p>Jinpe Chal Ke Manzil Milni Aasaan Ho Vaise Raste Tu Chunta Hai Kahan <br> Kasti Hai Duniya
                    Kass Le Fikre Taane Ungli Pe Aakhir Ginta Bhi Tu Hai Kahan </p>
                <div class="buttons">
                    <button>Play</button>
                    <button>Follow</button>
                </div>
            </div>

            <div class="popular_song">
                <div class="h4">
                    <h4>Popular Song</h4>
                    <div class="btn_s">
                        <i class="fa-solid fa-circle-chevron-left" id="pop_song_left"></i>
                        <i class="fa-solid fa-circle-chevron-right" id="pop_song_right"></i>
                    </div>
                </div>
                <div class="pop_song">
                    <li class="songItem">
                        <div class="img_play">
                            <img src="images/img7.webp" alt="">
                            <i class="fa-solid playlistplay fa-circle-play" id="10"></i>
                        </div>
                        <h5>Aadat <br> <div class="subtitle">Atif Aslam, Jal, Mithoon & Sayeed Quadri</div></h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="images/img7.webp" alt="">
                            <i class="fa-solid playlistplay fa-circle-play" id="11"></i>
                        </div>
                        <h5>Ram Siya Ram (From "Adipurush") <br> <div class="subtitle">Sachet Tandon, Parampara Tandon & Sachet-Parampara
                        </div></h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="images/img7.webp" alt="">
                            <i class="fa-solid playlistplay fa-circle-play" id="12"></i>
                        </div>
                        <h5>Aadat <br> <div class="subtitle">Atif Aslam, Jal, Mithoon & Sayeed Quadri</div></h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="images/img7.webp" alt="">
                            <i class="fa-solid playlistplay fa-circle-play" id="13"></i>
                        </div>
                        <h5>Aadat <br> <div class="subtitle">Atif Aslam, Jal, Mithoon & Sayeed Quadri</div></h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="images/img7.webp" alt="">
                            <i class="fa-solid playlistplay fa-circle-play" id="14"></i>
                        </div>
                        <h5>Aadat <br> <div class="subtitle">Atif Aslam, Jal, Mithoon & Sayeed Quadri</div></h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="images/img7.webp" alt="">
                            <i class="fa-solid playlistplay fa-circle-play" id="15"></i>
                        </div>
                        <h5>Aadat <br> <div class="subtitle">Atif Aslam, Jal, Mithoon & Sayeed Quadri</div></h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="images/img7.webp" alt="">
                            <i class="fa-solid playlistplay fa-circle-play" id="16"></i>
                        </div>
                        <h5>Aadat <br> <div class="subtitle">Atif Aslam, Jal, Mithoon & Sayeed Quadri</div></h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="images/8.webp" alt="">
                            <i class="fa-solid playlistplay fa-circle-play" id="17"></i>
                        </div>
                        <h5>Aadat <br> <div class="subtitle">Atif Aslam, Jal, Mithoon & Sayeed Quadri</div></h5>
                    </li>
                    <li class="songItem">
                        <div class="img_play">
                            <img src="images/img9.webp" alt="">
                            <i class="fa-solid playlistplay fa-circle-play" id="18"></i>
                        </div>
                        <h5>Aadat <br> <div class="subtitle">Atif Aslam, Jal, Mithoon & Sayeed Quadri</div></h5>
                    </li>
                </div>
            </div>
            <div class="popular_artist">
                <div class="h4">
                    <h4>Popular Artists</h4>
                    <div class="btn_s">
                        <i class="fa-solid fa-circle-chevron-left" id="pop_art_left"></i>
                        <i class="fa-solid fa-circle-chevron-right" id="pop_art_right"></i>
                    </div>
                </div>
                <div class="item artist_sr">
                    <li>
                        <img src="images/arijit.webp" alt="">
                    </li>
                    <li>
                        <img src="images/atif.jpg" alt="">
                    </li>
                    <li>
                        <img src="images/Darshan.jpg" alt="">
                    </li>
                    <li>
                        <img src="images/vishal.jpg" alt="">
                    </li>
                    <li>
                        <img src="images/shreya.jpg" alt="">
                    </li>
                    <li>
                        <img src="images/sonu.webp" alt="">
                    </li>
                    
                </div>
            </div>
        </div>
        
        <div class="master-play">
            <div class="wave" id="wave">
                <div class="wave1"></div>
                <div class="wave1"></div>
                <div class="wave1"></div>
            </div>
            <img src="images/4.webp" alt="" id="poster-masterplay">
            <h5 id="title">
                Ve Kamleya 
                <div class="subtitle">Pritam, Arijit Singh, Shreya Ghoshal, Shadab Faridi, Altamash Faridi & Amitabh Bhattacharya</div>
            </h5>
            <div class="icon">
                <i class="fa-solid fa-backward" id="back"></i>
                <i class="fa-solid fa-play" id="masterPlay"></i>
                <i class="fa-solid fa-forward" id="next"></i>
                <a href="" download="" id="downloadmusic"><i class="fa-solid fa-cloud-arrow-down" ></i></a>
            </div>
            <span id="currentstart">0.00</span>
            <div class="bar">
                <input type="range"  id="seek" min="0" max="100">
                <div class="bar2" id="bar2"></div>
                <div class="dot"></div>
            </div>
            <span id="currentend">0.30</span>
            <div class="vol">
                <i class="fa-solid fa-volume-up" id="vol_icon"></i>
                <!-- <i class="fa-solid fa-volume-mute"></i> -->
                <input type="range" min="0" max="100" id="volume">
                <div class="volbar"></div>
                <div class="dot" id="voldot"></div>
            </div>
        </div>
    </header>
    <script src="app.js"></script>
</body>
</html>