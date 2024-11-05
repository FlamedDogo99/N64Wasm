function checkParams() {
    let urlParams = new URL(document.location.toString()).searchParams;
    let encodedFileName = urlParams.get("name");
    if(encodedFileName) {
        var decodedFileName = decodeURIComponent(encodedFileName);
        window["myApp"].load_url(decodedFileName)
    }
}
checkParams();