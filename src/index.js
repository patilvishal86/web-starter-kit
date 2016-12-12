import numeral from 'numeral';
import './index.css'
const courseVal = numeral(11100).format('$0,00.00');
//debugger;
console.log(`I would pay ${courseVal} for this !!`); //eslint-disable-line no-console
