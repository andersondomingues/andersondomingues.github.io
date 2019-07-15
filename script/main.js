//load main page to left column at the startup
$(document).ready(function(){

    $("#page-content").load("home.html");
	//alert("eady!");

	//button functions
	$("#menu-home")
		.click(function(){ 
			$("#page-content").load("home.html"); });
	$("#menu-research")
		.click(function(){
			$("#page-content").load("research.html"); });

//  <a href="#" id="menu-blog"></a>
	
});

