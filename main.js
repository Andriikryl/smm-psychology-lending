import "./style.css";

const burger = document?.querySelector("[data-burger]");
const logo = document?.querySelector(".header__logo");

const nav = document?.querySelector("[data-nav]");
const body = document.body;

burger?.addEventListener("click", () => {
  body.classList.toggle("stop-scroll");
  burger?.classList.toggle("burger--active");
  nav.classList.toggle("nav--visible");
  logo.classList.toggle("logo-dark");
});
