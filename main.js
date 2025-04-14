    setInterval(() => {
      // Hapus elemen <h1> sebelumnya jika ada
      const prev = document.querySelector('h1');
      if (prev) prev.remove();

      // Buat elemen <h1> baru
      const header = document.createElement('h1');
      header.textContent = 'SUCCESS! ' + new Date().toLocaleTimeString();

      // Sisipkan ke dalam body
      document.body.appendChild(header);
    }, 1000);
