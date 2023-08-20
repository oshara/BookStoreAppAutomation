const { expect } = require("@playwright/test");

exports.BookStorePage= class BookStorePage{

    constructor(page){
        this.page=page;

        this.bookStoreBtn= page.locator('(//div[@class="element-list collapse show"]/ul/li)[2]');
        this.searchBox= page.locator('#searchBox');
        this.clickBook= page.locator('(//div[@class="ReactTable -striped -highlight"])/div[1]/div[2]/div[1]/div/div[2]/div');
        this.titleOfBook= page.locator('(//div[@class="profile-wrapper"])/div[2]/div[2]');
    }


    async searchingBook(bookName){
       
        await this.bookStoreBtn.click();
        await this.searchBox.fill(bookName);
        await this.clickBook.click();
        await this.titleOfBook.click();
        await expect(this.titleOfBook).toContainText(bookName);
    }
}