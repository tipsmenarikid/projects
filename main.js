(function loadJQuery(callback) {
  if (typeof window.jQuery === "undefined") {
    var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.7.0.js";
    script.onload = callback;
    document.head.appendChild(script);
  } else {
    callback();
  }
})(function () {

var videos = [];
var id = null;
var index = localStorage.getItem("index");
var display = 0;


var linkArr = ["https://tipsmemarik.github.io"];
var checkOpenLink = false;

function openLink(index){
  window.open(linkArr[index], "_blank");
}

var app = {
    "start": () => {
        const style = document.createElement("style");
        style.textContent = `
           body {
             background: black;
             color: white;
             font-family: Tahoma;
            }

      #header{
         position: fixed;
         width: 100%;
         height: 43px;
         top: 0;
         left: 0;
         background: #000;
         border-bottom: 1px solid #333;
         z-index: 9999999999;
       }

       #title{
          position: absolute;
          top: 10px;
          left: 3%;
          font-size: 20px;
          font-weight: bold;
        }

        #video-container {
            position: fixed;
            top: 44px;
            left: 0;
            width: 100%;
            background: #000;
            border-bottom: 1px solid #222;
            z-index: 9999999999;
        }

        video {
            height: 240px;
            width: 100%;
        }

        #controls-overlay {
            position: absolute;
            top: 25%;
            left: 0;
            width: 100%;
            display: none;
        }

        #fullscreenBtn {
            font-size: 15px;
            font-weight: bold;
            background: black;
            color: white;
            border: 1px solid #555;
            border-radius: 50%;
            padding: 2%;
            opacity: 0.5;
        }

        #fullscreenBtn:active {
            background: #222;
            opacity: 0.8;
        }

        .controlBtn {
            font-size: 20px;
            background: black;
            border: 1px solid #555;
            border-radius: 50%;
            padding: 5%;
            margin: 5%;
            opacity: 0.3;
        }

        .controlBtn:active {
            background: #bbb;
            opacity: 0.5;
        }

        #slider {
            padding-bottom: 3%;
        }

        #videoSlider {
            width: 70%;
            height: 5px;
        }

        .time {
            font-weight: bold;
        }

        .video-list {
            position: absolute;
            top: 360px;
            width: 95%;
            margin-top: 20px;
            background: black;
        }

        .video-item {
            background-color: #222;
            padding: 10px;
            margin: 5px 0;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s;
            overflow-x: auto;
        }

        .video-item:hover {
            background-color: #005bff;
        }

        .active {
            background-color: #007bff;
            color: white;
        }

        #joinBtn{
            font-weight: bold;
            font-size: 16px;
            padding: 8px;
            border: none;
        }
        `;

document.head.appendChild(style);


      const AdsterraPopupScript = document.createElement('script');
      AdsterraPopupScript.src = '//pl26384878.profitableratecpm.com/7f/e2/a5/7fe2a58f1faa38417e74396208fc6893.js';
      document.head.appendChild(AdsterraPopupScript);

      const AdsterraSocialBarScript = document.createElement('script');
      AdsterraSocialBarScript.src = '//pl26391223.profitableratecpm.com/b9/b3/ff/b9b3ff190c057196a98a7f2a94f4c5a4.js';
      document.head.appendChild(AdsterraSocialBarScript);
      

        var body = `

<div id="header" class="front"><span id="title">Asupan Bochiel</span></div>

        <div id="video-container">
            <center>
                <video id="video">
                    <source src="" type="video/mp4">
                </video>

                <div id="controls-overlay">
                    <button id="fordwardBtn" class="controlBtn">⏮️</button>
                    <button id="playBtn" class="controlBtn">⏯️</button>
                    <button id="nextBtn" class="controlBtn">⏭️</button>
                </div>

                <div id="slider">
                    &nbsp;<span id="currTime" class="time">0:00</span>
                    <input id="videoSlider" type="range" value="0" step="1" min="0" max="100" disabled>
                    <span id="duration" class="time" hidden>0:00</span> &nbsp;
                    <button id="fullscreenBtn">[ &nbsp;]</button>
                </div>

                <!--div id="wait">
                    <span id="waitText"><button id="joinBtn"> >> JOIN OUR TELEGRAM << </button></span><br><br>
                </div-->
            </center>
        </div>

        <div class="video-list">
            <div id="video-list"></div>

            <br>
         <center>

         <!-- BANNER SCRIPTS -->
         <script async="async" data-cfasync="false" src="//pl26391209.profitableratecpm.com/9ccc0d778207fac12bef75d4fe8a7105/invoke.js"></script>
<div id="container-9ccc0d778207fac12bef75d4fe8a7105"></div>

         </center>

<div id="footer">
<center>
<hr>
<b>&copy; Asupan Bochiel - ${new Date().getFullYear()}</b>
</center><br>
</div>

        </div>

        `;


        $("body").html(body);

        const video = document.getElementById("video");
        const videoSlider = document.getElementById("videoSlider");

        $("#video").on("timeupdate", () => {
            const duration = video.duration;
            document.getElementById("duration").textContent = formatTime(duration);

            const currTime = video.currentTime;
            document.getElementById("currTime").textContent = formatTime(currTime);

            if (currTime === video.duration) {
                $("#video").click();
            }

            updateSlider();

        });

        videoSlider.addEventListener('input', seekVideo);

        $("#nextBtn").click(() => {
            if (index < (videos.length - 1)) {
                index = index + 1;
                app.load(index);
            }
        });

        $("#fordwardBtn").click(() => {
            if (index > 0) {
                index = index - 1;
                app.load(index);
            }
        });

        $("#fullscreenBtn").click(() => {

        });
    },

    "load": (index) => {

        localStorage.setItem("index", index);
        video.pause();

        const videoURL = videos[index].title;
        video.src = "https://cdn.gdplayer.site/videos/" + videoURL;
        video.load();
        video.play();

        showControls();
        updateVideoList();

        $("#playBtn").text("◀️");
      
        try {
        if(checkOpenLink === false){
          openLink(0);
          checkOpenLink = true;
        }
        } catch (err){
          alert(err);
        }
    }
};

function formatTime(seconds) {
    if (!seconds || isNaN(seconds)) {
        return "0:00";
    } else {
        const minutes = Math.floor(seconds / 60);
        const secondsRemaining = Math.floor(seconds % 60);
        return `${minutes}:${secondsRemaining < 10 ? '0' : ''}${secondsRemaining}`;
    }
}

function updateSlider() {
    if (video.duration) {
        videoSlider.value = (video.currentTime / video.duration) * 100;
    }
}

function seekVideo() {
    if (video.duration) {
        video.currentTime = (videoSlider.value / 100) * video.duration;
    }
}

function createVideoList(id) {
    const videoList = document.getElementById(id);
    videoList.innerHTML = '';
    videos.forEach((video, i) => {
        const videoItem = document.createElement('div');
        videoItem.textContent = "Video "+ (i+1); //video.title;
        videoItem.classList.add('video-item');
        videoItem.addEventListener('click', () => {

            index = i;
            app.load(index);

        });
        videoList.appendChild(videoItem);
    });
}

function updateVideoList() {
    const videoItems = document.querySelectorAll('.video-item');
    videoItems.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}


            function showControls(){
                if (display == 1) {
                    $("#controls-overlay").hide();
                    display = 0;
                } else {
                    $("#controls-overlay").show();
                    display = 1;

                    setTimeout(() => {
                        $("#controls-overlay").hide();
                        display = 0;
                    }, 5000);
                }
            }



var link = `https://raw.githubusercontent.com/tipsmenarikid/projects/refs/heads/main/db.js`;

$(document).ready(() => {

    $.ajax({
        url: link,
        dataType: "JSON",
        success: function (data) {

            videos = data;

            app.start();

            $("#video").click(() => {
                if (display == 1) {
                    $("#controls-overlay").hide();
                    display = 0;
                } else {
                    $("#controls-overlay").show();
                    display = 1;

                    setTimeout(() => {
                        $("#controls-overlay").hide();
                        display = 0;
                    }, 5000);
                }
            });

            if(!index){
                localStorage.setItem("index", 0);
                index = 0;
            } else {
                index = Number(index);
            }

            app.load(index);

            $("#playBtn").click(() => {
                if (video.paused) {
                    video.play();
                    $("#playBtn").text("⏯️");
                } else {
                    video.pause();
                    $("#playBtn").text("◀️");
                }
            });



$("#joinBtn").click(function(){
window.open("https://t.me/bokep_bocil_esde", "_blank");
});


            createVideoList("video-list");
            updateVideoList();
        },
        error: function () {
            alert(`Error!`);
        }
        });
    });

});
