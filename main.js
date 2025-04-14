document.head.innerHTML = "";
document.body.innerHTML = "";


const injectScripts = async () => {
  const injectScript = (src, attributes = {}) =>
    new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      Object.entries(attributes).forEach(([key, value]) => script.setAttribute(key, value));
      script.onload = resolve;
      document.head.appendChild(script);
    });

  await injectScript("https://indocine.yn.lt/jquery.js");
  await injectScript("https://indocine.yn.lt/init.js");
};

injectScripts();
