import { test as base } from '@playwright/test';
import { ManagerLogin } from './Pages/managerLogin.ts';
import { AddCustomer } from './Pages/addCustomer.ts';
import { OpenAccount } from './Pages/openAccount.ts';
import { Customers } from './Pages/customers.ts';


type ManagerFixture = {
    managerLogin : ManagerLogin;
    addCustomer : AddCustomer;
    openAccount : OpenAccount;
    customers : Customers;
};

export const test = base.extend<ManagerFixture>({
    managerLogin : async( {page}, use ) => {
        const managerLogin = new ManagerLogin( page );
        await managerLogin.navigate();
        await use( managerLogin );
    },
    addCustomer : async( {page}, use ) => {
            const addCustomer = new AddCustomer( page );
            await addCustomer.navigate();
            await use( addCustomer );
    },
    openAccount : async( {page}, use ) => {
        const openAccount = new OpenAccount( page );
        await openAccount.navigate();
        await use( openAccount );
    },
    customers : async( {page}, use ) => {
        const customers = new Customers( page );
        await customers.navigate();
        await use( customers );
    },

});
export { expect } from '@playwright/test';