package com.bdd.BDDFundTransfer;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FundTransferStepDefs {

	private static WebDriver driver;

	@Before
	public void setup() {
		System.setProperty("webdriver.chrome.driver", "C:\\Program Files (x86)\\Google\\Chrome\\chromedriver.exe");
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--start-maximized", "--disable-extensions");
		driver = new ChromeDriver(options);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@Given("^the user is on Fund Transfer Page$")
	public void the_user_is_on_Fund_Transfer_Page() throws Throwable {
		driver.get("https://dl.dropboxusercontent.com/u/55228056/fundTransfer.html");
	}

	@When("^he enters \"([^\"]*)\" as payee name$")
	public void he_enters_as_payee_name(String payeeName) throws Throwable {
		WebElement payeeElement = driver.findElement(By.id("payee"));
		Select payeeDropDown = new Select(payeeElement);
		payeeDropDown.selectByVisibleText(payeeName);
	}

	@When("^he enters \"([^\"]*)\" as amount$")
	public void he_enters_as_amount(String amount) throws Throwable {
		WebElement amountField = driver.findElement(By.id("amount"));
		amountField.sendKeys(amount);
	}

	@When("^he Submits request for Fund Transfer$")
	public void he_Submits_request_for_Fund_Transfer() throws Throwable {
		WebElement transferButton = driver.findElement(By.id("transfer"));
		transferButton.click();
	}

	@Then("^ensure the fund transfer is complete with \"([^\"]*)\" message$")
	public void ensure_the_fund_transfer_is_complete_with_message(String expectedSuccessMessage) throws Throwable {
		WebElement resultMessage = driver.findElement(By.id("message"));

		String actualSuccessMessage = resultMessage.getText();

		Assert.assertEquals("The bank is not working", expectedSuccessMessage, actualSuccessMessage);
	}

	@Then("^ensure a transaction failure message \"([^\"]*)\" is displayed$")
	public void ensure_a_transaction_failure_message_is_displayed(String expectedFailureMessage) throws Throwable {
		WebElement resultMessage = driver.findElement(By.id("message"));
		String actualFailureMessage = resultMessage.getText();
		Assert.assertEquals("It allowed him to transfer the money, no matter he does not have eno",
				expectedFailureMessage, actualFailureMessage);

	}

	@After
	public void tearDown() {
		driver.quit();
	}

}
