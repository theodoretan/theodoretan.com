$(function() {
  $('body').addClass('is-loading');

  $(window).on('load', function() {
    window.setTimeout(function() {
      $('body').removeClass('is-loading');
    }, 100);
  });
})
