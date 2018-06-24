const locales = require("./locales");

const DEFAULT_LANGUAGE = "en";

function isValidLanguage(language) {
  return Object.keys(locales.LANGUAGES.keywords)
    .includes(language);
}

exports.getValidLanguage = function(language) {
  return isValidLanguage(language)
    ? language
    : DEFAULT_LANGUAGE;
}
