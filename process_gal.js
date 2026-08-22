const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processImage(inputPath, outputName, width) {
    const outputPath = path.join('assets/img/gallery', outputName + '.webp');
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
    await processImage(path.join(artifactDir, 'about_hasil_1787278387297.jpg'), 'gallery-1', 800);
    await processImage(path.join(artifactDir, 'about_hero_1787278360483.jpg'), 'gallery-2', 800);
    await processImage(path.join(artifactDir, 'about_proyek_1787278374308.jpg'), 'gallery-3', 800);
    await processImage(path.join(artifactDir, 'arsitek_hero_1787277608258.jpg'), 'gallery-4', 800);
    await processImage(path.join(artifactDir, 'arsitek_process1_1787277621486.jpg'), 'gallery-5', 800);
    await processImage(path.join(artifactDir, 'arsitek_process2_1787277636254.jpg'), 'gallery-6', 800);
    await processImage(path.join(artifactDir, 'arsitek_process3_1787277655998.jpg'), 'gallery-7', 800);
    await processImage(path.join(artifactDir, 'arsitek_process4_1787277674512.jpg'), 'gallery-8', 800);
}

main();
