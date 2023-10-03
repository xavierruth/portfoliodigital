
function myFunctionum() { /*um*/
var dots = document.getElementById("dots");
var moreText = document.getElementById("more");
var btnText = document.getElementById("myBtn");

if (dots.style.display === "none") {
dots.style.display = "inline";
btnText.innerHTML = "Leia mais"; 
moreText.style.display = "none";
} else {
dots.style.display = "none";
btnText.innerHTML = "Leia menos"; 
moreText.style.display = "inline";
}
}


function myFunctiondois() { /*dois*/
var dotsdois = document.getElementById("dotsdois");
var moredoisText = document.getElementById("moredois");
var btndoisText = document.getElementById("myBtndois");

if (dotsdois.style.display === "none") {
  dotsdois.style.display = "inline";
  btndoisText.innerHTML = "Leia mais"; 
  moredoisText.style.display = "none";
} else {
  dotsdois.style.display = "none";
  btndoisText.innerHTML = "Leia menos"; 
  moredoisText.style.display = "inline";
}
}


function myFunctiontres() { /*tres*/
  var dotstres = document.getElementById("dots3");
  var moretresText = document.getElementById("moretres");
  var btntresText = document.getElementById("myBtntres");

  if (dotstres.style.display === "none") {
      dotstres.style.display = "inline";
      btntresText.innerHTML = "Leia mais"; 
      moretresText.style.display = "none";
  } else {
      dotstres.style.display = "none";
      btntresText.innerHTML = "Leia menos"; 
      moretresText.style.display = "inline";
  }
} 