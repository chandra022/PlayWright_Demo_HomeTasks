import type { Page, Locator } from '@playwright/test';

export class Customers{
    private readonly customersTab: Locator;
    private readonly searchCustomer: Locator;
    private readonly custInfoRow: Locator;

    constructor( public readonly page : Page ){
        this.customersTab = this.page.getByRole( 'button', { name: 'Customers '} );
        this.searchCustomer = this.page.getByPlaceholder( 'Search Customer' ) ;
        this.custInfoRow = this.page.locator( 'table > tbody > tr' );
    }
    
    async navigate(){
        await this.customersTab.click();
    }
    async search( user ){
        await this.searchCustomer.fill( user );
    }
    async getSearchResult(){
       return await this.custInfoRow.count();
    }
    async deleteCustomer(){
        await this.custInfoRow
            .filter( { has: this.page.getByRole( 'button', { name: 'Delete'} ) } )
            .click();
    }
}