import {test} from '@playwright/test';
import { HomePage } from '../pages/home';
import { BookStoreLoginPage } from '../pages/book_Store_Login';
import { BookStorePage } from '../pages/bookStore';


export const BookStore= ()=>{

test('Search a book',async({page})=>{

    // const context = await browser.newContext({
    //     storageState: "./auth.json"
    // })

    // const page= await context.newPage();

    
    const Home = new HomePage(page);
    const BookStoreLogin= new BookStoreLoginPage(page);

    await Home.gotoHomePage();
    await Home.clickBookAppBtn();
    await BookStoreLogin.clickLoginMenu();
    await BookStoreLogin.loginToBookStore("sam","Sam@1234");

    const BookStore = new BookStorePage(page);

    await BookStore.searchingBook("Git Pocket Guide");
})

}