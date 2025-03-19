(() => {

  let prices = [1,2,3,1,22,123,42];
  // prices.push('asd'); Esto es un error, porque fue creado inicialmente como arreglo de números
  prices.push(1322);
  prices = [4,1,565,23];

  let products = ['hola', false];
  products.push(true);

  // Si quiero que sea escalable a otros tipos. Tengo que explicitar si o si.
  let mixed: (number | string | boolean)[] = ['hola', true];
  mixed.push(1); // ahora puedo sumar un número

  let numbers = [1,2,2,1,1,212];
  numbers.map(item => item * 2);
  let numbers2 = ['asd'];
  // numbers2.map(item => item * 2); // Esto también lo controla

})();
