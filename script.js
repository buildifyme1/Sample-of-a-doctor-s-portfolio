let currentLang = "ar";

/* فتح وقفل المينيو */
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

/* قفل المينيو عند الضغط على أي لينك */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("active");
  });
});

/* الترجمة */
function toggleLanguage() {
  const elements = document.querySelectorAll("[data-ar]");
  const button = document.querySelector(".lang");

  if (currentLang === "ar") {
    elements.forEach(el => {
      el.innerText = el.getAttribute("data-en");
    });
    document.documentElement.setAttribute("dir", "ltr");
    button.innerText = "AR";
    currentLang = "en";
  } else {
    elements.forEach(el => {
      el.innerText = el.getAttribute("data-ar");
    });
    document.documentElement.setAttribute("dir", "rtl");
    button.innerText = "EN";
    currentLang = "ar";
  }
}