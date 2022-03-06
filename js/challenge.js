let count = 0
let timerText = document.getElementById('counter')

let increment = document.getElementById('plus')

let decrement = document.getElementById('minus')

let heart = document.querySelector("#heart")

let likes = document.querySelector('.likes')

let numberOfTimes = {}

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

    const li = document.createElement('li') 
    li.innerText = `${count} has been liked ${numberOfTimes[counter]} time`
    likes.appendChild(li)
   
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
})






