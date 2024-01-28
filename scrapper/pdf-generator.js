const puppeteer = require('puppeteer');


async function generatePDF(htmlMarkup) {
  const browser = await puppeteer.launch({headless:true});
  const page = await browser.newPage();

  // Set content to the page
  await page.setContent(htmlMarkup);

  // Generate PDF
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    timeout:0
  });

  // Save the PDF to a file
  const outputFile = 'output.pdf';
  await require('fs').promises.writeFile(outputFile, pdfBuffer,{flag:"a"});
  browser.close();
}

module.exports={
  generatePDF:generatePDF,
}
