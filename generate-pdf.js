const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        
        await page.setViewport({ width: 1280, height: 900 });
        
        page.on('error', err => {
            console.error('Page error:', err.message);
        });
        
        page.on('pageerror', err => {
            console.error('Page JS error:', err.message);
        });
        
        const filePath = path.resolve(__dirname, 'index.html');
        await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0', timeout: 30000 });
        
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
    } catch (err) {
        console.error('PDF generation failed:', err.message);
        process.exit(1);
    }
})();
