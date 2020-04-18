

function getHours() {

    var time = document.getElementsByClassName("gametime")[1];
    time.innerHTML = new Date().getHours() + ":" + new Date().getMinutes();

}