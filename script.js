
/* Index Page ____________________________________________________________________________________ */

/* Header scroll */
window.addEventListener("scroll",function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky",window.scrollY >0);
})


/* Index parallex effect */
const parallex = document.getElementById("aboutimg");

window.addEventListener("scroll",function(){
  let offset = window.pageY0ffset;
  parallex.style.backgroundPositionY = offset* 0.2 + "px";
})

