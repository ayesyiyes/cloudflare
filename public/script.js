// Sapaan sesuai jam
const hour = new Date().getHours();
const greeting =
  hour < 11 ? "Selamat pagi" :
  hour < 15 ? "Selamat siang" :
  hour < 18 ? "Selamat sore" : "Selamat malam";
document.getElementById("greeting").textContent = greeting;

// Tahun di footer
document.getElementById("year").textContent = new Date().getFullYear();

// Jam berjalan
const clock = document.getElementById("clock");
function tick() {
  clock.textContent = new Date().toLocaleTimeString("id-ID");
}
tick();
setInterval(tick, 1000);

// Toggle tema (disimpan di localStorage)
const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");

function applyTheme(theme) {
  root.dataset.theme = theme;
  toggle.textContent = theme === "dark" ? "Mode terang" : "Mode gelap";
}

let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
applyTheme(
  saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
);

toggle.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});
