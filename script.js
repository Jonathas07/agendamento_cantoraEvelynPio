

function Gerarpdf(){
  
  
  // conteudo do PDF 
  let nome = document.querySelector('#nome').value
  let conteudo = document.querySelector('#agendamento')

  // configuração do arquivo
  let config = {
    margin: 0,
    filename: `agendamento de ${nome}`,
    html2canvas: { scrollY: 0 },
    jsPDF: { unit: 'mm', format: "a4", orientation: "portrait" },
  }
 
  // Gerando o PDF
  html2pdf().set(config).from(conteudo).save()
}