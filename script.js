

const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const suffixDisplay = document.getElementById('suffix');
const dateDisplay = document.getElementById('date')


const date = new Date().toLocaleDateString() 


const interval = setInterval(()=>{
    const time = new Date()
    hoursDisplay.textContent = time.getHours().toString().padStart(2,'0');
    minutesDisplay.textContent = time.getMinutes().toString().padStart(2,'0');
    secondsDisplay.textContent = time.getSeconds().toString().padStart(2,'0')
    suffixDisplay.textContent = time.getHours() > 12 ? 'pm' : 'am';
    dateDisplay.textContent = time.toLocaleDateString('en-US',{day:'numeric',month:'short',weekday:'short',year:'numeric'})
},1000)


