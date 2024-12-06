import { test, expect } from '@playwright/test';

const cust_test = test.extend( {
    bankApp : async ( { page } , use ) => {
        await page.goto( 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login' );
        await page.getByRole( 'button', {name: /Customer Login/i} ).click();
        
        await use( page );

        await page.getByRole( 'button', { name: 'Logout' } ).click();
        await page.getByRole( 'button', { name: 'Home' } ).click();
    },
});

cust_test('Validate Money Withdraw', async( {bankApp } ) => {
        await bankApp.locator( '#userSelect' ).selectOption( {label: 'Hermoine Granger' } );
        await bankApp.getByRole( 'button', {name: /login/i}).click();
        const balance = await bankApp.locator( "div[ng-hide='noAccount'] > strong:nth-child(2)" ).textContent();
        console.log( `Balance before withdrawl: ${balance}` );
        await bankApp.getByRole( 'button', { name: 'Withdrawl '} ).click();
        await bankApp.getByPlaceholder( 'amount' ).fill(  String(  Number ( balance ) + 10 ) );
        await bankApp.locator('button[type="submit"]' ).click();
        await expect( bankApp.locator( "div.ng-scope >span[ng-show='message']" ) ).toContainText( 'Transaction Failed. You can not withdraw amount more than the balance.');
        await expect( bankApp.locator( "div[ng-hide='noAccount'] > strong:nth-child(2)" ) ).toContainText( balance );
}); 


cust_test('Validate Money Deposit', async( {bankApp } ) => {
    await bankApp.locator( '#userSelect' ).selectOption( {label: 'Albus Dumbledore' } );
    await bankApp.getByRole( 'button', {name: /login/i}).click();
    const balance = await bankApp.locator( "div[ng-hide='noAccount'] > strong:nth-child(2)" ).textContent();
    console.log( `Balance before deposit: ${balance}` );
        
    await bankApp.getByRole( 'button', { name: 'Deposit '} ).click();
    await bankApp.getByPlaceholder( 'amount' ).fill( '1000' );
    await bankApp.locator('button[type="submit"]' ).click();
    await expect( bankApp.locator( "div.ng-scope >span[ng-show='message']" ) ).toContainText( 'Deposit Successful');
    await expect( bankApp.locator( "div[ng-hide='noAccount'] > strong:nth-child(2)" ) )
            .toContainText( String( Number( balance ) + 1000 ) );
});

