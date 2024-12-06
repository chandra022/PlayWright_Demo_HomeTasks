const inputArray = [
    { id: 1, timestamp: 100, message: "hello" },
    { id: 2, timestamp: 90, message: "hi" },
    { id: 3, timestamp: 100, message: "hello" },
];


function outputArr( arr ){
    arr.sort( ( a, b) => a.timestamp - b.timestamp );
    let repeatedMap = new Map();

    for( const obj of arr ){
        if( repeatedMap.has( obj.timestamp ) && repeatedMap.get( obj.timestamp) === obj.message ){ 
            obj.message = obj.message + '(duplicated)';
        }else{
            repeatedMap.set( obj.timestamp, obj.message );
        }

    }
    return arr;

}

const res = outputArr( inputArray );
console.log( res );