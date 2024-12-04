import FormatterFactory from './FormatterFactory.js';

export default class TXTFormatterFactory extends FormatterFactory {
  createFormatter() {
    return new FormaterTXT();
  }
}
class FormaterTXT {

  output(cities) {
    let txt = `Relatório de Nomes de Cidades
  =============================\n`;

    for (let i = 0; i < cities.length; i++) {
      txt += `- ${cities[i]['Nome']}\n`;
    }

    return txt;
  }

}
