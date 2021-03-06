window.onload = function() {
  $('selection.dropdown').dropdown();
  $('.ui.dropdown').dropdown({allowAdditions: true});
  $('.ui.radio.checkbox').checkbox();
  if ($("#range-1").length > 0) {
      $('#range-1').range({min: 0, max: 10, start: 5});
  }
  $('.message  .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
  document.getElementById("current-date").valueAsDate = new Date();
}

function submitForm() {
  event.preventDefault();
  var frm = document.getElementById('dishform');
  frm.reset(); // Reset
  $(".ui.form").addClass('success');
}
