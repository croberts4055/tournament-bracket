package EGFTesting;
import java.util.Random;
import java.util.UUID;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class MasterHelper {

	// Webdriver instance
	public WebDriver driver;

	//Random instance
	Random random = new Random();

	// URLS for all pages on website
	String homeURL = "http://localhost:3000/";
	String schoolURL = "http://localhost:3000/schoolprofile";
	String newsURL = "http://localhost:3000/news";
	String eventsURL = "http://localhost:3000/events";
	String videoURL = "http://localhost:3000/video";
	String loginURL = "http://localhost:3000/joinegf";
	String tournamentsURL = "http://localhost:3000/tournaments";

	// xPaths for buttons and links.
	String mediaRadioButton = "//*[@id=\"root\"]/div/div/div[2]/div/div[1]/div[3]/div/div/label/input";
	String collegeRadioButton = "//*[@id=\"root\"]/div/div/div[2]/div/div[1]/div[2]/div/div/label/input";
	String highschoolRadioButton = "//*[@id=\"root\"]/div/div/div[2]/div/div[1]/div[1]/div/div/label/input";

	String randomNames[] = {
			// Array of 50 random Names
			"Analisa Silber","Armida Winland" ,	"Beatris Christie","Beckie Pasillas","Brenda Banister",
			"Caroyln Feaster","Chasity Bruns",	"Deanne Tewell","Demetria Mclelland","Diane Morrissette",
			"Elizabeth Fetterolf","Evangeline Dunmore","Evelyne Sundquist","Felipe Lambdin","Garnet Albright",
			"Irish Quinto","Jeraldine Salamanca","Katlyn Alm","Kisha Cather","Latanya Castorena",
			"Leigha Lunde","Lila Franceschi","Lourdes Hynd","Lulu Rivas","Marcie Trogdon",
			"Marcy Mitten","Margorie Linson","Marva Narvaez","Micki Mullens","Monnie Tumlinson",
			"Monte Alcazar","Novella Kirsch","Peggy Kantner","Phyllis Rozman","Pierre Edelson",
			"Rocio Gibbs","Rodrick Hoffer","Ruthe Switzer","Sabrina Kellog","Santa Defrank",
			"Sherley Weiss","Sonya Wolfgang","Tamie Mattie","Tanja Nunemaker","Theodora Davison",
			"Theodore Mongold","Tyisha Ruggiero","Usha Favors","Vanesa Woolley","Wonda Despres"	
	};
	public int randNum1() {
		// Returns a number between 0 (inclusive) and 50 (exclusive); Returns 0-49

		int high = 50;
		int low = 0;
		int randomNumber = random.nextInt(high-low) +low;
		return randomNumber;
	}

	public String randNum2() {
		// Returns a number between 0 (inclusive) and 1,000,000 (exclusive) and then turns it into a String.

		int high = 1000000;
		int low = 0;
		int num = random.nextInt(high-low) +low;
		String randomNumber = Integer.toString(num);
		return randomNumber;
	}

	private String randomEmail() {
		// Returns a random email made from a Universally Unique Identifier (UUID)
		return "random-" + UUID.randomUUID().toString() + "@example.com";
	}

	public void signInUser(String username, String password) {
		driver.get(loginURL);

		driver.findElement(By.className("switchButton")).click();

		// Web Element is created for the name box on the login page.
		WebElement nameBox = driver.findElement(By.name("username"));

		// Name created above is typed into name box.
		nameBox.sendKeys(username);

		// Web Element is created for the password box on the login page.
		WebElement passwordBox = driver.findElement(By.name("password"));

		// Password created above is typed into name box.
		passwordBox.sendKeys(password);

		// Click the submit button
		driver.findElement(By.className("submitButton")).click();

	}
	public void createRandomUser(char communityChoice) {

		/* Automates the process of creating a new user.
		 * Enter community choice as a char to create an account.
		 *  Community choices: h = highschool, m = media, c = college */

		// Go to account creation page.
		driver.get(loginURL);

		// User's name comes from randomNames()
		String Name = randomNames[randNum1()];

		// User's email comes from randomEmail().
		String Email = randomEmail();

		// User's username is full name + random Number
		String Username = Name.replaceAll("\\s+","") + "+" + randNum2();

		String Password = "qwerty123";
		String ConfirmPassword = "qwerty123";

		// Switch between Community choices: h = highschool, m = media, c = college
		switch(communityChoice) {
		case 'h':
			driver.findElement(By.xpath(highschoolRadioButton)).click();
		case 'm': 
			driver.findElement(By.xpath(mediaRadioButton)).click();
			break;
		case 'c':
			driver.findElement(By.xpath(collegeRadioButton)).click();
			break;
		default:
			driver.findElement(By.xpath(highschoolRadioButton)).click();
			break;
		}

		// Web Element is created for the name box on the login page.
		WebElement nameBox = driver.findElement(By.name("name"));

		// Name created above is typed into name box.
		nameBox.sendKeys(Name);

		WebElement emailBox = driver.findElement(By.name("email"));
		emailBox.sendKeys(Email);

		WebElement usernameBox = driver.findElement(By.name("username"));
		usernameBox.sendKeys(Username);

		WebElement passwordBox = driver.findElement(By.name("password"));
		passwordBox.sendKeys(Password);

		WebElement confirmPasswordBox = driver.findElement(By.name("confirmpassword"));
		confirmPasswordBox.sendKeys(ConfirmPassword);
	
		// Click the submit button
		driver.findElement(By.className("submitButton")).click();
	}
}
