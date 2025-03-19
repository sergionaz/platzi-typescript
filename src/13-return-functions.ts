(() => {

    // Tipar explícitamente la función (su retorno)
    const calcTotal = (prices: number[]):string => {
        let total = 0; 
        prices.forEach((item) => {
            total += item;
        })
        return total.toString();
    }

    // Tipar explícitamente para "convenir" que no devolvemos nada
    const printTotal = (prices: number[]): void => {
        const rta = calcTotal(prices);
        console.log(`El total es ${rta}`);        
    }

    const rta = printTotal([1,2,1,1,1]);

    // NOTA: Estso sirve como para hacer un contrato explícito
    //     para determinar el retorno de cada función

})();