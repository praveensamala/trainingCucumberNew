package com.cucumber.runner;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitions
{
	WebDriver driver;

	@Given("^that the facebook web application is available$")
	public void that_the_facebook_web_application_is_available() throws Throwable {
		System.out.println("user dir : "+System.getProperty("user.dir"));
		System.setProperty("webdriver.chrome.driver","chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.facebook.com");
		driver.manage().window().maximize();
	}

	//@When("^I try to login using userid and password$")
	@When("^I try to login using \"([^\"]*)\" and \"([^\"]*)\"$")
	//public void i_try_to_login_using_userid_and_password() throws Throwable {
	public void i_try_to_login_using_and(String arg1, String arg2) throws Throwable {
		driver.findElement(By.id("email")).sendKeys(arg1);
		driver.findElement(By.id("pass")).sendKeys(arg2);
		driver.findElement(By.id("loginbutton")).click();
	}
	
	@Then("^I should be able to login to the application$")
	public void i_should_be_able_to_login_to_the_application() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.elementToBeClickable(By.cssSelector("button[type=\"submit\"]")));
		
		System.out.println("title : "+driver.getTitle());
		
		
		List <WebElement> list = new ArrayList<WebElement>();
		list = driver.findElements(By.tagName("span"));
		//System.out.println("list size : "+list.size());
		
		boolean userfound = false;
		for(WebElement e: list) {
			//System.out.println(e.getText());
			if (e.getText().contains("Gamecheck") && !e.getText().contains("Not you") && !e.getText().contains("Log in as")) {
				userfound = true;
				userfound = true;
				break;
			}
		}
		
		Assert.assertTrue(userfound);
	}
	
	@After
	public void exitprogram() {
		driver.quit();
	}
}
