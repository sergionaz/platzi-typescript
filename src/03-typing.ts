// Creo una función anónima autoejecutable, para que no haya conflicto de variables entre distintos archivos.
// Esta sería una función que se ejecuta inmediatamente despues de ser definida.
(() => {
  let myProductName = 'Product 1';
  let myProductPrice = 123;

  // tengo métodos propios del tipo de dato. Por ejemplo:
  myProductName.toLocaleLowerCase();
  myProductPrice.toFixed();

  const myProductStock = 1000;
}) ();
