(() => { 
        
    // let myNumber: number = undefined;
    // let myString: string = null;
    // Estas variables tipadas no le puedo asignar valores undefined ni null
    
    let myNull: null = null;
    let myUndefined: undefined = undefined;
    
    let myNumber: number | null = myNull; // 
    myNumber = 12;

    let myString: string | undefined = undefined; 
    myString = 'Sergio';

    function hi(name: string | null) {
        let hello = 'Hola ';
        if (name) {
            hello += name;
        } else {
            hello += 'nobody';
        }
        console.log(hello);
    }

    function hiV2(name: string | null) {
        let hello = 'Hola ';
        hello += name?.toLocaleLowerCase || 'nobody'; // optional chaining
    }
    
    hi(myString);
    hi(null);

    hiV2(myString);
    hiV2(null);

})()