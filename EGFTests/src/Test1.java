import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.junit.Test;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.After;
import static org.junit.Assert.*;

import java.util.UUID;



public class Test1 {

	// Webdriver instance
	private WebDriver driver;

	// URLS for all pages on website
	String homePage = "http://localhost:3000/";
	String schoolPage = "http://localhost:3000/schoolprofile";
	String newsPage = "http://localhost:3000/news";
	String eventsPage = "http://localhost:3000/events";
	String videoPage = "http://localhost:3000/video";
	String loginPage = "http://localhost:3000/joinegf";
	String tournamentsPage = "http://localhost:3000/tournaments";
	
	private String randomEmailScript() {
		// TODO Auto-generated method stub
		return "random-" + UUID.randomUUID().toString() + "@example.com";
	}
	public void signupFormScript(String Name, String Username, String Password, String confirmPassword){
		driver.navigate().to(loginPage);

		String Email = randomEmailScript();

		WebElement nameBox = driver.findElement(By.name("name"));
		nameBox.sendKeys(Name);

		WebElement emailBox = driver.findElement(By.name("email"));
		emailBox.sendKeys(Email);

		WebElement usernameBox = driver.findElement(By.name("username"));
		usernameBox.sendKeys(Username);

		WebElement passwordBox = driver.findElement(By.name("password"));
		passwordBox.sendKeys(Password);

		WebElement confirmPasswordBox = driver.findElement(By.name("confirmpassword"));
		confirmPasswordBox.sendKeys(confirmPassword);

		driver.findElement(By.className("submitButton")).click();
	}
	
	public void loginFormScript(String Username, String Password) {
		WebElement nameBox = driver.findElement(By.name("username"));
		nameBox.sendKeys(Username);
		
		WebElement passwordBox = driver.findElement(By.name("password"));
		passwordBox.sendKeys(Password);
		
		driver.findElement(By.className("submitButton")).click();
		
		
	}
	
	@Before
	public void setUp() {
		// Setting up the chromedriver
		String chromeDriverLocation = "/Users/chris/Desktop/chromedriver";
		System.setProperty("webdriver.chrome.driver",chromeDriverLocation);
		driver = new ChromeDriver();
	}

	@After
	public void tearDown() {
//		driver.quit();
	}
	
	@Ignore @Test
	public void TitleTest()  {
		// Go to the EGF Website Homepage
		driver.navigate().to(homePage);

		// Get the title of the page
		String title = driver.getTitle();

		// Return true if the title is EGF
		assertTrue(title.contains("EGF"));
	}
	@Ignore @Test
	public void schoolPageURLTest() {

		// Go to homepage
		driver.navigate().to(homePage);

		// xPath of school button
		String school = "//*[@id=\"HeaderNav\"]/nav/div/div[2]/ul[2]/li[1]/a";

		// click school button 
		driver.findElement(By.xpath(school)).click(); 

		// get current URL
		String currentURL = driver.getCurrentUrl();

		// check if current url matches school page url
		assertEquals(currentURL,schoolPage);
	}
	@Ignore @Test
	public void newsPageURLTest() {
		driver.navigate().to(homePage);

		// xPath of news button
		String news = "//*[@id=\"HeaderNav\"]/nav/div/div[2]/ul[2]/li[2]/a";

		// click news button
		driver.findElement(By.xpath(news)).click(); 

		String currentURL = driver.getCurrentUrl();

		// check if current url matches news page url.
		assertEquals(currentURL,newsPage);
	}
	@Ignore @Test
	public void eventsPageURLTest() {
		driver.navigate().to(homePage);

		// xPath of events button
		String events = "//*[@id=\"HeaderNav\"]/nav/div/div[2]/ul[2]/li[3]/a";

		// click events button
		driver.findElement(By.xpath(events)).click(); 

		// get current url
		String currentURL = driver.getCurrentUrl();

		// Check if current url is equal to events page
		assertEquals(currentURL,eventsPage);
	}
	@Ignore @Test
	public void videoPageURLTest() {
		driver.navigate().to(homePage);

		// xPath of video button
		String video = "//*[@id=\"HeaderNav\"]/nav/div/div[2]/ul[2]/li[4]/a";

		// click video button
		driver.findElement(By.xpath(video)).click(); 

		// get current url
		String currentURL = driver.getCurrentUrl();

		// check if url matches video page url
		assertEquals(currentURL,videoPage);
	}
	@Ignore @Test
	public void loginPageURLTest() {
		driver.navigate().to(homePage);

		// xPath of login button
		String login = "//*[@id=\"HeaderNav\"]/nav/div/div[2]/ul[1]/li/a";

		// click login button
		driver.findElement(By.xpath(login)).click(); 

		// get current url
		String currentURL = driver.getCurrentUrl();

		// check if url matches login page url
		assertEquals(currentURL,loginPage);
	}
	@Ignore @Test
	public void tournamentPageURLTest() {
		driver.navigate().to(homePage);

		// xPath of college button
		String college = "//*[@id=\"basic-nav-dropdown\"]";

		// xPath of tournaments button under college drop down options
		String tournaments = "//*[@id=\"HeaderNav\"]/nav/div/div[2]/ul[3]/li/ul/li[1]/a";

		// click college button and then click the tournaments subheading
		driver.findElement(By.xpath(college)).click(); 
		driver.findElement(By.xpath(tournaments)).click(); 

		// get the current url
		String currentURL = driver.getCurrentUrl();

		// check if url matches tournaments page url
		assertEquals(currentURL,tournamentsPage);
	}

	@Test
	public void LoginFormTest()  {
		signupFormScript("John Doe", "JohnDoeTestAccount", "qwerty123", "qwerty123");

	}










}
