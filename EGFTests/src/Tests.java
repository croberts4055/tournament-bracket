import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.junit.Test;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.After;
import static org.junit.Assert.*;

public class Tests extends MasterHelper{

	// Runs before every test.
	@Before
	public void setUp() {

		// Location of the chromedriver on device
		String chromeDriverLocation = "/Users/chris/Desktop/chromedriver";

		// set up driver
		System.setProperty("webdriver.chrome.driver",chromeDriverLocation);

		// driver instance is of type Chrome driver. This opens webpage in chrome. (e.g. if using firefox = FirefoxDriver())
		driver = new ChromeDriver();
	}
	// Runs after every test.
	@After
	public void tearDown() {
		// dispose of the chrome window and driver.
		//		driver.quit();
	}

	@Test
	public void LoginFormTest()  {
		createRandomUser('c');
	}
	@Ignore @Test
	public void TitleTest()  {
		// Go to the EGF Website Homepage
		driver.get(homeURL);

		// Get the title of the page
		String title = driver.getTitle();

		// Return true if the title is EGF
		assertTrue(title.contains("EGF"));
	}
	@Ignore @Test
	public void schoolPageURLTest() {

		// Go to homepage
		driver.get(homeURL);

		// xPath of school button
		String school = "//*[@id=\"HeaderNav\"]/nav/div/div[2]/ul[2]/li[1]/a";

		// click school button 
		driver.findElement(By.xpath(school)).click(); 

		// get current URL
		String currentURL = driver.getCurrentUrl();

		// check if current url matches school page url
		assertEquals(currentURL,schoolURL);
	}
	@Ignore @Test
	public void newsPageURLTest() {
		driver.get(homeURL);

		// xPath of news button
		String news = "//*[@id=\"HeaderNav\"]/nav/div/div[2]/ul[2]/li[2]/a";

		// click news button
		driver.findElement(By.xpath(news)).click(); 

		String currentURL = driver.getCurrentUrl();

		// check if current url matches news page url.
		assertEquals(currentURL,newsURL);
	}
	@Ignore @Test
	public void eventsPageURLTest() {
		driver.get(homeURL);

		// xPath of events button
		String events = "//*[@id=\"HeaderNav\"]/nav/div/div[2]/ul[2]/li[3]/a";

		// click events button
		driver.findElement(By.xpath(events)).click(); 

		// get current url
		String currentURL = driver.getCurrentUrl();

		// Check if current url is equal to events page
		assertEquals(currentURL,eventsURL);
	}
	@Ignore @Test
	public void videoPageURLTest() {
		driver.get(homeURL);

		// xPath of video button
		String video = "//*[@id=\"HeaderNav\"]/nav/div/div[2]/ul[2]/li[4]/a";

		// click video button
		driver.findElement(By.xpath(video)).click(); 

		// get current url
		String currentURL = driver.getCurrentUrl();

		// check if url matches video page url
		assertEquals(currentURL,videoURL);
	}
	@Ignore @Test
	public void loginPageURLTest() {
		driver.get(homeURL);

		// xPath of login button
		String login = "//*[@id=\"HeaderNav\"]/nav/div/div[2]/ul[1]/li/a";

		// click login button
		driver.findElement(By.xpath(login)).click(); 

		// get current url
		String currentURL = driver.getCurrentUrl();

		// check if url matches login page url
		assertEquals(currentURL,loginURL);
	}
	@Ignore @Test
	public void tournamentPageURLTest() {
		driver.get(homeURL);

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
		assertEquals(currentURL,tournamentsURL);
	}
}
