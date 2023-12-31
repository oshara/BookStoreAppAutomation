const { expect } = require("@playwright/test");

exports.BookStoreLoginPage = class BookStoreLoginPage{

    constructor(page){
        this.page=page;
        this.loginMenu=page.locator('(//div[@class="element-list collapse show"]/ul/li)[1]');
        this.newUserBtn=page.locator('#newUser');
        this.firstName=page.locator('#firstname');
        this.lastName= page.locator('#lastname');
        this.userName=page.locator('#userName');
        this.password=page.locator('#password');
        // added a frameLocator to get a locator inside of a iframe
        this.recaptcha= page.frameLocator('iframe[title="reCAPTCHA"]').locator('(//div[@class="rc-anchor-center-item rc-anchor-checkbox-holder"]/span/div)[1]');
        this.registerBtn= page.locator('#register');

        this.userNameBtn=page.locator('#userName');
        this.userPassword= page.locator('#password');
        this.loginBtn= page.locator('#login');

        this.userLabel = page.locator('#userName-value');
        
    }

    async clickLoginMenu(){
        await this.loginMenu.click();
    }

    async clickNewUserButton(){
        await this.newUserBtn.click();
    }

    async fillNewUserDetails(fName,lName,userName,password){
        await this.firstName.fill(fName);
        await this.lastName.fill(lName);
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.recaptcha.click();
        await this.registerBtn.click();
    }

    async loginToBookStore(userName,password){
        await this.userNameBtn.fill(userName);
        await this.userPassword.fill(password);
        await this.loginBtn.click();
        
        await this.userLabel.click();
       
       
      expect(this.userLabel).toContainText(userName);
      
    }

}