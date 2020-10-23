var downloadPDF = function() {
  DocRaptor.createAndDownloadDoc("YOUR_API_KEY_HERE", {
    test: true, // test documents are free, but watermarked
    type: "pdf",
    document_content: document.querySelector('html').innerHTML,
    prince_options: {
      baseurl: "tylerhawkins.info/html-to-pdf-demo",
    }
  })
}
document.querySelector('#docRaptor').addEventListener('click', downloadPDF);
