/* list of available pages */
var pages = [
  {"elem": "#menu-undergraduation", "content": "_undergrad.html"},
  {"elem": "#menu-research", "content": "_research.html"},
  {"elem": "#menu-photolog", "content": "_photolog.html"},
  {"elem": "#menu-resources", "content": "_resources.html"},
  {"elem": "#menu-groups", "content": "_groups.html"}
];

/* activate a page*/
function activate(elemName){
  console.log(elemName)
  for(var i = 0; i < pages.length; i++){
    var page = pages[i];
    if(page.elem === elemName){
      $(page.elem).addClass("nav-active");
      $(page.elem).removeClass("nav-inactive");
      $("#page-content").load(page.content);
    } else {
      $(page.elem).addClass("nav-inactive");
      $(page.elem).removeClass("nav-active");
    }
  }
}

/* load main page to left column at the startup and hook up handlers */
$(document).ready(function(){
  activate(pages[0].elem); /* activate first page at startup */

  for(var i = 0; i < pages.length; i++){
    let page = pages[i];
    $(page.elem).click(() => activate(page.elem));
  }

  $("#why").click(function(){
    let url = "https://academia.stackexchange.com/a/38629";
    window.open(url, '_blank').focus();
  });
});


