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
   });
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
            var link = getQuerySelectorText(item, "link");
            $(".output").append("<a href='"+link+"' class='news-title'>"+title+"</h1>");
            $(".output").append("<br>");
            if(id=="hp"){
               var desc = getQuerySelectorText(item, "description");
               $(".output").append("<p class='news-desc'>"+desc+"</p>");
            }
         });
      })
   }).catch( () => console.error("error occurred"));
}
function getQuerySelectorText(item, selector){
   return item.querySelector(selector).textContent;
}
