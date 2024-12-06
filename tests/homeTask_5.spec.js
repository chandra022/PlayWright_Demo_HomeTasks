// import { test } from './support/POMs/basePage.js';
import { test, expect } from './support/POMs/basePage.js';
const inputData =  JSON.parse( JSON.stringify( require('./testData/customerInfo.json') ) );

test.beforeEach( async( { managerLogin } ) => {
    await managerLogin.navigate();
    await managerLogin.login();
});
test.afterEach( async( {managerLogin, page} ) => {
    
    await managerLogin.navigateHome();
});

test.only( 'Validate adding customer', async( {addCustomer, page} ) => {
    await addCustomer.navigate();
    await addCustomer.fillCustomerInfo(
        inputData.firstName, inputData.lastName, inputData.postCode
    );
    await addCustomer.submitCustInfo();
    await expect( this.page.on( 'dialog', ( dialog) => dialog.message() ) )
        .containsText( inputData.addCustMsg );
    await this.page.on( 'dialog', (dialog) => dialog.accept() );
});

test( 'Validate open account', async( {openAccount, page} ) => {
    await openAccount.navigate();
    await openAccount.openAcct(  
        inputData.firstName + " " + inputData.lastName , inputData.currency  
    );
    await expect( this.page.on( 'dialog', ( dialog) => dialog.message() ) )
        .containsText( inputData.accountOpenMsg );
    await this.page.on( 'dialog', (dialog) => dialog.accept() );
});

test( 'Validate customer information', async( {customers, page} ) => {
    await customers.navigate();
    await customers.search(  inputData.firstName  );
    await expect( customers.getSearchResult() ).toBe( 1 );
    await customers.deleteCustomer();
    await customers.search(  inputData.firstName  );
    await expect( customers.getSearchResult() ).toBe( 0 );    
});


// const manager_test = test.extend({
//     addCust_page : async( {page}, use) => {

//     }   // await page.goto( 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login' );

// });


// test( 'Add Customer', async( { addCustomerPage }) => {
//     await addCustomerPage.navigate();
//     await addCustomerPage.fillCustomerInfo( 
//         inputData.firstName, inputData.lastName, inputData.postCode
//     );
//     await addCustomerPage.submitCustInfo();

//     await expect( this.page.on( 'dialog', ( dialog) => dialog.message() ) ).containsText( inputData.addCustMsg );
// });


// await this.page.on( 'dialog', ( dialog) => {
//     console.log( "Message after creating customer info:\n" + dialog.message() );
//     dialog.accept();
// })