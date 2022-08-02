if (window.location.href.includes(("/department/") || ("/listing/") || ("/things-to-do/") || ("events/") || ("restaurants/") || ("hotels/") || ("meetings-groups") || ("sports/") || ("wedding”)));
    var c = 0;
    var e = new Date().valueOf();
    var finalPred;

    $(document).mousedown(function(e) {
        if (e.which === 3) {
            c++;
        }
    });

    function getWordCount() {
        try {
        var body = top.document.querySelector("body");
        if (body) {
            var content = body.innerText || getInnerText(top.document.body, top);
            content = content.replace(/\n/ig, ' ');
            var wordCount = content.match(/\S+/gi).length;
            return wordCount;
            }
            } catch (e) {
            processError("getWordCount", e);
        }
    }

function getKeyWordPresence(){
var body = top.document.querySelector("body");
var KeyWordPresence = document.body.innerText.includes("Example");
return KeyWordPresence;}

var count = 0;
window.onload = function () {
  var elems = document.body.getElementsByTagName("*");
  for(var i = 0; i < elems.length; i++)
  {
      var properties = (elems[i].currentStyle || window.getComputedStyle(elems[i], false));
      background = properties.backgroundImage.slice(4, -1);
      if(background.indexOf("http://placehold.it/50x50") > -1)
      {
         count++;
      }
  }
};

 $(window).on("beforeunload", function() {
        var f = getWordCount();
        var d = (new Date().valueOf() - e) / 1000;
        var h = count;
        var currenturl = window.location.href;
 navigator.sendBeacon('INSERT_URL_HERE', JSON.stringify({a:c, b:d, url:currenturl, g:f, i:h}));
})
