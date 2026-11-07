Feature: The Demos workspace plugin
  Once the plugin is activated and installed, the demos workspace is on the dashboard, and the
  Plugins page lists the plugin with its four steps.

  Scenario: The workspace page is there
    Given I am on "/demos"
     Then I should see "Demos"

  Scenario: The plugin is listed on the Plugins page
    Given I am on "/settings/plugins"
     Then I should see "Demos"
      And I should see "@webship/workspace-demos"
