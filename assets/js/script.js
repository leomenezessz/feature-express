const  LANGUAGE = {
  portuguese: 'pt',
  english: 'en',
  keywords: {
    pt: {feature: 'Funcionalidade:', scenario: 'Cenário:', background: 'Contexto:', examples: 'Exemplo:', but: 'Mas ', 
      given : 'Dado ', when :'Quando ', then : 'Então ', and : 'E ' , scenario_outline : ''
  },
    en: {feature: 'Feature:', scenario: 'Scenario:', background: 'Background:', examples: 'Exemples:', but: 'But ', 
    given : 'Given ', when :'When ', then : 'Then ', and : 'And ', scenario_outline : 'Scenario Outline:'},
  }
};

$(document).ready(function() {
  $('#myList a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  });
    $('.tab-pane ul li').each(function() {
      $(this).html($(this).html().replace(/\"/g, "<strong>\"</strong>"));
      $(this).html($(this).html().replace(/@/, "<strong style='margin-left: -20px'>@</strong>"));
      $(this).html($(this).html().replace(/\|/g, "<strong>|</strong>"));
      $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].feature, "<strong style='margin-left: -20px'>"+ LANGUAGE.keywords[gherkinLanguage].feature +"</strong>"));
      $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].background, "<strong style='margin-left: -20px'>"+ LANGUAGE.keywords[gherkinLanguage].background + "</strong>"));
      $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].examples, "<strong style='margin-left: -20px'>" + LANGUAGE.keywords[gherkinLanguage].examples +  "</strong>"));
      $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].scenario_outline, "<strong style='margin-left: -20px'>" + LANGUAGE.keywords[gherkinLanguage].scenario_outline +  "</strong>"));
      $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].scenario, "<strong style='margin-left: -20px'>" + LANGUAGE.keywords[gherkinLanguage].scenario + "</strong>"));
      $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].given, "<strong>"+ LANGUAGE.keywords[gherkinLanguage].given +  "</strong>"));
      $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].when, "<strong>"+ LANGUAGE.keywords[gherkinLanguage].when +  "</strong>"));
      $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].but, "<strong>" + LANGUAGE.keywords[gherkinLanguage].then +  "</strong>"));
      $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].then, "<strong>"+ LANGUAGE.keywords[gherkinLanguage].but + "</strong>"));
      $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].and, "<strong>"+ LANGUAGE.keywords[gherkinLanguage].and + "</strong>"));
    });
});
