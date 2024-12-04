import fs from 'node:fs';

export default class CitiesReporter {
  constructor(formatter) {
    this.formatter = formatter;
  }

  _readFile(filename) {
    const data = fs.readFileSync(filename, 'utf-8');
    return JSON.parse(data);
  }

  report(filename) {
    const cities = this._readFile(filename);
    return this.formatter.output(cities);
  }
}
