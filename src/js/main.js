document.addEventListener("DOMContentLoaded", () => {
  const player = document.getElementById("radioPlayer");
  const nowPlaying = document.getElementById("nowPlaying");
  let current = null;

  document.querySelectorAll(".card img").forEach(img =>
    img.addEventListener("click", () => {
      player.src = img.dataset.url;
      player.play();
      nowPlaying.textContent = `Now Playing: ${img.alt}`;

      current?.classList.remove("active");
      current = img.closest(".card");
      current.classList.add("active");
    })
  );
});

