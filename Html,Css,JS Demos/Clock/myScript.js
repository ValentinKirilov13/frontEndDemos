setInterval(
    function(){

        let time = new Date();
        let seconds = time.getSeconds() * 6;
        let minutes = time.getMinutes() * 6;
        let hours = time.getHours() * 30 + Math.round(minutes/12);

        document.getElementById("secunds").style.transform = "rotate(" + seconds + "deg)";
        document.getElementById("minutes").style.transform = "rotate(" + minutes + "deg)";
        document.getElementById("hours").style.transform = "rotate(" + hours + "deg)";

    },1000
);