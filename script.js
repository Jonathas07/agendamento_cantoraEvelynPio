

function Gerarpdf(){
  alert("Gerar PDF do Agendamento")
  
  // conteudo do PDF 
  // let nome = document.querySelector('#nome').value - tentando por o nome no arquivo com o nome do formulario
  let conteudo = document.querySelector('#agendamento')

  // configuração do arquivo
  let config = {
    margin: [10],
    filename: `arquivo.pdf`,
    html2canvas: { scale: 2 },
    jsPDF: { unit: matchMedia, format: "a4", orientation: "portrait" },
  }
 
  // Gerando o PDF
  html2pdf().set(config).from(conteudo).save()
}