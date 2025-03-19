(() => {

  // Definición implícita
  let isEnable = true;

  // Definición explícita
  let isNew: boolean = false;

  const random = Math.random();
  console.log('Random: ' + random);
  // isNew = random >= 0.5 ? 'true' : "false" // Error. Esto también lo controla.
  isNew = random >= 0.5 ? true : false

})();
