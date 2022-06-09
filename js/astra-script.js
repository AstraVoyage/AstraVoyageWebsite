for(var i = 0; i < 200; i++) {
  //get random dimensions
  var x = Math.random() * 100;
  var y = Math.random() * 50;
  var d = Math.random() * 4;
  var s = Math.random() * 2 + 1.5;
  //create new element and add to html
  var star = document.createElement("div");
  star.classList.add("star");

  var sky = document.getElementById("astra-voyage-body");
  sky.appendChild(star);

  star.style.width = d + "px";
  star.style.height = d + "px";
  star.style.top = y + "%";
  star.style.left = x + "%";
  star.style.animationDuration = s + "s";

  //create new element and add to html
  var star1 = document.createElement("div");
  star1.classList.add("star");

  var sky1 = document.getElementById("astra-voyage-header");
  sky1.appendChild(star1);

  star1.style.width = d + "px";
  star1.style.height = d + "px";
  star1.style.top = y + "%";
  star1.style.left = x + "%";
  star1.style.animationDuration = s + "s";
}
