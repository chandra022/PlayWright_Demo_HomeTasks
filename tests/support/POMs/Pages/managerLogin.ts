import type { Page, Locator } from '@playwright/test';

export class ManagerLogin{
    private readonly homeBtn : Locator;
    private readonly bankManagerLogin : Locator;

    constructor( public readonly page: Page ){
        this.homeBtn = this.page.getByRole( 'button', { name: 'Home' } );
        this.bankManagerLogin = this.page.getByRole( 'button', { name: 'Bank Manager Login' } );
    }

    async navigate(){
        // await this.page.goto( '/' );
        await this.page.goto( 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login' );
    }
    async navigateHome(){
        await this.homeBtn.click();
    }
    async login(){
        await this.bankManagerLogin.click();
    }
}
