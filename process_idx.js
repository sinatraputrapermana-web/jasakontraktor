const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processImage(inputPath, outputName, width) {
    const outputPath = path.join('assets/img/jasa', outputName + '.webp');
    try {
        await sharp(inputPath)
            .resize({ width: width, withoutEnlargement: true }) // Resize if too large
            .webp({ quality: 40 }) // Lower quality to ensure <100kb
            .toFile(outputPath);
        
        const stats = fs.statSync(outputPath);
        console.log(`Saved ${outputPath} - Size: ${(stats.size / 1024).toFixed(2)} KB`);
    } catch (err) {
        console.error(`Error processing ${inputPath}:`, err);
    }
}

async function main() {
    const artifactDir = 'C:\\Users\\Arya\\.gemini\\antigravity\\brain\\f1e2427b-b5c2-414d-819b-fe4e19a40a85';
    await processImage(path.join(artifactDir, 'idx_hero_1787309114911.jpg'), 'idx-hero', 1100);
}

main();
