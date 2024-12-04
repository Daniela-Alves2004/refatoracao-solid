import CitiesReporter from './CitiesReporter.js';

export default class HTMLFormatter extends CitiesReporter {
  _formatData() {
    let html = `
      <!DOCTYPE HTML>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Relatório de Nomes de Cidades</title>
        </head>
        <body>
          <h1>Relatório de Nomes de Cidades</h1>
          <ul>
    `;

    this.cities.forEach(city => {
      html += `<li>${city.Nome}</li>\n`;
    });

    html += `
          </ul>
        </body>
      </html>`;
    return html;
  }
}
