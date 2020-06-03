let count = 0
let minutes = 0
let seconds = 0
let milliSeconds = 0
let interval = 0
let timerRunning = false

let startTimer = () =>{
    count++

    minutes = Math.floor((count/100)/60)
    seconds = Math.floor((count/100) - (minutes*60))
    milliSeconds = Math.floor(count - (seconds*100) - (minutes*6000))

    document.querySelector('#minutes').innerText = leadingZeros(minutes)
    document.querySelector('#seconds').innerText = leadingZeros(seconds)
    document.querySelector('#m-seconds').innerText = leadingZeros(milliSeconds)
}

let startButton = document.querySelector('#start-btn')

startButton.addEventListener('click',()=>{
    if(!timerRunning){
        interval = setInterval(startTimer , 10)
        timerRunning = true
    }
})

let stopButton = document.querySelector('#stop-btn')
stopButton.addEventListener('click',()=>{
    clearInterval(interval)
})

let resetButton = document.querySelector('#reset-btn')
resetButton.addEventListener('click',()=>{
    clearInterval(interval)
     count = 0
     minutes = 0
     seconds = 0
     milliSeconds = 0
     interval = 0
     timerRunning = false

    document.querySelector('#minutes').innerText = '00'   
    document.querySelector('#seconds').innerText = '00'   
    document.querySelector('#m-seconds').innerText = '00'   
})

let leadingZeros = (time)=>{
   if(time <= 9){
       return "0" + time
   }
   else{
       return time
   }
}