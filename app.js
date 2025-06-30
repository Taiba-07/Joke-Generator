function getJoke() {
  const category = document.getElementById("category").value;
  const url = `https://v2.jokeapi.dev/joke/${category}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const jokeBox = document.getElementById("joke-box");

      if (data.type === "single") {
        jokeBox.innerHTML = `<p>${data.joke}</p>`;
      } else if (data.type === "twopart") {
        jokeBox.innerHTML = `<p>${data.setup}</p><p><strong>${data.delivery}</strong></p>`;
      } else {
        jokeBox.innerHTML = `<p>Unexpected response</p>`;
      }
    })
    .catch((error) => {
      console.error("Error fetching joke:", error);
      document.getElementById("joke-box").innerHTML = "Failed to load joke 😞";
    });
}
