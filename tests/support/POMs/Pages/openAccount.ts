import type { Page, Locator } from '@playwright/test';

export class OpenAccount{
    private readonly openAcctTab: Locator;
    private readonly customerName: Locator;
    private readonly currency: Locator;
    private readonly processBtn: Locator;

    constructor( public readonly page: Page ){
        this.openAcctTab = this.page.getByRole( 'button', { name: 'Open Account '} );
        this.customerName = this.page.locator( '#userSelect' );
        this.currency = this.page.locator( '#currency' );
        this.processBtn = this.page.getByRole( 'button', { name: 'Process'} );
    }

    async navigate(){
        await this.openAcctTab.click();
    }
    async openAcct( name, currency ){
        await this.customerName.selectOption( { label : name } );
        await this.currency.selectOption( { label : currency } );
        await this.processBtn.click();
    }
}