function countSentences(text) {
  const matches = text.match(/[.!?]/g);
  return matches ? matches.length : 1;
}

function countSyllables(word) {
  const m = word.toLowerCase().match(/[aeiouy]+/g);
  return m ? m.length : 1;
}

function fleschReadingEase(text) {
  const words = text.split(/\s+/).filter(Boolean);
  const numWords = words.length || 1;
  const numSentences = countSentences(text);
  const numSyllables = words.reduce((sum, w) => sum + countSyllables(w), 0);

  const ASL = numWords / numSentences;
  const ASW = numSyllables / numWords;

  return 206.835 - 1.015 * ASL - 84.6 * ASW;
}

function calculateReadability(article) {
  if (!article) {
    return {
      fleschReadingEase: 0
    };
  }

  const score = Number(fleschReadingEase(article).toFixed(2));

  return {
    fleschReadingEase: score
  };
}

// n8n execution context
if (typeof $json !== 'undefined') {
  const article = $json.optimized_article_markdown || "";
  return calculateReadability(article);
}
// Standalone Node.js execution
else if (typeof require !== 'undefined' && require.main === module) {
  const args = process.argv.slice(2);
  if (args.length >= 1) {
    const article = args[0];
    const result = calculateReadability(article);
    console.log(JSON.stringify(result, null, 2));
    process.exit(0);
  } else {
    console.error('Usage: node readability_check.js "<article>"');
    process.exit(1);
  }
}
// Module export for testing/importing
else if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calculateReadability, fleschReadingEase };
}
