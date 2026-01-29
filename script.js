const searchInput = document.getElementById("find");
const posts = document.querySelectorAll(".post");
const noResults = document.getElementById("no-results");

searchInput.addEventListener("keyup", function () {
  const searchTerm = searchInput.value.toLowerCase();
  let found = false;

  posts.forEach(function (post) {
    const title = post.querySelector("h1").innerText.toLowerCase();
    const preview = post.querySelector(".preview-text").innerText.toLowerCase();

    if (title.includes(searchTerm) || preview.includes(searchTerm)) {
      post.style.display = "flex";
      found = true;
    } else {
      post.style.display = "none";
    }
  });

  noResults.style.display = found ? "none" : "block";
});
