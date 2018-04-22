package com.cucumber.runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= "featureslist", glue= {"com.cucumber.runner"}, plugin={"html:target/cucumber-html-report"})
public class TestRunner
{

}
