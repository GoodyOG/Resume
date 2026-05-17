const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    const filePath = path.resolve(__dirname, 'index.html');
    await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });
    
    await page.pdf({
        path: path.resolve(__dirname, 'Raimy_Lamarr_Resume.pdf'),
        format: 'A4',
        printBackground: true,
        margin: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0'
        }
    });
    
    await browser.close();
    console.log('PDF generated successfully: Raimy_Lamarr_Resume.pdf');
})();
