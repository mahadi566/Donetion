//SMOTHLY SCROLL FOR  BROWSER 
 $("a").on('click',function(event){
 	if (this.hash !== "") {
 		event.preventDefault();
 		var hash = this.hash;
 		$('html, body').animate({
 			scrollTop: $(hash).offset().top},800, function(){
 				window.location.hash = hash;
 		});
 	}
 });




function openNav(){
	document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
	document.getElementById("myNav").style.width = "0";
}
