$('#contactForm').on('submit', function (e) {
  e.preventDefault();

  var fullname = $('#fullname').val();
  var email = $('#email').val();
  var message = $('#message').val();


  $.ajax({
    url: './php/sendEmail.php',
    type: 'post',
    data: {
      fullname: fullname,
      email: email,
      message: message,
    },

    success: function () {
      let divOne = "<div class='successBox'>";
      let contentSuccessIcon = "<p id='successIcon'><i class='far fa-check-circle'></i></p>";
      let contentSuccessText = "<p id='successText'>Sent!</p>";
      let divOneExit = "</div>";
      let successScreen = $(divOne + contentSuccessIcon + contentSuccessText + divOneExit).fadeOut(2500);

      $('.contact-form').html(successScreen);

    },
    error: function (jqXHR, textStatus, errorThrown) {
let divOne = "<div class='successBox'>";
      let contentfailIcon = "<p id='failIcon'><i class='far fa-times-circle'></i></p>";
      let contentfailText = "<p id='failText'>Failed to Send</p>";
      let divOneExit = "</div>";
      let failScreen = $(divOne + contentfailIcon + contentfailText + divOneExit).fadeOut(2500);

     $('.contact-form').html(failScreen);
      
      console.log(':' + textStatus + ' : ' + errorThrown + ' || Please press F12 to access Network Log for further info');
    },
  });
})