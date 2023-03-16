// Тест
let button = document.getElementById('test')
button.addEventListener('click', correct)

function correct() {
    let good = 0;

    let ans1 = document.getElementById('answer1').value;
    if(ans1 === '1945') {
        good++;
    }
    
    let ans2 = document.getElementById('answer2').value;
    if(ans2 === 'скорость света') {
        good++;
    }

    let ans3 = document.getElementById('answer3').value;
    if(ans3 === '753') {
        good++;
    }

    let ans4 = document.getElementById('answer4').value;
    if(ans4 === 'да') {
        good++;
    }

    let ans5 = document.getElementById('answer5').value;
        if(ans5 ==='1') {
            good++
        }

        alert('correct answers' + '' + good);

       if(good >= 4) {
        window.location = 'file:///C:/Users/Professional/Desktop/Новая%20папка%20(2)/проекты/Проект%2028%20кнопка%20с%20звуковым%20эффектом/Новая%20папка/index.html';
       } else if(good == 'code') {
        window.location = 'file:///C:/Users/Professional/Desktop/Новая%20папка%20(2)/проекты/Проект%2028%20кнопка%20с%20звуковым%20эффектом/Новая%20папка/index.html';
       }

}

correct()


//КУРСОР
const bodyElement = document.querySelector('body');


bodyElement.addEventListener('mousemove', (element)=> {
    let posTop = element.offsetY;
    console.log(posTop);
    let posLeft = element.offsetX;
    
    let spanEl = document.createElement('span');
    spanEl.style.left = posLeft + 'px';
    spanEl.style.top = posTop + 'px';
    bodyElement.appendChild(spanEl);

    setTimeout(()=>{
        spanEl.remove()
    }, 3000)
})