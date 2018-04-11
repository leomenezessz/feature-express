let contentFeaturesFiles = { 'example.feature':
[ 'Feature: This is a feature',
  'This a little description.',
  '',
  'Background: This is a background',
  '',
  '@I\'m a beatifull tag',
  'Scenario: This is a Scenario',
  'Given This a given step',
  'When This is a when step',
  'Then This is a then step',
  'And This is a and step',
  'But This is a but step',
  '',
  'Scenario Outline: This is Scenario Outline',
  '',
  'Examples: This is a example',
  '  | start | eat | left |',
  '  |  12   |  5  |  7   |',
  '' ],
'example2.feature':
[ 'Feature: Example 2 Feature',
  '',
  'Scenario: Example Scenario 2',
  'Given this is a given step for example 2',
  'When this is a when step for example 2',
  'Then this is a then step for example 2' ] }

  module.exports = contentFeaturesFiles;