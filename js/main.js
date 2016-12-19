
var projects = "https://busybeaverhp.github.io/Projects.html";
var exam145 =
    "https://cdn.rawgit.com/busybeaverhp/HuyPham_20161206_CSI145FinalExam/master/HuyPham_20161206_CSI145FinalExam/HuyPham_20161206_CSI145FinalExam.html";

function intitializePage() {
}
function resetContentBody() {
    document.getElementById("contentbody").innerHTML = '';
    document.getElementById("contentbody").style.width = "100%";
    document.getElementById("contentbody").style.height = "auto";
    document.getElementById("contentbody").style.overflow = "hidden";
    document.getElementById("contentbody").style.padding = "8px 8px 8px 8px";
    document.getElementById("contentbody").style.boxSizing = "border-box";
    document.getElementById("contentbody").style.fontSize = "16px";
    document.getElementById("contentbody").style.color = "white";
    document.getElementById("contentbody").style.background = "#404040";
    document.getElementById("contentbody").style.background = "rgba(48, 48, 56, 0.95)";
}
function topOfPage() {
    window.scrollTo(0, 0);
}
function loadPage(obj) {
    var page = obj;
    document.getElementById("contentbody").innerHTML =
        '<object width="950px" height="100%" data="' +
        page + '" type="text/html"><embed src="' + page + '" type="text/html" /></object>';
    document.getElementById("contentbody").style.background = "initial";
    document.getElementById("contentbody").style.overflow = "hidden";
    return false;
}
function loadPageWhite(obj) {
    var page = obj;
    document.getElementById("contentbody").innerHTML =
        '<object width="100%" height="100%" overflow="hidden" data="' +
        page + '" type="text/html"><embed src="' + page + '" type="text/html" /></object>';
    document.getElementById("contentbody").style.background = "white";
    document.getElementById("contentbody").style.height = "3200px";
    document.getElementById("contentbody").style.overflow = "hidden";
    
    return false;
}
function loadProjects() {
    resetContentBody();
    var projectUrl = "Projects.html";
    var page = projectUrl;
    document.getElementById("contentbody").innerHTML =
        '<object width="950px" height="100%" overflow-x="hidden" overflow-y="auto" data="' +
        page + '" type="text/html"><embed src="' + page + '" type="text/html" /></object>';

    document.getElementById("contentbody").style.overflow = "hidden";
    document.getElementById("contentbody").style.height = "6350px";
    document.getElementById("contentbody").style.background = "transparent";
}
function loadArt() {
    resetContentBody();
    var projectUrl = "Art.html";
    var page = projectUrl;
    document.getElementById("contentbody").innerHTML =
        '<object width="950px" height="100%" overflow-x="hidden" overflow-y="auto" data="' +
        page + '" type="text/html"><embed src="' + page + '" type="text/html" /></object>';

    document.getElementById("contentbody").style.overflow = "hidden";
    document.getElementById("contentbody").style.height = "5600px";
    document.getElementById("contentbody").style.background = "transparent";
}