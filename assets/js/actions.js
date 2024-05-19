window.addEventListener("load", () => {
  const about_content = document.getElementById("about-me--hidden");
  const about_button = document.getElementById("about-me--button");

  const projects_content = document.getElementById("projects--hidden");
  const projects_button = document.getElementById("projects--button");

  about_content.style.display = "none";
  projects_content.style.display = "none";

  about_button.addEventListener("click", (e) => {
    e.preventDefault();
    if (about_content.style.display === "none") {
      about_content.style.display = "block";
      about_button.innerText = "Mostrar menos";
    } else {
      about_content.style.display = "none";
      about_button.innerText = "Mostrar más";
    }
  });

  projects_button.addEventListener("click", (e) => {
    e.preventDefault();
    if (projects_content.style.display === "none") {
      projects_content.style.display = "block";
      projects_button.innerText = "Mostrar menos";
    } else {
      projects_content.style.display = "none";
      projects_button.innerText = "Mostrar más";
    }
  });
});
