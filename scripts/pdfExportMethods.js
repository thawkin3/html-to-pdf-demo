// START: DocRaptor
function downloadPDFWithDocRaptor() {
  DocRaptor.createAndDownloadDoc('YOUR_API_KEY_HERE', {
    test: true, // test documents are free, but watermarked
    type: 'pdf',
    name: 'MLB World Series Winners',
    document_content: document.querySelector('html').innerHTML,
  })
}

document.querySelector('#docRaptor').addEventListener('click', downloadPDFWithDocRaptor);
// END: DocRaptor


// START: pdfmake
function downloadPDFWithPDFMake() {
  var tableHeaderText = [...document.querySelectorAll('#styledTable thead tr th')].map(thElement => ({ text: thElement.textContent, style: 'tableHeader' }));

  var tableRowCells = [...document.querySelectorAll('#styledTable tbody tr td')].map(tdElement => ({ text: tdElement.textContent, style: 'tableData' }));
  var tableDataAsRows = tableRowCells.reduce((rows, cellData, index) => {
    if (index % 4 === 0) {
      rows.push([]);
    }

    rows[rows.length - 1].push(cellData);
    return rows;
  }, []);

  var docDefinition = {
    header: { text: 'MLB World Series Winners', alignment: 'center' },
    footer: function(currentPage, pageCount) { return ({ text: `Page ${currentPage} of ${pageCount}`, alignment: 'center' }); },
    content: [
      {
        style: 'tableExample',
        table: {
          headerRows: 1,
          body: [
            tableHeaderText,
            ...tableDataAsRows,
          ]
        },
        layout: {
          fillColor: function(rowIndex) {
            if (rowIndex === 0) {
              return '#0f4871';
            }
            return (rowIndex % 2 === 0) ? '#f2f2f2' : null;
          }
        },
      },
    ],
    styles: {
      tableExample: {
        margin: [0, 20, 0, 80],
      },
      tableHeader: {
        margin: 12,
        color: 'white',
      },
      tableData: {
        margin: 12,
      },
    },
  };
  pdfMake.createPdf(docDefinition).download('MLB World Series Winners');
}

document.querySelector('#pdfmake').addEventListener('click', downloadPDFWithPDFMake);
// END: pdfmake


// START: jsPDF
function downloadPDFWithjsPDF() {
  var doc = new jspdf.jsPDF('p', 'pt', 'a4');

  doc.html(document.querySelector('#styledTable'), {
    callback: function (doc) {
      doc.save('MLB World Series Winners.pdf');
    },
    margin: [60, 60, 60, 60],
    x: 32,
    y: 32,
  });
}

document.querySelector('#jsPDF').addEventListener('click', downloadPDFWithjsPDF);
// END: jsPDF


// START: browser print (native functionality, right-click >> Print (or Command + P))
function downloadPDFWithBrowserPrint() {
  window.print();
}
document.querySelector('#browserPrint').addEventListener('click', downloadPDFWithBrowserPrint);
// END: browser print
