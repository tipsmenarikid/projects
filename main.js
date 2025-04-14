document.body.innerHTML = `
  <video id="videoPlayer" controls autoplay></video>
  <ul id="videoList"></ul>
`;

const style = document.createElement("style");
style.textContent = `
  video { width: 100%; max-width: 600px; margin-bottom: 10px; background: #000; }
  li { cursor: pointer; padding: 8px; background: #eee; margin: 5px 0; }
`;
document.head.appendChild(style);

const videos = [
  { title: "https://www.w3schools.com/html/mov_bbb.mp4" }, // video online aman
  { title: "https://www.w3schools.com/html/movie.mp4" }
];

const videoPlayer = document.getElementById("videoPlayer");
const videoList = document.getElementById("videoList");

videos.forEach((video, index) => {
  const li = document.createElement("li");
  li.textContent = video.title;
  li.onclick = () => {
    videoPlayer.src = video.title;
    videoPlayer.play();
  };
  videoList.appendChild(li);
  if (index === 0) videoPlayer.src = video.title;
});
