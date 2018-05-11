package com.cucumber.runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= "featureslist", 
		glue= {"com.cucumber.runner"}, 
		plugin={"html:reports/cucumber-html-report.html"}
		//plugin={"json:reports/cucumber-json-report.json"}
		//plugin={"pretty:reports/cucumber-pretty-report.jtxt"}
		//plugin= {"usage:reports/cucumber-usage-report.json"}
		//plugin= {"junit:reports/cucumber-junit-report.xml"},
		//dryRun=false,
		//monochrome=true
		)
public class TestRunner
{

}
