import HTMLFormatter from './src/HTMLFormatter.js';
import TXTFormatter from './src/TXTFormatter.js';

const [cmd, script, format] = process.argv;
const filename = '../cidades-2.json';

let reporter;

if (format === 'html') {
  reporter = new HTMLFormatter(filename);
} else if (format === 'txt') {
  reporter = new TXTFormatter(filename);
} else {
  throw new Error("Formato não suportado. Use 'html' ou 'txt'.");
}

console.log(reporter.generateReport());
