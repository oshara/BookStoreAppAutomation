import { test } from '@playwright/test';
import { HomePage } from '../../pages/home';

export const register = () => {

    test('Verify user can create a user account successfully',async ({ page }) => {

        const Home = new HomePage(page);

        await Home.gotoHomePage();
        await Home.clickBookAppBtn();
     

    })
}