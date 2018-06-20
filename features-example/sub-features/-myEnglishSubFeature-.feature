# language: en
# encoding: utf-8
@smokeTest
Feature: This is a feature of a sub diretory
This a little description of a sub diretory.

Background: This is a background of a sub diretory

@I'm a beatifull tag @I'm a beatifull tag too
Scenario: This is a Scenario and this is a simple teste @test
Given This is a given step of a sub diretory
When This is a when step of a sub diretory
And This is a and step of a sub diretory
And Some fix @fix
And add <myparameter1> and my <myparameter2>
But This is a but step of a sub diretory
Then This is a then step of a sub diretory

Scenario Outline: This is Scenario Outline of a sub diretory

Examples: This is a example a of sub diretory
  | start | eat | left |
  |  12   |  5  |  7   |
