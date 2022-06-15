/*=============== SHOW MODAL ===============*/
var video = document.getElementById('video')
var videotwo = document.getElementById('videotwo')
const showModal = (openButton, modalContent, openButtonTwo, modalContentTwo) => {
    const openBtn = document.getElementById(openButton),
        modalContainer = document.getElementById(modalContent),
        openBtnTwo = document.getElementById(openButtonTwo),
        modalContainerTwo = document.getElementById(modalContentTwo)

    if (openBtn && modalContainer) {
        openBtn.addEventListener('click', () => {
            modalContainer.classList.add('show-modal')
            $('.wrapper').addClass('modal_open')
            video.volume = 0.25;
        })
    }
    if (openBtnTwo && modalContainerTwo) {
        openBtnTwo.addEventListener('click', () => {
            modalContainerTwo.classList.add('show-modal')
            $('.wrapper').addClass('modal_open')
            videotwo.volume = 0.25;
        })
    }
}
showModal('open-modal', 'modal-container','open-modal-two', 'modal-container-two')

/*=============== CLOSE MODAL ===============*/


window.addEventListener('click', e => { // при клике в любом месте окна браузера
    const modalContainer = document.getElementById('modal-container')
    const modalContainerTwo = document.getElementById('modal-container-two')
   const target = e.target // находим элемент, на котором был клик
    if (!target.closest('.modal__button') && !target.closest('.modal__content') && !target.closest('.prority_verves_test')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
        modalContainer.classList.remove('show-modal')
        modalContainerTwo.classList.remove('show-modal') // то закрываем окно навигации, удаляя активный класс
        $('.wrapper').removeClass('modal_open')
       video.pause();
       videotwo.pause();
       video.currentTime = 0;
       videotwo.currentTime = 0; 
   }
})
$('.close-modal').on('click', function () {
    $('.modal__container').removeClass('show-modal');
    $('.wrapper').removeClass('modal_open')
    video.pause();
    videotwo.pause();
    video.currentTime = 0;
    videotwo.currentTime = 0; 
});
video.addEventListener('ended', function () {
    video.currentTime = 0;
    $('.modal__container').removeClass('show-modal');
    $('.wrapper').removeClass('modal_open')
});
videotwo.addEventListener('ended', function () {
    video.currentTime = 0;
    $('.modal__container').removeClass('show-modal');
    $('.wrapper').removeClass('modal_open')
});