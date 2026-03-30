function doPost(e) {
  const planilha = SpreadsheetApp.openById("ID_DA_SUA_PLANILHA");

  const dados = JSON.parse(e.postData.contents);

  let abaNome = dados.tipo;

  let aba = planilha.getSheetByName(abaNome);

  aba.appendRow([
    new Date(),
    dados.setor,
    dados.tipo,
    dados.categoria,
    dados.quantidade,
    dados.motivo,
    dados.data,
    dados.usuario,
    dados.obs
  ]);

  return ContentService
    .createTextOutput("OK")
    .setMimeType(ContentService.MimeType.TEXT);
}
