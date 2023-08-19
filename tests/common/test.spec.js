import {test} from '@playwright/test';
import { register } from "../Login/register";
import { login } from '../Login/login';

//test.describe('Register',()=>register());
test.describe('Login',()=>login());