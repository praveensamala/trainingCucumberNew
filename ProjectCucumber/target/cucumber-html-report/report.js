$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("applogin1.feature");
formatter.feature({
  "line": 1,
  "name": "login feature of the application",
  "description": "",
  "id": "login-feature-of-the-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Should be able to login to facebook application with valid user credentials",
  "description": "",
  "id": "login-feature-of-the-application;should-be-able-to-login-to-facebook-application-with-valid-user-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "that the facebook web application is available",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I try to login using \"\u003cusername\u003e\" and \"password\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should be able to login to the application",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "login-feature-of-the-application;should-be-able-to-login-to-facebook-application-with-valid-user-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "login-feature-of-the-application;should-be-able-to-login-to-facebook-application-with-valid-user-credentials;;1"
    },
    {
      "cells": [
        "gamecheck280@gmail.com",
        "system123"
      ],
      "line": 10,
      "id": "login-feature-of-the-application;should-be-able-to-login-to-facebook-application-with-valid-user-credentials;;2"
    },
    {
      "cells": [
        "gamecheck380@gmail.com",
        "system123"
      ],
      "line": 11,
      "id": "login-feature-of-the-application;should-be-able-to-login-to-facebook-application-with-valid-user-credentials;;3"
    },
    {
      "cells": [
        "gamecheck480@gmail.com",
        "system123"
      ],
      "line": 12,
      "id": "login-feature-of-the-application;should-be-able-to-login-to-facebook-application-with-valid-user-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Should be able to login to facebook application with valid user credentials",
  "description": "",
  "id": "login-feature-of-the-application;should-be-able-to-login-to-facebook-application-with-valid-user-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "that the facebook web application is available",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I try to login using \"gamecheck280@gmail.com\" and \"password\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should be able to login to the application",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_the_facebook_web_application_is_available()"
});
formatter.result({
  "duration": 11121397179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gamecheck280@gmail.com",
      "offset": 22
    },
    {
      "val": "password",
      "offset": 51
    }
  ],
  "location": "StepDefinitions.i_try_to_login_using_and(String,String)"
});
formatter.result({
  "duration": 2465955255,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_should_be_able_to_login_to_the_application()"
});
formatter.result({
  "duration": 441285728,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.cucumber.runner.StepDefinitions.i_should_be_able_to_login_to_the_application(StepDefinitions.java:63)\r\n\tat ✽.Then I should be able to login to the application(applogin1.feature:6)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 736274846,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Should be able to login to facebook application with valid user credentials",
  "description": "",
  "id": "login-feature-of-the-application;should-be-able-to-login-to-facebook-application-with-valid-user-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "that the facebook web application is available",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I try to login using \"gamecheck380@gmail.com\" and \"password\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should be able to login to the application",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_the_facebook_web_application_is_available()"
});
formatter.result({
  "duration": 9582789185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gamecheck380@gmail.com",
      "offset": 22
    },
    {
      "val": "password",
      "offset": 51
    }
  ],
  "location": "StepDefinitions.i_try_to_login_using_and(String,String)"
});
formatter.result({
  "duration": 1676820903,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_should_be_able_to_login_to_the_application()"
});
formatter.result({
  "duration": 324267735,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.cucumber.runner.StepDefinitions.i_should_be_able_to_login_to_the_application(StepDefinitions.java:63)\r\n\tat ✽.Then I should be able to login to the application(applogin1.feature:6)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 807627515,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Should be able to login to facebook application with valid user credentials",
  "description": "",
  "id": "login-feature-of-the-application;should-be-able-to-login-to-facebook-application-with-valid-user-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "that the facebook web application is available",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I try to login using \"gamecheck480@gmail.com\" and \"password\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should be able to login to the application",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_the_facebook_web_application_is_available()"
});
formatter.result({
  "duration": 7205929143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gamecheck480@gmail.com",
      "offset": 22
    },
    {
      "val": "password",
      "offset": 51
    }
  ],
  "location": "StepDefinitions.i_try_to_login_using_and(String,String)"
});
formatter.result({
  "duration": 1713520188,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_should_be_able_to_login_to_the_application()"
});
formatter.result({
  "duration": 321379868,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.cucumber.runner.StepDefinitions.i_should_be_able_to_login_to_the_application(StepDefinitions.java:63)\r\n\tat ✽.Then I should be able to login to the application(applogin1.feature:6)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 739995101,
  "status": "passed"
});
});