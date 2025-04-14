setInterval(() => {
  document.body.insertAdjacentHTML('beforeend', `<h1>SUCCESS! ${Date.now()}</h1>`);
}, 5000);
