var reader = require("feed-reader");
var parse = reader.parse;
var url = 'https://news.ycombinator.com/rss';
parse(url).then((feed) => {
   console.log(feed);
}).catch((err) => {
   console.error("error");
}).finally(() => {
   console.log("everything done");
});

