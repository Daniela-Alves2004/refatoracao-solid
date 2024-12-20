import fs from 'node:fs';

export default class CitiesReporter {
  constructor({ factory }) {
    this._formater = factory.createFormatter();
  }

  _read(filename) {
    this._cities_json = fs.readFileSync(filename);
  }

  _parseJSON() {
    this._cities = JSON.parse(this._cities_json);
  }


  report(filename) {
    this._read(filename);
    this._parseJSON();
    return this._formater.output(this._cities);
  }
}


