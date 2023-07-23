exports.HomePage = class HomePage{

    constructor(page){
        this.page=page;
        this.bookApplicationBtn= page.locator('//div[@class="category-cards"]/div[6]')
    }

    async gotoHomePage(){
        await this.page.goto('https://demoqa.com./');
    }

    async clickBookAppBtn(){
        await this.bookApplicationBtn.click();
    }
}