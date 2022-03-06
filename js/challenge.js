let timerText = document.getElementById('counter')
let count = 0
let increment = document.getElementById('plus')
let decrement = document.getElementById('minus')
let heart = document.querySelector("#heart")
let likes = document.querySelector('.likes')
let numberOfTimes = {}
let form = document.getElementById('comment-form')

intervalId = setInterval(() => {
    count += 1
    timerText.textContent = count
},1000)

increment.addEventListener('click', () => {
    count +=1
    timerText.textContent = count
})

decrement.addEventListener('click', () => {
    count -=1
    timerText.textContent = count
})

heart.addEventListener('click', () => {
    console.log(counter)
    if (numberOfTimes[counter]){
        numberOfTimes[counter] =  numberOfTimes[counter] + 1
    }
    else {
        numberOfTimes[counter] = 1
    }
    listlikes()
})

function listlikes(){
    // for in - create li - set inner html to key 
    // 
    const li = document.createElement('li') 
    li.innerText = `${count} has been liked ${numberOfTimes[counter]} time`
    likes.appendChild(li)
}


// Pause the counter, which should:
// pause the counter
// disable all buttons except the pause button
// switch the label on the button from "pause" to "resume"
// Click the "restart" button to restart the counter and re-enable the buttons.

pause = document.getElementById("pause")
pause.addEventListener('click', () => {
    if (pause.innerText === 'pause') {
        pause.innerText = 'resume'
        clearInterval(intervalId)
      } else {
        pause.innerText = 'pause'
        intervalId = setInterval(() => {
            count += 1
            timerText.textContent = count
        },1000)
      }
})
   

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let p = document.createElement('p')
    p.textContent = e.target.comment.value
    document.querySelector('#list').appendChild(p)
})






