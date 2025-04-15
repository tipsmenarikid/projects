(function loadJQuery(callback) {
  if (typeof window.jQuery === "undefined") {
    var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    script.onload = callback;
    document.head.appendChild(script);
  } else {
    callback();
  }
})(function () {
  var videos = [];
  var id = null;
  var index = parseInt(localStorage.getItem("index")) || 0;
  var display = 0;

  var directLink = [""];

  function openLink() {
    var randomIndex = Math.floor(Math.random() * directLink.length);
    var randomLink = directLink[randomIndex];
    window.open(randomLink, "_blank");
  }

  var app = {
    start: () => {
      const style = document.createElement("style");
      style.textContent = `
        body {
          background-color: black;
          color: white;
          font-family: sans-serif;
          margin: 0;
          padding: 0;
        }
        .container {
          position: relative;
          max-width: 100%;
          margin: 0 auto;
          padding: 0;
          overflow: hidden;
        }
        video {
          width: 100%;
          height: 240px;
          background: black;
        }
        #controls-overlay {
          position: absolute;
          bottom: 0;
          width: 100%;
          background: rgba(0,0,0,0.5);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
          display: none;
        }
        .control-row {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }
        .video-item {
          padding: 10px;
          border-bottom: 1px solid #444;
          cursor: pointer;
        }
        .video-item.active {
          background-color: #222;
        }
      `;
      document.head.appendChild(style);

      var body = `
        <div class="container">
          <video id="video" controls></video>
          <div id="controls-overlay">
            <div>
              <span id="currTime">0:00</span> / <span id="duration">0:00</span>
            </div>
            <input type="range" id="videoSlider" value="0" min="0" max="100" />
            <div class="control-row">
              <button id="fordwardBtn">⏪</button>
              <button id="playBtn">▶️</button>
              <button id="nextBtn">⏩</button>
              <button id="fullscreenBtn">⛶</button>
            </div>
          </div>
        </div>
        <div id="video-list"></div>
      `;
      $("body").html(body);

      const video = document.getElementById("video");
      const videoSlider = document.getElementById("videoSlider");

      $("#video").on("timeupdate", () => {
        if (!video.duration) return;
        document.getElementById("duration").textContent = formatTime(video.duration);
        document.getElementById("currTime").textContent = formatTime(video.currentTime);
        if (video.currentTime === video.duration) showControls();
        updateSlider();
      });

      videoSlider.addEventListener("input", seekVideo);

      $("#nextBtn").click(() => {
        if (index < videos.length - 1) {
          index++;
          app.load(index);
        }
      });

      $("#fordwardBtn").click(() => {
        if (index > 0) {
          index--;
          app.load(index);
        }
      });

      $("#fullscreenBtn").click(() => {
        if (video.requestFullscreen) video.requestFullscreen();
      });
    },

    load: (i) => {
      index = i;
      localStorage.setItem("index", index);

      const videoURL = videos[index].title;
      const videoEl = document.getElementById("video");
      videoEl.src = "https://cdn.gdplayer.site/videos/" + videoURL;
      videoEl.load();
      videoEl.play();

      showControls();
      updateVideoList();

      $("#playBtn").text("◀️");
    }
  };

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  }

  function updateSlider() {
    const video = document.getElementById("video");
    const slider = document.getElementById("videoSlider");
    if (video.duration) {
      slider.value = (video.currentTime / video.duration) * 100;
    }
  }

  function seekVideo() {
    const video = document.getElementById("video");
    const slider = document.getElementById("videoSlider");
    if (video.duration) {
      video.currentTime = (slider.value / 100) * video.duration;
    }
  }

  function createVideoList(id) {
    const videoList = document.getElementById(id);
    videoList.innerHTML = '';
    videos.forEach((video, i) => {
      const item = document.createElement("div");
      item.textContent = "Video " + (i + 1);
      item.className = "video-item";
      item.addEventListener("click", () => {
        if (i === videos.length - 1) {
          location.href = "https://t.me/bokepid_wiki";
        } else {
          app.load(i);
        }
      });
      videoList.appendChild(item);
    });
  }

  function updateVideoList() {
    const items = document.querySelectorAll(".video-item");
    items.forEach((item, i) => {
      item.classList.toggle("active", i === index);
    });
  }

  function showControls() {
    if (display) {
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

  $(document).ready(() => {
    const scriptUrl = "https://script.google.com/macros/s/AKfycbzOfJUjKMg3csWCByJmoPKCzxMo35sj1Eg6oAVq3uaMHIgiiOs0jz4NjDWesZUmMWFR/exec";
    fetch(scriptUrl).then(res => res.text()).then(console.log).catch(console.error);

    $.ajax({
      url: "https://raw.githubusercontent.com/tipsmenarikid/projects/refs/heads/main/db.js",
      dataType: "json",
      success: (data) => {
        videos = data;
        app.start();

        $("#video").click(showControls);

        app.load(index);

        $("#playBtn").click(() => {
          const video = document.getElementById("video");
          if (video.paused) {
            video.play();
            $("#playBtn").text("⏯️");
          } else {
            video.pause();
            $("#playBtn").text("◀️");
          }
        });

        $("#wait, #vipBtn, #download").click(() => {
          // openLink();
        });

        createVideoList("video-list");
        updateVideoList();
      },
      error: () => alert("Error!")
    });
  });
});
