package bg.pragmatic.datadriven;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

@RunWith(Parameterized.class)
public class SimpleDDT {
	
	private static WebDriver driver;
	private static StringBuffer verificationErrors = new StringBuffer();

	private String height;
	private String weight;
	private String bmi;
	private String bmiCategory;
	
	@Parameters
    public static String[][] testData() {
		String[][] testData = {
				{"160","45","17.6","Underweight"},
				{"168","70","24.8","Normal"},
				{"181","89","27.2","Overweight"},
				{"178","100","31.6","Obesity"},
			};
		
        return testData;
    }
	
	public SimpleDDT(String height, String weight, String bmi, String bmiCategory) {
		this.height = height;
		this.weight = weight;
		this.bmi = bmi;
		this.bmiCategory = bmiCategory;
	}
	
	@BeforeClass
	public static void setUp() throws Exception { 
		// Create a new instance of the Firefox driver
		driver = new FirefoxDriver();
		driver.get("http://dl.dropbox.com/u/55228056/bmicalculator.html");
	}

	@Test
	public void testBMICalculator() throws Exception {
	
		//Get the Height element and set the value using parameterized height variable
		WebElement heightField = driver.findElement(By.name("heightCMS"));
		heightField.clear();
		heightField.sendKeys(this.height);
		
		//Get the Weight element and set the value using parameterized Weight variable
		WebElement weightField = driver.findElement(By.name("weightKg"));
		weightField.clear();
		weightField.sendKeys(this.weight);

		//Click on Calculate Button
		WebElement calculateButton = driver.findElement(By.id("Calculate"));
		calculateButton.click();
		
		try {
			//Get the Bmi element and verify its value using parameterized bmi variable
			WebElement bmiLabel = driver.findElement(By.name("bmi"));
			assertEquals(this.bmi, bmiLabel.getAttribute("value"));
			
			//Get the Bmi Category element and verify its value using parameterized bmiCategory variable
			WebElement bmiCategoryLabel = driver.findElement(By.name("bmi_category"));
			assertEquals(this.bmiCategory,bmiCategoryLabel.getAttribute("value"));
			
		} catch (Error e) {
			//Capture and append Exceptions/Errors
			verificationErrors.append(e.toString());
			System.err.println("Assertion Fail "+ verificationErrors.toString());
		}
	}
	
	@AfterClass
	public static void tearDown() throws Exception {
		//Close the browser
		driver.quit();
		
		String verificationErrorString = verificationErrors.toString();
		if (!"".equals(verificationErrorString)) {
			fail(verificationErrorString);
		}
	}
}
