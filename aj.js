var PROXY ="https://cors-anywhere.herokuapp.com/"; 
var urls = { 
   hn: "https://news.ycombinator.com/rss",
   hp: "https://www.huffingtonpost.com/section/technology/feed",
};
$(document).ready(function(){
   $("button").on("click", (thing) => {
      var id = thing.target.id;
      var url = urls[id];
      getFeed(url);
   });
});

function getFeed(url){
   var feed = PROXY + url;
   fetch(feed).then( (res) => {
      res.text().then( (xmlText) => {
         var domParser = new DOMParser();
         console.log(xmlText);
         let doc = domParser.parseFromString(xmlText, "text/xml");
         doc.querySelectorAll("item").forEach( (item) => {
            console.log("item: " + item.querySelector("title").textContent); 
         });
      })
   }).catch( () => console.error("error occurred"));
}
