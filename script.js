const btnSubmit = document.querySelector('.btn')
const btnRaiting = document.querySelector('.raiting')
const iconStar = document.querySelector('.icon_star')
const title = document.querySelector('.title')
const descrip = document.querySelector('.description')
const thkImg = document.querySelector('.thankYouImg')
const result = document.querySelector('.result_text')
const bottom = document.querySelector('.bottom')
let enterNum = ''


btnRaiting.addEventListener('click', function(event) {
    enterNum = event.target.innerText
})

btnSubmit.addEventListener('click', () => {
    if(enterNum == '') {
        alert('Пусто')
    } else {
        iconStar.style.display = 'none'
        title.style.display = 'none'
        descrip.style.display = 'none'
        thkImg.style.display = 'flex'
        thkImg.style.marginTop = '40px'
        thkImg.style.marginBottom = '40px'
        btnRaiting.style.display = 'none'
        result.style.display = 'flex'
        result.style.alignItems = 'center'
        result.style.justifyContent = 'center'
        result.style.marginBottom = '20px'
        btnSubmit.style.display = 'none'
        bottom.style.display = 'block'

        result.innerText = `You selected ${enterNum} of 5`
        enterNum = ''
        
    }


})

