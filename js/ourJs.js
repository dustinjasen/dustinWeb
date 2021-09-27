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
      let successScreen = $(divOne + contentSuccessIcon + contentSuccessText + divOneExit);

      $('.contact-form').html(successScreen);

    },
    error: function (jqXHR, textStatus, errorThrown) {
      let divOne = "<div class='successBox'>";
      let contentfailIcon = "<p id='failIcon'><i class='far fa-times-circle'></i></p>";
      let contentfailText = "<p id='failText'>Failed to Send</p>";
      let divOneExit = "</div>";
      let failScreen = $(divOne + contentfailIcon + contentfailText + divOneExit);

      $('.contact-form').html(failScreen);

      console.log(':' + textStatus + ' : ' + errorThrown + ' || Please press F12 to access Network Log for further info');
    },
  });
})

$('#clickCerts').click(function () {
  $('#codeCerts').modal('show');

})

$('.modalClose').click(function () {
  $('#codeCerts').modal('hide');

})


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}