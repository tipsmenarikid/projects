// Tambahkan elemen <style> ke <head>
const style = document.createElement("style");
style.textContent = `
  body {
    font-family: sans-serif;
    background: #f0f0f0;
    padding: 10px;
    margin: 0;
  }
  video {
    width: 100%;
    max-width: 600px;
    margin-bottom: 10px;
    background: #000;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    padding: 8px;
    margin: 5px 0;
    background: #fff;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  li:hover {
    background: #e0e0e0;
  }
`;
document.head.appendChild(style);

// Tambahkan elemen <video> dan <ul> ke <body>
const videoPlayer = document.createElement("video");
videoPlayer.id = "videoPlayer";
videoPlayer.controls = true;
videoPlayer.autoplay = true;

const videoList = document.createElement("ul");
videoList.id = "videoList";

document.body.appendChild(videoPlayer);
document.body.appendChild(videoList);

// URL JSON video
const videoUrl = "https://raw.githubusercontent.com/tipsmenarikid/projects/refs/heads/main/db.js";

// Fetch dan isi daftar video
fetch(videoUrl)
  .then(res => res.json())
  .then(videos => {
    videos.forEach((video, index) => {
      const li = document.createElement("li");
      li.textContent = video.title;
      li.onclick = () => {
        videoPlayer.src = "https://cdn.gdplayer.site/videos/"+video.title;
        videoPlayer.play();
      };
      videoList.appendChild(li);
      if (index === 0) {
        videoPlayer.src = "https://cdn.gdplayer.site/videos/"+video.title;
      }
    });
  })
  .catch(err => {
    alert("Gagal memuat video:"+ err);
  });
