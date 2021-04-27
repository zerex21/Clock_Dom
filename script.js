let h = document.querySelector('.hour'),
    m = document.querySelector('.min'),
    s = document.querySelector('.sec'),
    time = document.querySelector('.cogs');


setInterval(clock,1000);

function clock() {
 let d = new Date();
 let hh = (d.getHours() * 30) + (d.getMinutes() / 2);
 let mm = d.getMinutes() * 6;
 let ss = d.getSeconds() * 6;
 h.style.transform = `rotate(${hh}deg)`;
 m.style.transform = `rotate(${mm}deg)`;
 s.style.transform = `rotate(${ss}deg)`;
 time.innerHTML = d.getHours() + ":"+d.getMinutes() + ":" +d.getSeconds();
}