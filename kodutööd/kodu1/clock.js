function startClock(){
    var weekday = document.getElementById("weekday");
    var day = document.getElementById("day");
    var month = document.getElementById("month");
    var year = document.getElementById("year");
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
  
    var date = new Date();
    var dw = date.getDay();
    var dwname = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ][dw];
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    var h = date.getHours();
    var min = date.getMinutes();
    var s = date.getSeconds();
  
    year.innerHTML = y;
    month.innerHTML = m;
    day.innerHTML = d;
    weekday.innerHTML = dwname;
    hours.innerHTML = h;
    minutes.innerHTML = min;
    seconds.innerHTML = s;
}
  
  window.addEventListener('load', (event) => {
    setInterval(startClock, 100);
});

function display_corona(){
    var coronaStart = new Date('12/31/2019');
    var today = new Date();
    var difference = today.getTime() - coronaStart.getTime();
    var days = Math.ceil(difference / (1000 * 3600 * 24)); 
    document.getElementById("corona").innerHTML = days;
};

const body = document.querySelector("body");

function changeColor() {
  let color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  document.body.style.background = color;
}