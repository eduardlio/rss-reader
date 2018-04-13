var PROXY ="https://cors-anywhere.herokuapp.com/"; 
var urls = { 
   hn: "https://news.ycombinator.com/rss",
   hp: "https://www.huffingtonpost.com/section/technology/feed",
};
$(document).ready(function(){
   $("button").on("click", (thing) => {
      var id = thing.target.id;
      var url = urls[id];
      getFeed(id, url);
      $("#fb_toggle").prop("checked", false);
   });
   if($("#fb_toggle").checked ){
      $(".fb").hide();
   } else {
      $(".fb").show();
   }
});
function getFeed(id, url){
   var feed = PROXY + url;
   fetch(feed).then( (res) => {
      res.text().then( (xmlText) => {
         var domParser = new DOMParser();
         let doc = domParser.parseFromString(xmlText, "text/xml");
         $(".output").html("");
         doc.querySelectorAll("item").forEach( (item) => {
            var title = getQuerySelectorText(item, "title");
            var fbRegexp = /facebook|(\sfb\s?)/gi;
            var fb = title.match(fbRegexp);
            var link = getQuerySelectorText(item, "link");
            var domClass= (fb==null) ? "news-title" : "news-title fb";
            $(".output").append(
               "<a href='"+link+"' class='"+domClass+"' target='_blank'>"+title+"</h1>");
            if(id=="hn"){
               var comLink = getQuerySelectorText(item, "description");
               $(".output").append(comLink);
               $(".output").append("<br>");
            }
            $(".output").append("<br></div>");
         });
      })
   }).catch( () => console.error("error occurred"));
}
function getQuerySelectorText(item, selector){
   return item.querySelector(selector).textContent;
}
