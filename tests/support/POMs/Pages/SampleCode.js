// let str = "abcabcabcabcd";
// console.log('--' +  str.split('').filter( (x) =>  str.indexOf(x) !== str.lastIndexOf(x)
//                                                  ).join('') 
//                                                 + '--');
// let str = "abcabcabcabcd";
// let c;
// let index = -1;
// for(let i =0; i<str.length; i++ ){
//     c = str[i];
//     if( str.indexOf( c) === str.lastIndexOf( c ) ){
//         index = i;
//         break;
//     }
// }
// console.log( 'result:' + c + '\t index:' + index );


// let myMap = new Map([ 
//     ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]);
// let text = '';
// myMap.set('lotus', 30);
// // for( const [key, value] in myMap.entries() ){
// //     console.log( `key:${key}--value:${value}`);
// // }
// myMap.forEach( ( v, k) => {
//     text += `key:${k}--value:${v}\n`;
// })
// // console.log( text + '--');

// let keyArr = Array.from( myMap.keys() );
// console.log( keyArr );

// let myMap = new Map([]);
// const arr = [4, 5, 2, 25 ];
// for( const int of arr ){
//     console.log( int + '-->' + findGreater( arr, int) );
// }

// function findGreater( arr , val ){
//     // if( !Array.isArray( arr) ) return -1;
//     for( let i = arr.indexOf( val )+1; i< arr.length; i++ ){
//         if( val < arr[ i ] ){
//             return arr[ i ];
//         }
//     }
//     return -1;
// }


let str = 'I Am Not String';
// let res = '';
// console.log( str );
// for( let i=0; i< str.length; i++ ){
//     // const c = str.at( i );
//     if( str.at( i ) == ' '){
//         res = res +str.at( i )
//     }else{
//         res = res + str.at( -( i+1 ) );
//     }
// }

console.log( str.replaceAll( ' ','') + '==' + str );



