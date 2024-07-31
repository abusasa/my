// бургер
$('.menu-trigger').on('click', function () {
    $('.menu-media__list').slideToggle();
});


$('.menu-trigger').click(function () {
    $('.menu-media__list').toggleClass('active');
});

$('.menu-trigger').click(function () {
    $('.menu-trigger').toggleClass('active');
});

$('.menu-trigger').click(function () {
    $('.logo__wrapper').toggleClass('active');
});
//-----------------------------------------------------------

$('.navigation__list--logo').click(function () {
    $('.logo__wrapper').toggleClass('tech__active');
    $('.navigation__box--logo').toggleClass('tech__active');
    $('.navigation__item--logo').toggleClass('tech__active');
});
$('.navigation__list--menu').click(function () {
    $('.menu__link').toggleClass('tech__active');
    $('.navigation__box--menu').toggleClass('tech__active');
    $('.navigation__item--menu').toggleClass('tech__active');
});
$('.navigation__list--text').click(function () {
    $('.welcome__text').toggleClass('tech__active');
    $('.product__text').toggleClass('tech__active');
    $('.navigation__box--text').toggleClass('tech__active');
    $('.navigation__item--text').toggleClass('tech__active');
});
$('.navigation__list--bg').click(function () {
    $('body').toggleClass('tech__active');
    $('.product__img').toggleClass('tech__active');
    $('.navigation__box--bg').toggleClass('tech__active');
    $('.navigation__item--bg').toggleClass('tech__active');
});
$('.navigation__list--prodlist').click(function () {
    $('.products__item').toggleClass('tech__active');
    $('.navigation__box--prodlist').toggleClass('tech__active');
    $('.navigation__item--prodlist').toggleClass('tech__active');
});
$('.navigation__list--cart').click(function () {
    $('.products__item--3').toggleClass('tech__active2');
    $('.navigation__box--cart').toggleClass('tech__active');
    $('.navigation__item--cart').toggleClass('tech__active');
});

$('.navigation__list--title').click(function () {
    $('.product__title').toggleClass('tech__active');
    $('.navigation__box--title').toggleClass('tech__active');
    $('.navigation__item--title').toggleClass('tech__active');
});

$('.navigation__list--options').click(function () {
    $('.product__parametrs').toggleClass('tech__active');
    $('.navigation__box--options').toggleClass('tech__active');
    $('.navigation__item--options').toggleClass('tech__active');
});
$('.navigation__list--price').click(function () {
    $('.product__btn--price').toggleClass('tech__active');
    $('.navigation__box--price').toggleClass('tech__active');
    $('.navigation__item--price').toggleClass('tech__active');
});
$('.navigation__list--basket').click(function () {
    $('.product__btn--cart').toggleClass('tech__active');
    $('.navigation__box--basket').toggleClass('tech__active');
    $('.navigation__item--basket').toggleClass('tech__active');
});
// ===============================================
$('.navigation__list--adres').click(function () {
    $('.contacts__info').toggleClass('tech__active');
    $('.navigation__box--adres').toggleClass('tech__active');
    $('.navigation__item--adres').toggleClass('tech__active');
});
$('.navigation__list--cont').click(function () {
    $('.mail__svg-shape').toggleClass('tech__active');
    $('.phone__link').toggleClass('tech__active');
    $('.mail__link').toggleClass('tech__active');
    $('.navigation__box--cont').toggleClass('tech__active');
    $('.navigation__item--cont').toggleClass('tech__active');
});
$('.navigation__list--map').click(function () {
    $('.contacts__map').toggleClass('tech__active');
    $('.navigation__box--map').toggleClass('tech__active');
    $('.navigation__item--map').toggleClass('tech__active');
});
// $('.elementNaKotoryjClick').click(function () {
//     $('.elementKotoryjPolychitClassActivePriClickeNaPervyj').toggleClass('active');
// });