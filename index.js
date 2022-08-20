const ageEL = document.getElementById('age');
const birthdate = "4 Mar 2004";

function live() {
    const birth = new Date(birthdate);
    const currentdate = new Date();
    const currentage = (currentdate - birth);
    const second = (currentage / 1000);
    const minute = (second / 60);
    const hour = minute / 60;
    const days = (hour / 24);
    const year = (days / 365);
    ageEL.innerHTML = year;
}
live();

setInterval(live, 1000);
