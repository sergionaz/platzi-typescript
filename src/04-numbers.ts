(() => {

  let productPrice = 100;
  productPrice = 12;
  console.log('Precio: ' + productPrice);

  let customerAge: number = 32;
  // customerAge = customerAge + '1'; // Esto no da error en ejecución, pero si alerta que no sería correcto. Ya que el resultado sería 321
  customerAge = customerAge + 1;
  console.log('Edad: ' + customerAge);

  // Este es otra alerta que nos marca TS. No asinamos valor a una variable y la queremos usar.
  let productInStock:number;
  console.log('Stock:' + productInStock);
  if (productInStock > 10) {
    console.log('is greater');
  }

  // El motor de inferencia automáticamente define discount como el tipo del return de la función (number).
  let discount = parseInt('123');
  console.log('Descuento:' + discount);

  // El exadecimal, lo define como número automáticamente
  let hex = 0xfff123;
  console.log('Exadecimal: ' + hex);

  // Lo mismo con el binario
  let bin = 0b100111001101000101;
  console.log('Binario: ' + bin);

})();
