let hourHand = document.querySelector(".hour_hand");
let miniuteHand = document.querySelector(".miniute_hand");
let secondHand = document.querySelector(".second_hand");
let digital_clock = document.querySelector(".digital_clock");

function setClock() {
    const now = new Date(); //"2015-03-25T02:59:00"
    let secsAngle = now.getSeconds() * 6; // 360deg / 60 sec = 6deg
    let minutesAngle = (now.getMinutes() * 6) + (0.1 * now.getSeconds()); // 6deg / 60 sec = 0.1deg per one sec 
    let hoursAngle = (now.getHours() * 30) + ((now.getMinutes() / 12) * 6);
    
    //Update Analog Clock
    secondHand.style.transform = `rotate(${secsAngle}deg)`;
    miniuteHand.style.transform = `rotate(${minutesAngle}deg )`;
    hourHand.style.transform = `rotate(${hoursAngle}deg )`;
    
    //Update Digital Clock
    digital_clock.innerHTML = now.toLocaleString();
}
setClock();
setInterval(setClock, 1000);
