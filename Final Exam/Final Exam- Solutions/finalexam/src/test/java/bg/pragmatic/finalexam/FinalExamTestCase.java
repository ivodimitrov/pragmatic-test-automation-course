package bg.pragmatic.finalexam;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;


public class FinalExamTestCase {

	WebDriver driver;
	
	@Before
	public void deleteExistingProduct(){
		driver = new FirefoxDriver();
		driver.get("http://shop.pragmatic.bg/admin");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		//lets login into admin backend
		WebElement usernameField = driver.findElement(By.name("username"));
		usernameField.sendKeys("admin");
		
		WebElement passwordField = driver.findElement(By.name("password"));
		passwordField.sendKeys("parola");
		
		WebElement loginButton = driver.findElement(By.linkText("Login"));
		loginButton.click();
	}
	
	@Test
	public void createProduct(){
		//lets first search for our product with name "MilenStrahinskiProduct" to check if it already exists 
		WebElement catalogMenu = driver.findElement(By.xpath("//li[@id='catalog']//a[@class='top']"));
		catalogMenu.click();
		
		WebElement productsMenu = driver.findElement(By.linkText("Products"));
		productsMenu.click();
		
		driver.findElement(By.name("filter_name")).sendKeys("MilenStrahinskiProduct");
		WebElement filterButton = driver.findElement(By.linkText("Filter"));
		filterButton.click();
		
		//checking if there was a result that contains(if it exists) my product or not, so I'll know if I have to delete it or not
		boolean exists = driver.findElements(By.xpath("//table[@class='list']/tbody/tr[2]/td[3]")).size() != 0;
		
		// if it exists I will have to DELETE it first before I try to create it.
		if(exists) {
			WebElement selectionCheckbox = driver.findElement(By.name("selected[]"));
			selectionCheckbox.click();
			
			WebElement deleteButton = driver.findElement(By.linkText("Delete"));
			deleteButton.click();
			
			Alert alert = driver.switchTo().alert();
			alert.accept();
			
			WebElement successMessage = driver.findElement(By.className("success"));
			Assert.assertEquals("For some reason we didn't saw success message for DELETION of the product, which means the product is not deleted", "Success: You have modified products!", successMessage.getText());
		}
		
		// starting product CREATION
		driver.findElement(By.linkText("Insert")).click();
		WebElement productNameField = driver.findElement(By.name("product_description[1][name]"));
		productNameField.sendKeys("MilenStrahinskiProduct");
		
		WebElement dataSubMenu = driver.findElement(By.linkText("Data"));
		dataSubMenu.click();
		
		WebElement modelField = driver.findElement(By.name("model"));
		modelField.sendKeys("MilenStrahinskiModel");
		
		WebElement saveButton = driver.findElement(By.linkText("Save"));
		saveButton.click();
		
		WebElement successMessage = driver.findElement(By.className("success"));
		Assert.assertEquals("For some reason we didn't saw success message, which means the product is not created", "Success: You have modified products!", successMessage.getText());
	}
	
	
	@Test
	public void alternativeImplementationCreateProduct(){
		//lets first search for our product with name "MilenStrahinskiProduct" to check if it already exists 
		WebElement catalogMenu = driver.findElement(By.xpath("//li[@id='catalog']//a[@class='top']"));
		catalogMenu.click();
		
		WebElement productsMenu = driver.findElement(By.linkText("Products"));
		productsMenu.click();
		
		driver.findElement(By.name("filter_name")).sendKeys("MilenStrahinskiProduct");
		WebElement filterButton = driver.findElement(By.linkText("Filter"));
		filterButton.click();
		
		//checking if there was a result that contains(if it exists) my product or not, so I'll know if I have to delete it or not
		
		WebElement simpleTable = driver.findElement(By.className("list"));
		
		//Get all rows
		List<WebElement> rows = simpleTable.findElements(By.tagName("tr"));
		
		//find and delete the row where it says the name of my product
		for (WebElement row : rows) {
			List<WebElement> cols = row.findElements(By.tagName("td"));
			for (WebElement col : cols) {
				if(col.getText().equals("MilenStrahinskiProduct")){
					row.findElement(By.name("selected[]")).click();
					driver.findElement(By.linkText("Delete")).click();
					
					Alert alert = driver.switchTo().alert();
					alert.accept();
					
					WebElement successMessage = driver.findElement(By.className("success"));
					Assert.assertEquals("For some reason we didn't saw success message for DELETION of the product, which means the product is not deleted", "Success: You have modified products!", successMessage.getText());
					break;
				}
			}
		}
		
		
		// starting product CREATION
		driver.findElement(By.linkText("Insert")).click();
		WebElement productNameField = driver.findElement(By.name("product_description[1][name]"));
		productNameField.sendKeys("MilenStrahinskiProduct");
		
		WebElement dataSubMenu = driver.findElement(By.linkText("Data"));
		dataSubMenu.click();
		
		WebElement modelField = driver.findElement(By.name("model"));
		modelField.sendKeys("MilenStrahinskiModel");
		
		WebElement saveButton = driver.findElement(By.linkText("Save"));
		saveButton.click();
		
		WebElement successMessage = driver.findElement(By.className("success"));
		Assert.assertEquals("For some reason we didn't saw success message, which means the product is not created", "Success: You have modified products!", successMessage.getText());
	}
	
	@After
	public void tearDown(){
		driver.quit();
	}
}
