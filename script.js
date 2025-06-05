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


// Search functionality

var search = document.getElementById("search")
var container = document.querySelector(".products--section__collections")
var productList = container.querySelectorAll(".product--collections")

search.addEventListener("keyup",function(){
  var enteredvalue=event.target.value.toUpperCase()

  for (count=0;count< productList.length;count=count+1)
    if(productList[count].textContent.toUpperCase().indexOf(enteredvalue) <0)
    {
      productList[count].style.display="none"
    }
    else{
      {
      productList[count].style.display="block"
    }
    }
})