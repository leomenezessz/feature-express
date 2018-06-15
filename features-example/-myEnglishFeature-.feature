# language: en
# encoding: utf-8
@smokeTest
Feature: This is a feature
This a little description.

Background: This is a background

@I'm a beatifull tag @I'm a beatifull tag too
Scenario: This is a Scenario and this is a simple teste @test
Given This is a given step
When This is a when step
And This is a and step
And Some fix @fix
And add <myparameter1> and my <myparameter2>
But This is a but step
Then This is a then step

Scenario Outline: This is Scenario Outline

Examples: This is a example
  | start | eat | left |
  |  12   |  5  |  7   |
