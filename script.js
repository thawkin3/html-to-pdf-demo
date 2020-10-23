var downloadPDF = function() {
  DocRaptor.createAndDownloadDoc("YOUR_API_KEY_HERE", {
    test: true, // test documents are free, but watermarked
    type: "pdf",
    document_content: document.querySelector('html').innerHTML, // use this page's HTML
    // document_content: "<h1>Hello world!</h1>",               // or supply HTML directly
    // document_url: "http://example.com/your-page",            // or use a URL
    // javascript: true,                                        // enable JavaScript processing
    prince_options: {
      media: "screen",                                       // use screen styles instead of print styles
      baseurl: "tylerhawkins.info/html-to-pdf-demo",
    }
  })
}
document.querySelector('#docRaptor').addEventListener('click', downloadPDF);
