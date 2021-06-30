// Global



$('.select-title').bind('click', function() {
    $(this).siblings('.select-hidden').slideToggle(300)
    $(this).parents('.select').toggleClass('select-open')
})


$(document).mouseup(function(e) { // событие клика по веб-документу
    var div = $(".select"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        &&
        div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.find('.select-hidden').slideUp(300); // скрываем его
        div.removeClass('select-open')
    }
});

$('.select-hidden li').bind('click', function() {
    let value = $(this).text()
    $(this).parents('.select').removeClass('select-open')
    $(this).parents('.select-hidden').slideUp(300)
    $(this).parents('.select').find('.select-title__text').text(value)
    $(this).parents('.select').find('.select-title__text').css('color', '#333333')
})

// $('.sidebar-filters').bind('click', function() {

// })

$('.sidebar__top').bind('click', function() {
    if ($(window).width() <= 1024) {
        $('.sidebar-wrap_mobile').slideToggle()
    }
})


$('#cancelChanges').bind('click', function() {
    $('.sidebar-wrap_mobile').slideUp()
    $('.sidebar_mobile-buttons').css('opacity', '0.4')
})

$('.sidebar__top').bind('click', function() {
    $('.sidebar_mobile-buttons').css('opacity', '1')
})

$('#applyChanges').bind('click', function() {
    $('.sidebar-wrap_mobile').slideUp()
    $('.sidebar_mobile-buttons').css('opacity', '0.4')
})


$('.mobile-menu__toggler').bind('click', function() {
    $('.mobile-menu').css('top', '0')
})


$('.mobile-menu__close').bind('click', function() {
    $('.mobile-menu').css('top', '-200vh')
})
$('.sidebar-filters_age button').bind('click', function() {
    let valFrom = $(this).find('.filter-from').text()
    let valTo = $(this).find('.filter-to').text()
    $('.select-age_1 .select-title__text').text(valFrom)
    $('.select-age_2 .select-title__text').text(valTo)
})

$('.sidebar-filters_country button').bind('click', function() {
    let val = $(this).text()
    $('.countries-select .select-title__text').text(val).css('color', '#333333')
})

$('.clear-filter_age').bind('click', function() {
    $('.select-age_1 .select-title__text').text('18')
    $('.select-age_2 .select-title__text').text('44')
})

$('.clear-filter_country').bind('click', function() {
    $('.countries-select .select-title__text').text('All Countries').css('color', 'rgba(34, 34, 34, 0.5)')
})

$('.clear-filter_name').bind('click', function() {
    $('#nameIdField').val('')
})

$('#clearAllFilters').bind('click', function() {
    $('#nameIdField').val('')
    $('.select-age_1 .select-title__text').text('18')
    $('.select-age_2 .select-title__text').text('44')
    $('.countries-select .select-title__text').text('All Countries').css('color', 'rgba(34, 34, 34, 0.5)')
})

$('#clearAllDesktop').bind('click', function() {
    $('#nameIdField').val('')
    $('.select-age_1 .select-title__text').text('18')
    $('.select-age_2 .select-title__text').text('44')
    $('.countries-select .select-title__text').text('All Countries').css('color', 'rgba(34, 34, 34, 0.5)')
})