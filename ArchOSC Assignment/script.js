document.addEventListener("DOMContentLoaded", () => {

  const button = document.getElementById("themeBtn");

  /* Apply saved theme */
  if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    button.innerHTML = "🌙";
  }

  /* Button click */
  button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
      localStorage.setItem("theme","dark");
      button.innerHTML = "🌙";
    } else {
      localStorage.setItem("theme","light");
      button.innerHTML = "☀️";
    }
  });

  // Modal zoom image code starts here

  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("imgZoomed");
  const captionText = document.getElementById("caption");
  const img = document.getElementById("zoomImg");
  const closeBtn = document.getElementsByClassName("close")[0];

  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  closeBtn.onclick = function() {
    modal.style.display = "none";
  }

  modal.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

});
