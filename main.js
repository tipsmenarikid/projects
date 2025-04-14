document.body = `
<video id="videoPlayer" controls autoplay></video>
<ul id="videoList"></ul>
`;

  const videoUrl = "https://indocine.yn.lt/data.js"; // Ganti dengan URL atau nama file JSON kamu

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
      console.error("Gagal memuat video:", err);
    });
