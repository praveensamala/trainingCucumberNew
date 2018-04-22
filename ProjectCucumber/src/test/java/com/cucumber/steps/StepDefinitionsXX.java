package com.cucumber.steps;

import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitionsXX
{
	WebDriver driver;
	
	@BeforeClass
	public void setup() {
		System.out.println("***** testing *****");
		System.setProperty("webdriver.chrome.driver","G:\\chromedriver.exe");
		driver = new ChromeDriver();	
	}
	
	@Given("^that the application is available$")
	public void that_the_application_is_available() throws Throwable {
		System.out.println("***** testing2 *****");
		driver.get("https://www.yahoo.com");
	}

	@When("^I try to login$")
	public void i_try_to_login() throws Throwable {
		driver.manage().window().maximize();
	}

	@Then("^I should be able to login to the application$")
	public void i_should_be_able_to_login_to_the_application() throws Throwable {
		System.out.println("title : "+driver.getTitle());
	}
}
