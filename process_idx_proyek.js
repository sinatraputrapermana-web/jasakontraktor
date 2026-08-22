const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processImage(inputPath, outputName, width) {
    const outputPath = path.join('assets/img/jasa', outputName + '.webp');
    try {
        await sharp(inputPath)
            .resize({ width: width, withoutEnlargement: true })
            .webp({ quality: 40 })
            .toFile(outputPath);
        
        const stats = fs.statSync(outputPath);
        console.log(`Saved ${outputPath} - Size: ${(stats.size / 1024).toFixed(2)} KB`);
    } catch (err) {
        console.error(`Error processing ${inputPath}:`, err);
    }
}

async function main() {
    const artifactDir = 'C:\\Users\\Arya\\.gemini\\antigravity\\brain\\f1e2427b-b5c2-414d-819b-fe4e19a40a85';
    await processImage(path.join(artifactDir, 'idx_proyek_1_1787309421133.jpg'), 'idx-proyek-1', 800);
    await processImage(path.join(artifactDir, 'idx_proyek_2_1787309432855.jpg'), 'idx-proyek-2', 800);
    await processImage(path.join(artifactDir, 'idx_proyek_3_1787309445041.jpg'), 'idx-proyek-3', 800);
}

main();
