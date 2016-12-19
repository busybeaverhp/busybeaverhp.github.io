
var contentBodyClone;
var projects = "https://busybeaverhp.github.io/Projects.html";
var exam145 =
    "https://rawgit.com/busybeaverhp/HuyPham_20161206_CSI145FinalExam/master/HuyPham_20161206_CSI145FinalExam/HuyPham_20161206_CSI145FinalExam.html";

function intitializePage() {
}
function topOfPage() {
    window.scrollTo(0, 0);
}
function loadPage(obj) {
    var page = obj;
    document.getElementById("contentbody").innerHTML =
        '<object width="960px" height="700px" data="' +
        page + '" type="text/html"><embed src="' + page + '" type="text/html" /></object>';
    document.getElementById("contentbody").style.background = "initial";
    document.getElementById("contentbody").style.overflow = "hidden";
    return false;
}
function loadPageWhite(obj) {
    var page = obj;
    document.getElementById("contentbody").innerHTML =
        '<object width="950px" height="100%" overflow-x="hidden" overflow-y="auto" data="' +
        page + '" type="text/html"><embed src="' + page + '" type="text/html" /></object>';
    document.getElementById("contentbody").style.background = "white";
    document.getElementById("contentbody").style.height = "750px";
    document.getElementById("contentbody").style.overflow = "hidden";
    return false;
}