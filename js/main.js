// JS for the button on the nav 
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";});
}

 const imageContainer = document.querySelector('.banner_wrapper');
 const imageText = document.querySelector('.image-text');
 imageContainer.addEventListener('mouseover', function(){
 imageText.style.display='block';
 });
 imageContainer.addEventListener('mouseout', function(){
 imageText.style.display='none';
 });
