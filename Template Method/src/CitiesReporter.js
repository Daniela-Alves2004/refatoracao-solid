import fs from 'node:fs';

export default class CitiesReporter {
  constructor(filename) {
    this.filename = filename;
    this.cities = null;
  }

  generateReport() {
    this._readFile();
    this._parseData();
    return this._formatData();
  }

  _readFile() {
    const data = fs.readFileSync(this.filename, 'utf-8');
    this.cities = JSON.parse(data);
  }

  _parseData() {
    if (!this.cities || !Array.isArray(this.cities)) {
      throw new Error("Invalid data format. Expected an array of cities.");
    }
  }

  _formatData() {
    throw new Error("Subclasses must implement _formatData()");
  }
}
