var request = new XMLHttpRequest();
request.open("get","https://news.ycombinator.com/rss", true);
request.onreadystatechange = function() {if (request.readyState==4) alert("It worked!");};
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
request.setRequestHeader("Access-Control-Request-Headers", "x-requested-with");
request.send();
