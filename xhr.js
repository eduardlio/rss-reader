function createCorsRequest(method, url){
   var xhr = new XMLHttpRequest();
   if("withCredentials" in xhr){
      xhr.open(method, url, true);
   } else if (typeof XDomainRequest != "undefined"){
      xhr = new XDomainRequest();
      xhr.open(method, url);
   } else {
      xhr = null;
   }
   return xhr;
}
var feedUrl = "https://www.huffingtonpost.com/section/technology/feed";
var xhr = createCorsRequest("get", feedUrl);
if(!xhr){
   console.error("something fucked up lmao");
}
xhr.onload = function (){
   var response = xhr.responseText;
   console.log(response);
};
xhr.onerror = function () {
   console.error("something fucked up");
};

