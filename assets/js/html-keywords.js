$(document).ready(function () {
  $('#myList a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  });


  $('.tab-pane ul li').each(function () {
    $(this).html($(this).html().replace(/\"/g, "<strong>\"</strong>"));
    $(this).html($(this).html().replace(/\|/g, "<strong>|</strong>"));
    $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].feature, "<strong>" + LANGUAGE.keywords[gherkinLanguage].feature + "</strong>"));
    $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].background, "<strong>" + LANGUAGE.keywords[gherkinLanguage].background + "</strong>"));
    $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].examples, "<strong>" + LANGUAGE.keywords[gherkinLanguage].examples + "</strong>"));
    $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].scenario_outline, "<strong>" + LANGUAGE.keywords[gherkinLanguage].scenario_outline + "</strong>"));
    $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].scenario, "<strong>" + LANGUAGE.keywords[gherkinLanguage].scenario + "</strong>"));
    $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].given, "<strong>" + LANGUAGE.keywords[gherkinLanguage].given + "</strong>"));
    $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].when, "<strong>" + LANGUAGE.keywords[gherkinLanguage].when + "</strong>"));
    $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].but, "<strong>" + LANGUAGE.keywords[gherkinLanguage].but + "</strong>"));
    $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].then, "<strong>" + LANGUAGE.keywords[gherkinLanguage].then + "</strong>"));
    $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].and, "<strong>" + LANGUAGE.keywords[gherkinLanguage].and + "</strong>"));
  });

  // Add CSS Classes
  $(function () {
    $(".tab-pane ul li:contains(" + LANGUAGE.keywords[gherkinLanguage].feature + ")").each(function () {
      $(this).addClass('cs-feature-title');
    });
    $(".tab-pane ul li:contains(@)").each(function () {
      if($(this).text().trim().charAt(0)==="@"){
        var texto = $(this).text().trim();
          $(this).html($(this).html().replace(texto,"<strong>"+texto));
      }
    });

    $('.tab-pane').first().addClass('active');
    $('.list-group a').first().addClass('active show');

    $(".tab-pane ul li:contains(|)").each(function () {
      $(this).css('white-space', 'pre');
    });

    $(".tab-pane ul li:contains(<)").each(function () {
      $(this).html($(this).html().replace(/&lt;/g , "<strong>"));
      $(this).html($(this).html().replace(/&gt;/g , "</strong>"));
    });

    $(".tab-pane ul li:contains(" + LANGUAGE.keywords[gherkinLanguage].given + "), .tab-pane ul li:contains(" + LANGUAGE.keywords[gherkinLanguage].when + "), .tab-pane ul li:contains(" + LANGUAGE.keywords[gherkinLanguage].then + "), .tab-pane ul li:contains(" + LANGUAGE.keywords[gherkinLanguage].but + "), .tab-pane ul li:contains(" + LANGUAGE.keywords[gherkinLanguage].and + ")").each(function () {
      $(this).addClass('cs-feature-steps');

    });
  });
});
