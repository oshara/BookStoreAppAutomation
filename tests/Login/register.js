import { test } from '@playwright/test';
import { HomePage } from '../../pages/home';
import { BookStoreLoginPage } from '../../pages/book_Store_Login';

export const register = () => {

    test('Verify user can create a user account successfully',async ({ page }) => {

        const Home = new HomePage(page);
        const BookStoreLogin= new BookStoreLoginPage(page);

        await Home.gotoHomePage();
        await Home.clickBookAppBtn();
        await BookStoreLogin.clickLoginMenu();
        await BookStoreLogin.clickNewUserButton();
        await BookStoreLogin.fillNewUserDetails('Sam','Smith','sam','Sam@1234');
        
     

    })
}