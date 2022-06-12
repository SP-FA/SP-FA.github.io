function obcbo() {
    if (document.getElementById("page-header").getAttribute("style") == "background: url()" || document.getElementById("page-header").getAttribute("style") == null) {
        var background_urls = [
            '/img/lty-bg.png',
            '/img/lty-bg2.png',
            '/img/Sky.jpg'
        ]
        var index = Math.floor((Math.random() * background_urls.length));
        var urlphoto = ('background-image:url(' + background_urls[index] + ')');
        document.getElementById("page-header").style = urlphoto;
    }
}