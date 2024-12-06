import { test, expect } from '@playwright/test';

test('Contact test', async ( {page} ) => {
    // Navigate to page
    await page.goto('https://ultimateqa.com/');
    await page.locator( 'css=#menu-item-217940 > a').hover();
    // Click on 'Contact Us' and navigate to contact page
    await page.getByText( 'Contact Us' ).click();
    await expect.soft( page.url() ).toContainText( '/contact/' );

    // Fill the form and submit
    await expect( page.getByText( 'Send us a Message' ) ).toBeVisible();
    await page.locator( '#et_pb_contact_name_0' ).fill( 'Chandrasekhar' );
    await page.getByPlaceholder( 'Your Email Address' ).fill( 'chandrasekhar_parchri@epam.com' );
    await page.locator( 'xpath=//*[@id="et_pb_contact_message_0"]')
                .fill( 'Hi, Good day.\n' +
                    'Hope you are doing good. \nThis is text message to send.\n\n'+
                    'Thanks & Regards,\nChandrasekhar'
                 );
    await page.getByRole( 'button', { name: 'Submit'} ).click();
    await expect( 
        page.locator( '#et_pb_contact_form_0 > div > p' )
        ).toContainText( 'Thank you for contacting us. We will get back to you soon!') ;
       
  });


