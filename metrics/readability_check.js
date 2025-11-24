
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

const article = $json.optimized_article_markdown || "";

return {
  fleschReadingEase: Number(fleschReadingEase(article).toFixed(2))
};
