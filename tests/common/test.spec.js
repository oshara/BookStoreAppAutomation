import {test} from '@playwright/test';
import { register } from "../Login/register";
import { login } from '../Login/login';
import { BookStore } from '../searchBook';

//test.describe('Register',()=>register());
//test.describe('Login',()=>login());

test.describe('Book Store',()=>BookStore());