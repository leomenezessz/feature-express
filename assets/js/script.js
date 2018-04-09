const  LANGUAGE = {
  portuguese: 'pt',
  english: 'en',
  keywords: {
    pt: {feature: 'Funcionalidade:', scenario: 'Cenário:', background: 'Contexto:', examples: 'Exemplo:', but: 'Mas ',
      given : 'Dado ', when :'Quando ', then : 'Então ', and : 'E ' , scenario_outline : 'scenario_outline'
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
  //  $(this).html($(this).html().replace(/@/, "<strong style='margin-left: -20px'>@</strong>"));
    $(this).html($(this).html().replace(/\|/g, "<strong>|</strong>"));
    $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].feature, "<strong>"+ LANGUAGE.keywords[gherkinLanguage].feature +"</strong>"));
    $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].background, "<strong>"+ LANGUAGE.keywords[gherkinLanguage].background + "</strong>"));
    $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].examples, "<strong>" + LANGUAGE.keywords[gherkinLanguage].examples +  "</strong>"));
    $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].scenario_outline, "<strong>" + LANGUAGE.keywords[gherkinLanguage].scenario_outline +  "</strong>"));
    $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].scenario, "<strong>" + LANGUAGE.keywords[gherkinLanguage].scenario + "</strong>"));
    $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].given, "<strong>"+ LANGUAGE.keywords[gherkinLanguage].given +  "</strong>"));
    $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].when, "<strong>"+ LANGUAGE.keywords[gherkinLanguage].when +  "</strong>"));
    $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].but, "<strong>" + LANGUAGE.keywords[gherkinLanguage].then +  "</strong>"));
    $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].then, "<strong>"+ LANGUAGE.keywords[gherkinLanguage].but + "</strong>"));
    $(this).html($(this).html().replace(LANGUAGE.keywords[gherkinLanguage].and, "<strong>"+ LANGUAGE.keywords[gherkinLanguage].and + "</strong>"));
  });

  // Add CSS Classes
  $(function() {
    $(".tab-pane ul li:contains("+ LANGUAGE.keywords[gherkinLanguage].feature +")").each(function(){
      $(this).addClass('cs-feature-title');
    });
    $(".tab-pane ul li:contains(@)").each(function(){
      $(this).addClass('cs-feature-tag');
    });
    $(".tab-pane ul li:contains("+ LANGUAGE.keywords[gherkinLanguage].scenario +"), .tab-pane ul li:contains("+ LANGUAGE.keywords[gherkinLanguage].background +"), .tab-pane ul li:contains("+ LANGUAGE.keywords[gherkinLanguage].examples +"), .tab-pane ul li:contains("+ LANGUAGE.keywords[gherkinLanguage].scenario_outline +")").each(function(){
      $(this).addClass('cs-feature-others');
    });
  });

});


//
