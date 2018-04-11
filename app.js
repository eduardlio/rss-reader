//$(document).ready(function(){
   ////var feed = "feed.xml";
   //var feed = "https://www.huffingtonpost.com/section/technology/feed";
   //$.get(feed, (data) => {
      //$("body").html(data);
   //}
   //fetch(feed).then( (res) => {
      //res.text().then( (xmlText) => {
         //console.log("response in");
         //var domParser = new DOMParser();
         //console.log(xmlText);
         //let doc = domParser.parseFromString(xmlText, "text/xml");
         //doc.querySelectorAll("item").forEach( (item) => {
            //console.log("item: " + item.querySelector("title").textContent); 
         //});
      //})
   //}).catch( () => console.error("error occurred"));
//});
$(document).ready(function() {
    //feed to parse
   var feed = "feed.xml";
   //var feed = "https://www.huffingtonpost.com/section/technology/feed";
    
    $.ajax(feed, {
        accepts:{
            xml:"application/rss+xml"
        },
        dataType:"xml",
        success:function(data) {
            //Credit: http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript
            $(data).find("item").each(function () { // or "item" or whatever suits your feed
                var el = $(this);
                console.log("------------------------");
                console.log("title      : " + el.find("title").text());
                console.log("link       : " + el.find("link").text());
                console.log("description: " + el.find("description").text());
            });
        }   
    });
    
});
