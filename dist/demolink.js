var waitForGlobal = function(key, callback) {
  if (window[key]) {
    callback();
  } else {
    setTimeout(function() {
      waitForGlobal(key, callback);
    }, 100);
  }
};

function checkParams() {
    let urlParams = new URL(document.location.toString()).searchParams;
    let encodedFileName = urlParams.get("name");
    if(encodedFileName) {
        var decodedFileName = decodeURIComponent(encodedFileName);
        waitForGlobal("myApp", function() {
            window["myApp"].load_url(decodedFileName)
        });
    }
}
checkParams();