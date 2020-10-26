# HTML to PDF Demo

This project is a demo of exporting HTML content as PDFs using various html-to-pdf libraries. It features a lengthy styled table so that we can explore pieces of functionality like table column headers, table footers, page headers and footers, page numbers, and table styles.

## HTML to PDF Libraries Used

- [DocRaptor](https://docraptor.com)
- [pdfmake](http://pdfmake.org/)
- [jsPDF](https://github.com/MrRio/jsPDF)
- [native browser print functionality](https://www.w3schools.com/jsref/met_win_print.asp)

## Example Exports

I've included several PDFs in the `example-exports` directory containing the output from the various libraries I explored.

## Project Structure

This project is set up in the simplest way possible: no build tools, just an `index.html` file and some JavaScript files. The main JavaScript file is called `pdfExportMethods.js` and contains the setup code for each PDF export option. The other JavaScript files are the third-party libraries that I've included in the project rather than pulling from a CDN.

## Running Locally

Since there are no build tools included, simple use a static site hosting tool of your choice to run this locally. Some of my favorites are MAMP (or WAMP or LAMP) or the VS Code "Live Server" extension.
