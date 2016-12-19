
var projects = "https://busybeaverhp.github.io/Projects.html";
var exam145 = "https://rawgit.com/busybeaverhp/HuyPham_20161206_CSI145FinalExam/master/HuyPham_20161206_CSI145FinalExam/HuyPham_20161206_CSI145FinalExam.html"
function topOfPage() {
    window.scrollTo(0, 0);
}
function loadPage(obj) {
    var page = obj;
    document.getElementById("contentbody").innerHTML = '<object width="100%" height="2560px" background-color:white; data="' + page + '" type="text/html"><embed src="' + page + '" type="text/html" /></object>';
    return false;
}