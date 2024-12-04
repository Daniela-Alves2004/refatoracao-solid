import { HTMLFormatter, TXTFormatter } from './src/Formatters.js';
import CitiesReporter from './src/CitiesReporter.js';

const filename = '../cidades-2.json';

const htmlReporter = new CitiesReporter(new HTMLFormatter());
console.log(htmlReporter.report(filename));

const txtReporter = new CitiesReporter(new TXTFormatter());
console.log(txtReporter.report(filename));
