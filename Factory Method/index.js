import FormaterHTML from './src/HTMLFormatterFactory.js';
import FormaterTXT from './src/TXTFormatterFactory.js';
import CitiesReporter from './src/CitiesReporter.js';

const [cmd, script, param1] = process.argv,
  filename = '../cidades-2.json';

  let factory;

if (param1 === 'html') {
  factory = new FormaterHTML();
} else if (param1 === 'txt') {
  factory = new FormaterTXT();
} else {
  console.error(`Formato inválido!`);
  process.exit(1);
}

const reporter = new CitiesReporter({ factory });
const output = reporter.report(filename);

console.log(output);
//console.log(cmd, script, param1);
