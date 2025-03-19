// Copio lo que me indica la documentación externa (_) indica que traiga todo
// var _ = require('lodash');
 
// Para typescript se traduce de la siguiente forma
// (_) trae todo, pero después no tengo ayuda.
// Por eso, la ayuda de vscode, me dice que instale los tipos de la librería, para poder ayudarme luego mejor.
import _ from 'lodash';

const data = [
    {
        username: 'sergio', 
        role: 'admin'
    },
    {
        username: 'valentina', 
        role: 'seller'
    },
    {
        username: 'zulema', 
        role: 'seller'
    },
    {
        username: 'santiago', 
        role: 'customer'
    },
]; 

// Tratar de agrupar por rol. Lo importante es que ahora tenemos tipado
const rta = _.groupBy(data, (item) => item.role);
console.log(rta);


