const bar = document.getElementById("bar");
const hidemenu = document.querySelector(".hide_menu");

bar.addEventListener("click", () => {
  if (hidemenu.classList.contains("on")) {
    hidemenu.classList.remove("on");
  } else {
    hidemenu.classList.add("on");
  }
});

hidemenu.addEventListener("mouseleave", () => {
  if (hidemenu.classList.contains("on")) {
    hidemenu.classList.remove("on");
  } else {
    hidemenu.classList.add("on");
  }
});
