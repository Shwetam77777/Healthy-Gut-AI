/**
 * Example: Using Metrics Scripts Standalone (without n8n)
 * 
 * This script demonstrates how to use keyword_density.js and 
 * readability_check.js as Node.js modules in your own code.
 */

const { calculateKeywordDensity } = require('./metrics/keyword_density.js');
const { calculateReadability } = require('./metrics/readability_check.js');
const fs = require('fs');
const path = require('path');

// Sample article content
const sampleArticle = `
# The Ultimate Guide to Gut Health

Maintaining optimal gut health is essential for overall wellness and vitality. 
Your digestive system plays a crucial role in nutrient absorption and immune function.

## Why Gut Health Matters

A healthy gut supports digestion, regulates mood, and strengthens your immune system. 
Research shows that gut bacteria influence everything from mental health to weight management.

## Key Strategies for Better Gut Health

1. Eat plenty of fiber-rich foods like fruits, vegetables, and whole grains
2. Include fermented foods such as yogurt, kimchi, and sauerkraut
3. Stay hydrated with water throughout the day
4. Manage stress through meditation and regular exercise
5. Get adequate sleep for proper digestive function

## Conclusion

Taking care of your gut health should be a top priority. Simple lifestyle changes 
can significantly improve your digestive health and overall well-being.
`;

const primaryKeyword = 'gut health';

console.log('========================================');
console.log('   Metrics Analysis Example');
console.log('========================================\n');

// 1. Calculate Keyword Density
console.log('📊 Keyword Density Analysis:');
console.log(`   Keyword: "${primaryKeyword}"\n`);
const keywordMetrics = calculateKeywordDensity(sampleArticle, primaryKeyword);
console.log(JSON.stringify(keywordMetrics, null, 2));
console.log('\n');

// 2. Calculate Readability Score
console.log('📖 Readability Analysis:\n');
const readabilityMetrics = calculateReadability(sampleArticle);
console.log(JSON.stringify(readabilityMetrics, null, 2));
console.log('\n');

// 3. Interpretation
console.log('📋 Summary:');
console.log(`   • Total Words: ${keywordMetrics.totalWords}`);
console.log(`   • Keyword Occurrences: ${keywordMetrics.keywordCount}`);
console.log(`   • Keyword Density: ${keywordMetrics.keywordDensityPercent}%`);
console.log(`   • Flesch Reading Ease: ${readabilityMetrics.fleschReadingEase.toFixed(2)}`);

// Readability interpretation
let readabilityLevel = '';
if (readabilityMetrics.fleschReadingEase >= 90) readabilityLevel = 'Very Easy (5th grade)';
else if (readabilityMetrics.fleschReadingEase >= 80) readabilityLevel = 'Easy (6th grade)';
else if (readabilityMetrics.fleschReadingEase >= 70) readabilityLevel = 'Fairly Easy (7th grade)';
else if (readabilityMetrics.fleschReadingEase >= 60) readabilityLevel = 'Standard (8th-9th grade)';
else if (readabilityMetrics.fleschReadingEase >= 50) readabilityLevel = 'Fairly Difficult (10th-12th grade)';
else if (readabilityMetrics.fleschReadingEase >= 30) readabilityLevel = 'Difficult (College)';
else readabilityLevel = 'Very Difficult (College graduate)';

console.log(`   • Reading Level: ${readabilityLevel}`);

// 4. Optional: Analyze sample article files
console.log('\n========================================');
console.log('   Analyzing Sample Articles');
console.log('========================================\n');

const samplesDir = path.join(__dirname, 'samples');
if (fs.existsSync(samplesDir)) {
  const sampleFiles = fs.readdirSync(samplesDir).filter(f => f.endsWith('.md'));
  
  if (sampleFiles.length > 0) {
    sampleFiles.forEach(file => {
      const filePath = path.join(samplesDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      const keyword = 'gut health'; // Default keyword
      
      console.log(`📄 ${file}:`);
      const kwMetrics = calculateKeywordDensity(content, keyword);
      const readMetrics = calculateReadability(content);
      
      console.log(`   Words: ${kwMetrics.totalWords} | Keyword Density: ${kwMetrics.keywordDensityPercent}% | Readability: ${readMetrics.fleschReadingEase.toFixed(2)}\n`);
    });
  }
}

console.log('✅ Analysis complete!\n');
console.log('💡 Tip: You can also run these scripts directly from command line:');
console.log('   node metrics/keyword_density.js "<article>" "<keyword>"');
console.log('   node metrics/readability_check.js "<article>"');
