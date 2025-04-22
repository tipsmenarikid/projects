document.head.innerHTML = `
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Asupan Bochiel</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
  <style>
    body {
      font-family: sans-serif;
      padding: 10px;
    }
    iframe {
      width: 100%;
      max-width: 640px;
      height: 360px;
      display: block;
      margin: 0 auto 20px;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      padding: 10px;
      margin-bottom: 5px;
      background: #f0f0f0;
      cursor: pointer;
      border-radius: 5px;
    }
    li:hover {
      background: #ddd;
    }
  </style>
`;


document.body.innerHTML = `
  <h2>Asupan Bochiel</h2>
  <iframe id="videoFrame" src="" frameborder="0" allowfullscreen></iframe>
  <ul id="videoList"></ul>
`;

    const videos = [
{"url":"https://fastupload.io/video/embed/0412c1cffcdc7bac/640x360/VID_20240502_124902_982.mp4", "title":""},
{"url":"https://fastupload.io/video/embed/3236c05f261a512e/640x360/VID_20240502_125021_750.mp4", "title":""},
{"url":"https://fastupload.io/video/embed/4580725d706730ec/640x360/VID_20240502_125523_158.mp4", "title":""},
{"url":"https://fastupload.io/video/embed/d93d59a5b72dbe1d/640x360/VID_20240507_142541_454.mp4", "title":""},
{"url":"https://fastupload.io/video/embed/bf03d9b8f7388b6a/640x360/VID_20240510_021424_576.mp4", "title":""},
{"url":"https://fastupload.io/video/embed/31225c13f68f60b9/640x360/VID_20240510_021818_643.mp4", "title":""},
{"url":"https://fastupload.io/video/embed/78112a818d9c8e4a/640x360/VID_20240510_021957_909.mp4", "title":""},
{"url":"https://fastupload.io/video/embed/355cd01805fc6259/640x360/VID_20240511_144951_413.mp4", "title":""},
{"url":"https://fastupload.io/video/embed/c344b889fa842dc0/640x360/VID_20240524_162533_410.mp4", "title":""},
{"url":"https://fastupload.io/video/embed/7c798fdf6b99622f/640x360/VID_20240526_203249_516.mp4", "title":""},



{"url":"https://fastupload.io/video/embed/e181b7f51175f3c1/640x360/VID_20240502_125021_750.mp4","title":""},
{"url":"https://fastupload.io/video/embed/ebfc84931b04631c/640x360/VID_20240502_125443_349.mp4","title":""},
{"url":"https://fastupload.io/video/embed/2b3c6fab950a78d8/640x360/VID_20240502_125507_976.mp4","title":""},
{"url":"https://fastupload.io/video/embed/be8a62eaa7ad037b/640x360/VID_20240502_131620_086.mp4","title":""},
{"url":"https://fastupload.io/video/embed/f40fd21a41f08cc0/640x360/VID_20240502_131828_792.mp4","title":""},
{"url":"https://fastupload.io/video/embed/3cb0dfb2fb655795/640x360/VID_20240503_142643_414.mp4","title":""},
{"url":"https://fastupload.io/video/embed/72c0f94703547acb/640x360/VID_20240506_135801_018.mp4","title":""},
{"url":"https://fastupload.io/video/embed/5f6008e7ef1cb6eb/640x360/VID_20240506_140139_258.mp4","title":""},
{"url":"https://fastupload.io/video/embed/4fe3fd2faecc6753/640x360/VID_20240506_140329_898.mp4","title":""},
{"url":"https://fastupload.io/video/embed/9d6398f206455cfd/640x360/VID_20240507_142541_454.mp4","title":""},



{"url":"https://fastupload.io/video/embed/62e55e3e64891a74/640x360/VID_20240510_021151_530.mp4","title":""},
{"url":"https://fastupload.io/video/embed/304e4276f737d456/640x360/VID_20240524_234035_457.mp4","title":""},
{"url":"https://fastupload.io/video/embed/2e0ebec7d4c1edeb/640x360/5_6271584848473754312.mp4","title":""},
{"url":"https://fastupload.io/video/embed/7e7c4c490821dc94/640x360/VID-20230324-WA0091.mp4","title":""},
{"url":"https://fastupload.io/video/embed/688843084e35f1c9/640x360/45ee24c1-1e95-4246-832d-db451c2bb0a1.mp4","title":""},
{"url":"https://fastupload.io/video/embed/3ff42e69c3d971c1/640x360/5_6271584848473754232.mp4","title":""},
{"url":"https://fastupload.io/video/embed/dd14f31ef584de65/640x360/5_6271584848473754286.mp4","title":""},
{"url":"https://fastupload.io/video/embed/67e697b8de6db560/640x360/d83c396f-c8c1-425e-9e37-f9ef3dee3e04.mp4","title":""},
{"url":"https://fastupload.io/video/embed/3f8d69b7182c6bcd/640x360/VID_20240528_235441_154.mp4","title":""},
{"url":"https://fastupload.io/video/embed/f8cb2355dfff2f6d/640x360/VID-20230120-WA0027.mp4","title":""}
];

    const videoList = document.getElementById("videoList");
    const iframe = document.getElementById("videoFrame");

    videos.forEach((video, index) => {
      const li = document.createElement("li");
      li.textContent = "Video "+ (index+1);
      li.addEventListener("click", () => {
        iframe.src = video.url;
      });
      videoList.appendChild(li);
    });

