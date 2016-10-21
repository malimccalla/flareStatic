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

  $('button').click(function(event) {
    var $email = $('input').val();
    event.preventDefault();
    if ( /(.+)@(.+){2,}\.(.+){2,}/.test($email) ) {
      $.post('http://flare-app-server.appspot.com/', { email: $email })
      $('input').val('');
    }
    // console.log($email);
  })
});
