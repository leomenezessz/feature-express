$(document).ready(function() {
  $('#myList a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  });

  $('.tab-pane ul li').each(function() {
    $(this).html($(this).html().replace(/Scenario/g, "<strong>Scenario</strong>"));
    $(this).html($(this).html().replace(/Given/g, "<strong>Given</strong>"));
    $(this).html($(this).html().replace(/When/g, "<strong>When</strong>"));
    $(this).html($(this).html().replace(/Then/g, "<strong>Then</strong>"));
  });

});
