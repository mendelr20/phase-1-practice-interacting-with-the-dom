let count = 0

let timerText = document.getElementById('counter')

let increment = document.getElementById('plus')

let decrement = document.getElementById('minus')

let heart = document.querySelector("#heart")

let numberOfTimes = {}

let li

let likes = document.querySelector('.likes')

let pause = document.getElementById("pause")

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
    if (numberOfTimes[count]){
        numberOfTimes[count] =  numberOfTimes[count] + 1
    }
    else {
        numberOfTimes[count] = 1
    }
    listlikes()
})

function listlikes(){
    if (numberOfTimes[count] == 1){
        li = document.createElement('li') 
        li.innerText = `${count} has been liked ${numberOfTimes[count]} time`
        likes.appendChild(li)
    }
    else {
        li.innerText = `${count} has been liked ${numberOfTimes[count]} time`
    }
}

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
    form.reset()
})






