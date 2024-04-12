var path = window.location.pathname
var link = path.slice(1)
if (!link == "404.html") {
    window.location.assign("https://www.youtube.com/watch?v=", link)
}
else {
    window.location.assign("https://yt.augy.live/404.html")
}
