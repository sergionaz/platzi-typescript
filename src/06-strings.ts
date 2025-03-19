(() => {

  let productTitle = 'My amazing product';

  // Puede usarse comilla simple
  productTitle = 'My amazing product changed';
  console.log(productTitle);

  // O comilla doble
  const productDescription = "I'am bla bla blaaa asd";
  console.log(productDescription);

  let productPrice = 100;
  let isNew = true;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `
  console.log(summary);

})();
