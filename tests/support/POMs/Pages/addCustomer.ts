import type { Page, Locator } from '@playwright/test';


export class AddCustomer{

    private readonly addCustTab: Locator;
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly postCode: Locator;
    private readonly addCustomerBtn: Locator;


    constructor( public readonly page: Page ){
        // this.page = page;
        this.addCustTab = this.page.getByRole( 'button', { name: 'Add Customer '} );
        this.firstName = this.page.getByPlaceholder( 'First Name' );
        this.lastName = this.page.getByPlaceholder( 'Last Name' );
        this.postCode = this.page.getByPlaceholder( 'Post Code' );
        this.addCustomerBtn = this.page.getByRole('form').getByRole('button', { name: 'Add Customer' });
    }

    async navigate(){
        await this.addCustTab.click();
    }
    async fillCustomerInfo( fName, lName, pCode ){
        await this.firstName.fill( fName );
        await this.lastName.fill( lName );
        await this.postCode.fill( pCode );
    }
    async submitCustInfo(){
        await this.addCustomerBtn.click();
        
    }
}