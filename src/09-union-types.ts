(() => {

    // Nos permite definir más de un tipo de dato a una variable, argumento de una función, etc.
    let userId: string | number;

    userId = 123;
    userId = 'asdasd';

    function greeting(myText: string | number) {
        if (typeof myText == 'string') {
            // Acá typescript sabe que la variable es String y me habilita los métodos asociados a este tipo
            console.log(`string ${myText.toLocaleLowerCase()}`);
            
        } else {
            // Acá typescript sabe que la variable es Number y me habilita los métodos asociados a este tipo
            console.log(`string ${myText.toFixed(2)}`);
        }
    }

    greeting('asa');
    greeting(123.124123);

})();