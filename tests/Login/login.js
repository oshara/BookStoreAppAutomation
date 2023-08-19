import { test } from '@playwright/test';
import { HomePage } from '../../pages/home';
import { BookStoreLoginPage } from '../../pages/book_Store_Login';

export const login = () => {

    test('Verify user can login to  user account successfully',async ({ page }) => {

        const Home = new HomePage(page);
        const BookStoreLogin= new BookStoreLoginPage(page);

        await Home.gotoHomePage();
        await Home.clickBookAppBtn();
        await BookStoreLogin.loginToBookStore("sam","Sam@1234");
     

    })
}