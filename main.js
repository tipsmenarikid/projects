// Tambahkan style secara dinamis
const style = document.createElement("style");
style.textContent = `
  body {
    font-family: sans-serif;
    background: #f0f0f0;
    padding: 10px;
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

// Tambahkan konten body
document.body.innerHTML = `
  <video id="videoPlayer" controls autoplay></video>
  <ul id="videoList"></ul>
`;

const videoUrl = "https://indocine.yn.lt/data.js"; // URL JSON

fetch(videoUrl)
  .then(res => res.json())
  .then(videos => {
    const videoPlayer = document.getElementById("videoPlayer");
    const videoList = document.getElementById("videoList");

    videos.forEach((video, index) => {
      const src = video.title;
      const li = document.createElement("li");
      li.textContent = src;
      li.onclick = () => {
        videoPlayer.src = src;
        videoPlayer.play();
      };
      videoList.appendChild(li);

      if (index === 0) {
        videoPlayer.src = src;
      }
    });
  })
  .catch(err => {
    alert("Gagal memuat video:"+ err);
  });
