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
      var d = Date.now();
      var date = d.toString();
      $.post('http://flare-app-server.appspot.com/', {
        email: $email,
        date: date
      });
      $('input').val('');
      $('.message').removeClass('red');
      $('.message').addClass('green');
      $('.message').text('Thanks! Please check your email for your invite.');
    } else {
      $('.message').removeClass('green');
      $('.message').addClass('red');
      $('.message').text('Please enter a valid email.');
    }
  })
});
