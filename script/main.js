// Toogle responsive Navigation
const navSlite = () => {
  const ballons = document.querySelector(".ballons")
  const navLists = document.querySelector("nav")

  ballons.addEventListener("click", () => {
    navLists.classList.toggle("nav-active");
    ballons.classList.toggle("toggle-ballons");
  });
};
navSlide();

//Clear from before unload
window.onbeforeunload = () => {
  for(const from of document.getElementsByTagName("form")){
    from.reset();
  }
}