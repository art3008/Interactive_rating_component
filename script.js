const btnSubmit = document.querySelector('.btn')
const btnRaiting = document.querySelector('.raiting')
const iconStar = document.querySelector('.icon_star')
const title = document.querySelector('.title')
const descrip = document.querySelector('.description')
const thkImg = document.querySelector('.thankYouImg')

let enterNum = ''


btnRaiting.addEventListener('click', function(event) {
    enterNum = event.target.innerText

    // descrip.innerHTML  = '<img src="./images/illustration-thank-you.svg">'
    // descrip.style.visibility = 'hidden'
    iconStar.style.display = 'none'
    title.style.display = 'none'
    descrip.style.display = 'none'
    thkImg.style.display = 'flex'
    thkImg.style.marginTop = '40px'
    thkImg.style.marginBottom = '40px'
    
    // descrip.style.justifyContent = 'center'
    // descrip.style.alignTimes = 'center'


})

btnSubmit.addEventListener('click', () => {
    if(enterNum == '') {
        alert('Пусто')
    } else {
        
        console.log('Вы выбрали - '  + enterNum)
        enterNum = ''
        
    }

    btnSubmit.style.background  = ''
    descrip.style.visibility = 'visible'
})

