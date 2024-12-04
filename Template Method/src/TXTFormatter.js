import CitiesReporter from './CitiesReporter.js';

export default class TXTFormatter extends CitiesReporter {
  _formatData() {
    let txt = "Relatório de Nomes de Cidades\n=============================\n";

    this.cities.forEach(city => {
      txt += `- ${city.Nome}\n`;
    });

    return txt;
  }
}
