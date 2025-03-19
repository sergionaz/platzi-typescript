(() => {

    // Any: Cualquier cosa puede ir ahí 
    let myDynamicVar: any;
    myDynamicVar = 100; 
    myDynamicVar = 'string';
    myDynamicVar = {};
    myDynamicVar = null;

    myDynamicVar = 'Hola';
    // Así lo puedo castear y rta pasa a definirse automáticamente como string
    const rta = (myDynamicVar as string).toLowerCase();
    console.log(rta);
    
    // Otra forma de castear
    myDynamicVar = 1212;
    const rta2 = (<number>myDynamicVar).toFixed();
    console.log(rta2);
    

})();