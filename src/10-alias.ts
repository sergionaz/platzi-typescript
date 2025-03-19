(() => { 
    
    // El objetivo es que puedo definir mi propio tipo y puedo reutilizarlo   
    type UserID = string | number ;    

    let userId: UserID;

    function greeting(userId: UserID) {
        if (typeof userId == 'string') {
            // Acá typescript sabe que la variable es String y me habilita los métodos asociados a este tipo
            console.log(`string ${userId.toLocaleLowerCase()}`);
            
        } else {
            // Acá typescript sabe que la variable es Number y me habilita los métodos asociados a este tipo
            console.log(`string ${userId.toFixed(2)}`);
        }
    }

    // Literal types
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    let shirtSize: Sizes;

    shirtSize = 'XL';

})()