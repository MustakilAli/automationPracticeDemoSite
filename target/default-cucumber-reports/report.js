$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/prestashop/features/account/login_page_message_validation.feature");
formatter.feature({
  "name": "Error messages on the login page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Invalid email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ahmed"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user tries to register an invalid email",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.the_user_tries_to_register_an_invalid_email()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the system should display error message \"Invalid email address.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.the_system_should_display_error_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "blank email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ahmed"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user tries to register blank email",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.the_user_tries_to_register_blank_email()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the system should display error message \"Invalid email address.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.the_system_should_display_error_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "multiple logins",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ahmed"
    }
  ]
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user clicks on submit button",
  "keyword": "And "
});
formatter.step({
  "name": "the user should be logged in",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "kamal@fr.com",
        "lalala"
      ]
    },
    {
      "cells": [
        "ahmed@trk.com",
        "blabla"
      ]
    }
  ]
});
formatter.scenario({
  "name": "multiple logins",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ahmed"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"kamal@fr.com\" and \"lalala\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user clicks on submit button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user should be logged in",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "multiple logins",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ahmed"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"ahmed@trk.com\" and \"blabla\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user clicks on submit button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user should be logged in",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});