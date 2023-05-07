function setClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsHand = document.querySelector('.second-hand');
    const minutesHand = document.querySelector('.minute-hand');
    const hoursHand = document.querySelector('.hour-hand');

    const secondsRotation = ((seconds / 60) * 360) + 90;
    const minutesRotation = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hoursRotation = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    secondsHand.style.transform = `translateX(-50%) rotate(${secondsRotation}deg)`;
    minutesHand.style.transform = `translateX(-50%) rotate(${minutesRotation}deg)`;
    hoursHand.style.transform = `translateX(-50%) rotate(${hoursRotation}deg)`;
}

setClock();
setInterval(setClock, 1000);
