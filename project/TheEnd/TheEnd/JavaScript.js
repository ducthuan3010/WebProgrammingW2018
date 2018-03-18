
function countdown() {
    var now = new Date();
    var eventDate = new Date(2018, 3, 9);
    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTiime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    // document.getElementById("time").innerHTML = `${d} ngày ${h}:${m}:${s}`;
    var x = document.getElementsByClassName("time-end");
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML = `${d} ngày ${h}:${m}:${s}`;
    }
    setTimeout(countdown, 1000);
}
$(document).ready(function () {
    countdown();
    //console.log("a");
    $('[data-toggle="tooltip"]').tooltip();
});
