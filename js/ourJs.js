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

      
      console.log('sent')

    },
    error: function (jqXHR, textStatus, errorThrown) {
      alert(':' + textStatus + ' : ' + errorThrown + ' || Please press F12 to access Network Log for further info');
    },
  });
})