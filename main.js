/*
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Pemutar Video</title>
  <style>
    body { font-family: sans-serif; padding: 10px; background: #f0f0f0; }
    video { width: 100%; max-width: 600px; margin-bottom: 10px; }
    ul { list-style: none; padding: 0; }
    li { padding: 8px; background: #fff; margin: 5px 0; cursor: pointer; border: 1px solid #ccc; }
    li:hover { background: #e0e0e0; }
  </style>
</head>
<body>
*/

document.body.innerHTML = `
<video id="videoPlayer" controls autoplay></video>
<ul id="videoList"></ul>
`;

  const videoUrl = "https://indocine.yn.lt/data.js"; // Ganti dengan URL JSON kamu

  fetch(videoUrl)
    .then(res => res.json())
    .then(videos => {
      const videoPlayer = document.getElementById("videoPlayer");
      const videoList = document.getElementById("videoList");

      videos.forEach((video, index) => {
        const li = document.createElement("li");
        li.textContent = video.title;
        li.onclick = () => {
          videoPlayer.src = video.src;
          videoPlayer.play();
        };
        videoList.appendChild(li);

        if (index === 0) {
          videoPlayer.src = video.src;
        }
      });
    })
    .catch(err => {
      console.error("Gagal memuat video:", err);
    });
