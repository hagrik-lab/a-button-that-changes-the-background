//Первая переменая отсылается к body из html а вторая переменная отсылаеся к кнопке
let bodyEl = document.querySelector('body');
let buttonEl = document.querySelector('.clickMe');



//Отвечает за создание кода для рандмного цвета
function randomColorCode() {
    let chars = '1234567890abcdef'; 
    let charsLength = 6;
    let colorCode = '';
    
    for(let i=0; i<charsLength; i++) {
        let random = Math.floor(Math.random()*chars.length);
        colorCode += chars.substring(random, random+1);
        console.log(colorCode);
        
    }
    return colorCode;

}
randomColorCode();


//Функция отвечающая за создание рандомного цвета на экране
function randomBackgroundColor() {
    let color = randomColorCode();
    bodyEl.style.backgroundColor = '#' + color;
}


//Событие отвечающие за рандомную смену цвета на экране вторая часть кода отвечает за звуковой сигнал
bodyEl.addEventListener('click', (element)=> {
    randomBackgroundColor();

    
})


//Функция отвечающая за вывод рандомнго индекса
function randomIndexArr(arr) {
    let randomIndex =  Math.floor(Math.random()*arr.length);
    return arr[randomIndex];
}

//Событие отвечающее за смену цвета кнопки при ее нажатии вторая часть кода отвечает за звуковой сигнал
buttonEl.addEventListener('click', (event) => {
    let colorArray = ['https://avatars.mds.yandex.net/i?id=b11951ac9e769b845343796e1c84c7c0cc065afb-9147977-images-thumbs&n=13', 'https://img.freepik.com/free-photo/black-marble-patterned-texture-background-marble-of-thailand-abstract-natural-marble-black-and-white-for-design_1253-917.jpg?size=626&ext=jpg&ga=GA1.1.652049447.1674283581&semt=ais', 'https://img.freepik.com/free-vector/dark-gradient-hexagonal-background_52683-63120.jpg?size=626&ext=jpg&ga=GA1.1.652049447.1674283581&semt=ais',
'https://avatars.mds.yandex.net/i?id=f3f52e7f830955d35af331f2e9ac10c47e980bd5-9303200-images-thumbs&n=13', 'https://img.freepik.com/free-photo/black-monstera-leaves-background-wallpaper_53876-102420.jpg?size=626&ext=jpg&ga=GA1.1.652049447.1674283581&semt=ais', 'https://img.freepik.com/free-photo/neon-tropical-monstera-leaf-banner_53876-138943.jpg?size=626&ext=jpg&ga=GA1.1.652049447.1674283581&semt=ais',
'https://avatars.mds.yandex.net/i?id=5167ecdb97f1b264610cdb590db308e067ced6de-8454246-images-thumbs&n=13', 'https://img.freepik.com/free-photo/modern-background-with-lines_1361-3533.jpg?size=626&ext=jpg&ga=GA1.1.652049447.1674283581&semt=ais', 'https://img.freepik.com/premium-photo/natural-sky-blurred-pink-blue-gradient-background_158388-5321.jpg?size=626&ext=jpg&ga=GA1.1.652049447.1674283581&semt=ais', 'https://img.freepik.com/free-photo/red-and-black-brush-stroke-banner-background-perfect-for-canva_1361-3597.jpg?size=626&ext=jpg&ga=GA1.1.652049447.1674283581&semt=ais',  
'https://img.freepik.com/premium-photo/3d-rendering-purple-portal-frame-topographic-terrain-wireframe-background_167650-887.jpg?size=626&ext=jpg&ga=GA1.1.652049447.1674283581&semt=ais', 'https://img.freepik.com/free-photo/abstract-space-wallpaper-background-dark-smoke-design_53876-128278.jpg?size=626&ext=jpg&ga=GA1.1.652049447.1674283581&semt=ais', 'https://img.freepik.com/premium-photo/sci-fi-virtual-reality-landscape-cyberpunk-style-3d-render-fantasy-universe-and-space-cloud-background_24623-1033.jpg?size=626&ext=jpg&ga=GA1.1.652049447.1674283581&semt=ais',
'https://img.freepik.com/premium-photo/futuristic-fantasy-night-landscape-with-abstract-islands-and-night-sky-with-space-galaxies_129911-2852.jpg?size=626&ext=jpg&ga=GA1.1.652049447.1674283581&semt=ais', 'https://img.freepik.com/free-photo/abstract-blue-extruded-voronoi-blocks-background-minimal-light-clean-corporate-wall-3d-geometric-surface-illustration-polygonal-elements-displacement_1217-2510.jpg?size=626&ext=jpg&ga=GA1.1.652049447.1674283581&semt=ais'];
    let colorCodeArray = randomIndexArr(colorArray);
    buttonEl.style.background = 'url' + '(' + randomIndexArr(colorArray) + ')';

    soundClick();
})

//Элемент отвечающий за измененый курсор мыши

bodyEl.addEventListener('mousemove', (element) => {
    let xPos = element.offsetX;
    let yPos = element.offsetY;

    let spanEl = document.createElement('span');
    spanEl.style.left = xPos + 'px';
    spanEl.style.top = yPos + 'px';
    bodyEl.appendChild(spanEl);

    setTimeout(()=> {
        spanEl.remove();
    }, 1000)
})

//Функция алгоритма звукового эффекта
function soundClick() {
    let sound = new Audio('clickSound.mp3');

    sound.play();
}
soundClick();