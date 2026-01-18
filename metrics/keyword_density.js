// Support both n8n ($json) and standalone execution
function calculateKeywordDensity(article, keyword) {
  if (!article || !keyword) {
    return {
      totalWords: 0,
      keywordCount: 0,
      keywordDensityPercent: 0
    };
  }

  const words = article.toLowerCase().split(/\s+/).filter(Boolean);
  const total = words.length;
  const count = words.filter(w => w.includes(keyword.toLowerCase())).length;
  const density = Number(((count / total) * 100).toFixed(2));

  return {
    totalWords: total,
    keywordCount: count,
    keywordDensityPercent: density
  };
}

// n8n execution context
if (typeof $json !== 'undefined') {
  const article = $json.optimized_article_markdown || "";
  const keyword = $json.primary_keyword || "";
  return calculateKeywordDensity(article, keyword);
} 
// Standalone Node.js execution
else if (typeof require !== 'undefined' && require.main === module) {
  const args = process.argv.slice(2);
  if (args.length >= 2) {
    const article = args[0];
    const keyword = args[1];
    const result = calculateKeywordDensity(article, keyword);
    console.log(JSON.stringify(result, null, 2));
    process.exit(0);
  } else {
    console.error('Usage: node keyword_density.js "<article>" "<keyword>"');
    process.exit(1);
  }
}
// Module export for testing/importing
else if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calculateKeywordDensity };
}
