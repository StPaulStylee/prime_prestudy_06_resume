$(document).ready(function() {
    $('.js-show-modal').on('click', function(event) {
        event.preventDefault();
        $('.js-modal').addClass('is-visible');
        $('.js-modal-overlay').addClass('is-visible');

    $('.js-modal-overlay').on('click', function(event) {
        $('.js-modal').removeClass('is-visible');
        $('.js-modal-overlay').removeClass('is-visible');
    })
    })
    $('button').on('click', function() {
        $(this).closest('body').find('div.bg-container').addClass('show-bg-container');
        $(this).closest('body').find('button').remove();
    })
});
