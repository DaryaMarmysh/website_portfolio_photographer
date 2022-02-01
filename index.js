import i18Obj from './translate.js';
const hamburger = document.querySelector('.hamburger');
const check_lan=document.querySelector('.lang');
const theme_butn=document.querySelectorAll('.theme');
check_lan.addEventListener('click', getTranslate);
const nav = document.querySelector('.nav');
nav.addEventListener('click', closeMenu);
theme_butn.forEach(b => b.addEventListener('click', changeTheme));
function changeTheme(event)

{
    theme_butn.forEach(b => b.classList.toggle('disp'));
    if(event.target.parentNode.id=='day')
    {document.documentElement.style.setProperty('--body-color', '#fff');
    document.documentElement.style.setProperty('--text-color', '#000');
    document.documentElement.style.setProperty('--hover-color', '#fff');
    document.documentElement.style.setProperty('--url', 'url("assets/img/bg_lite.jpg")');
    document.documentElement.style.setProperty('--url_con', 'url("assets/img/contacts_lite.jpg")');
    document.documentElement.style.setProperty('--icon_color', '#000');
    document.documentElement.style.setProperty('--h2_color', '#000');
    document.documentElement.style.setProperty('--gold_color_to_white', '#fff');
    document.documentElement.style.setProperty('--white-to-gold', '#bdae82');
    document.documentElement.style.setProperty('--gold-to-black', '#1C1C1C');
    document.documentElement.style.setProperty('--black-to-gold', '#bdae82');
    document.documentElement.style.setProperty('--black-to-matte-black', '#1C1C1C');
    document.documentElement.style.setProperty('--black-to-white', '255,255,255');}
    else{
    document.documentElement.style.setProperty('--body-color', '#000');
    document.documentElement.style.setProperty('--text-color', '#fff');
    document.documentElement.style.setProperty('--hover-color', '#bdae82');
    document.documentElement.style.setProperty('--url', 'url("assets/img/bg.jpg")');
    document.documentElement.style.setProperty('--url_con', 'url("assets/img/contacts.jpg")');
    document.documentElement.style.setProperty('--icon_color', '#fff');
    document.documentElement.style.setProperty('--h2_color', '#bdae82');
    document.documentElement.style.setProperty('--gold_color_to_white', '#bdae82');
    document.documentElement.style.setProperty('--white-to-gold', '#fff');
    document.documentElement.style.setProperty('--gold-to-black', '#bdae82');
    document.documentElement.style.setProperty('--black-to-gold', '#000');
    document.documentElement.style.setProperty('--black-to-matte-black', '#000');
    document.documentElement.style.setProperty('--black-to-white', '0,0,0');

    }
}

function toggleMenu() {

    nav.classList.toggle('open');
    hamburger.classList.toggle('open');

}
function closeMenu(event) {

    if (event.target.classList.contains('nav-link')) {
        nav.classList.remove('open')
        hamburger.classList.remove('open')
    }
}

hamburger.addEventListener('click', toggleMenu);
const portfolioBtns = document.querySelector('.portfolio-btns');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const seasons = ['winter', 'spring', 'summer', 'autumn'];
const butns = document.querySelectorAll('.portfolio-btn');
butns.forEach(b => b.addEventListener('click', (event) => {
    butns.forEach(b =>b.classList.remove('button-bg'));
    changeClassActive( event,'button-bg')
   
}));

function changeClassActive(elem,className)
{
elem.target.classList.add(className);
}
portfolioBtns.addEventListener('click', (event) => {

    if (event.target.classList.contains('portfolio-btn')) {
        seasons.map(x => event.target.dataset.season == x ? portfolioImages.forEach((img, index) => img.src = `assets/img/${x}/${index + 1}.jpg`) : '')
    }

});
function getTranslate(event)
{
   let id=event.target.id;
    let col=check_lan.childNodes;
    col.forEach(x=>x.nodeName=='SPAN'?x.classList.remove('check'):'');
    event.target.classList.add('check');
    const transl=document.querySelectorAll('*[data-i18]');
    transl.forEach(htmlNode=>Object.keys(i18Obj[id]).map(k=>k==htmlNode.dataset.i18?htmlNode.textContent=i18Obj[id][htmlNode.dataset.i18]:'' ) )
   
}
console.log('72.5\nНе выполненные/не засчитанные пункты:\n1) выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы\n2) сложные эффекты для кнопок при наведении и/или клике\nЧастично выполненные пункты:\n1) после смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) — 2 балл(а)\nКнопки в секции портфолио отображаются неправильно.')

