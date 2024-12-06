import { test, request, expect } from '@playwright/test';
const inputData =  JSON.parse( JSON.stringify( require('./testData/customerInfo.json') ) );

test("Validate POST request", async( { request } ) => {
    await console.log( inputData.newUser );    
    const res = await request.post( '/' + inputData.endPoint, 
            { data : {
                "name": inputData.newUser.name + Math.random().toString( 36 ).substring( 2, 8),
                "email":"sanju333@gmail.com",
                "gender":"Male",
                "status":"Active"
            } } );
            console.log(res.url() );
            console.log(res.json() );
        await expect(  res.status() ).toBe( 201 );
        console.log(res.url() );
        console.log( inputData.endPoint );
        const resJson = await res.json();
        await expect( resJson.name ).toBe( inputData.newUser.name );
});


test.only("Validate GET request", async( { request } ) => {
    await console.log( inputData.newUser );    
    const res = await request.get( '/' + inputData.endPoint + '/'+ inputData.userId );
            console.log(res.url() );
            console.log(res.json() );
        await expect( res.status() ).toBe( 200 );
        console.log(res.url() );
        console.log( inputData.endPoint );

        // await expect( res.json() ).toBe( inputData.userInfo );
});
