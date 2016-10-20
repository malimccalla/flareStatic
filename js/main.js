$(document).ready(function() {
  var $window = $(window);

  $window.resize(function resize() {
    if ($window.width() > 400) {
      $('input').addClass('input-lg');
      return $('button').addClass('btn-lg');
    }

    $('input').removeClass('input-lg');
    $('button').removeClass('btn-lg');
  }).trigger('resize');
});
