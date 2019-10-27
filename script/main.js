//load main page to left column at the startup
$(document).ready(function(){

    $("#page-content").load("home.html");
	//alert("ready!");

	//button functions
	$("#menu-home")
		.click(function(){ 
			$("#page-content").load("home.html"); });
	$("#menu-research")
		.click(function(){
			$("#page-content").load("research.html"); });
	$("#menu-photolog")
		.click(function(){
			$("#page-content").load("photolog.html"); });
	$("#menu-resources")
		.click(function(){
			$("#page-content").load("resources.html"); });
	$("#link-resources")
		.click(function(){
			$("#page-content").load("resources.html"); });
	$("#menu-groups")
		.click(function(){
				$("#page-content").load("groups.html"); });
	

//  <a id="menu-blog"></a>
	
});

