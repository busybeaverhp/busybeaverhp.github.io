
var projects = "https://busybeaverhp.github.io/Projects.html";

function topOfPage() {
    window.scrollTo(0, 0);
}
function loadPage(obj) {
    var page = obj;
    document.getElementById("contentbody").innerHTML = '<object data="' + page + '" type="text/html"><embed src="' + page + '" type="text/html" /></object>';
    return false;
}