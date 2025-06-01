function toggleLike(el) {
    el.classList.toggle('fa-regular');
    el.classList.toggle('fa-solid');
    el.classList.toggle('liked');
}


// navbar--section__menu displays 

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const openBtn = document.getElementById("menu_id");
    const closeBtn = document.getElementById("close");

    if (popup && openBtn && closeBtn) {
      openBtn.addEventListener("click", () => {
        popup.classList.remove("hidden");
        popup.classList.add("show");
      });

      closeBtn.addEventListener("click", () => {
        popup.classList.add("hidden");
        popup.classList.remove("show");
      });
    }
  });

//discount--section__close 
 document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("discount--section");
    const closeBtn = document.getElementById("discount--section__close");

    if (banner && closeBtn) {
      closeBtn.addEventListener("click", function () {
        banner.style.display = "none"; // or use .classList.add("hidden") if using a hidden class
      });
    }
  });