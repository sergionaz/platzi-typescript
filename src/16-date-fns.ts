// Uso de librería externa. 
// Primero tuve que correr npm install date-fns --save en consola
// Luego de instalar, tuve que importar.
import { subDays, format } from 'date-fns';

const date = new Date(1998, 1, 28); // 0 = Enero, 1 = Febrero, etc.
const rta = subDays(date, 30);
const str = format(rta, 'yyy/MM/dd');

console.log(str);
