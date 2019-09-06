//navbar
$(function() {
  var header = $(".navbar");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  });
});

//subscribe to newsletter form
$("#myForm").submit(function(event) {
  event.preventDefault();
  var userName = $("#name").val();
  var userEmail = $("#email").val();

  $("#response").text("Thank you " + userName + ", we shall get back to you.");
  $("#registerModal").hide();
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
  $("#myAlert").show();

  $("#name").val("");
  $("#email").val("");
});
