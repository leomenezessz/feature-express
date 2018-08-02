const expect = require('chai').expect;

const localeHandler = require('../lib/locale-handler');

describe("Locale handler tests", () => {
  it("Should get default value when language is not valid", () => {
    const invalidLanguage = 'NOT_EXISTING_LANGUAGE';

    const result = localeHandler.getValidLanguage(invalidLanguage);

    expect(result).to.be.equal('en');
  });

  it('Should return same lang passed when lang is valid', () => {
    const validLanguage = 'pt';

    const result = localeHandler.getValidLanguage(validLanguage);

    expect(result).to.be.equal('pt');
  });
});
