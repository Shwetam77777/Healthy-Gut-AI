const article = $json.optimized_article_markdown || "";
const keyword = ($json.primary_keyword || "").toLowerCase();

if (!article || !keyword) {
  return {
    totalWords: 0,
    keywordCount: 0,
    keywordDensityPercent: 0
  };
}

const words = article.toLowerCase().split(/\s+/).filter(Boolean);
const total = words.length;
const count = words.filter(w => w.includes(keyword)).length;

return {
  totalWords: total,
  keywordCount: count,
  keywordDensityPercent: Number(((count / total) * 100).toFixed(2))
};

