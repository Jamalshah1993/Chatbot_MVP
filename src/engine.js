// chatbot-mvp/src/engine.js

import { getDB } from './faq-store.js';

const K1 = 1.5;
const B = 0.75;
const CONFIDENCE_THRESHOLD = 0.25;

/**
 * Tokenizes a string into an array of lowercase words.
 * @param {string} text
 * @returns {string[]}
 */
function tokenize(text) {
  return text.toLowerCase().match(/\b\w+\b/g) || [];
}

/**
 * Calculates term frequency (TF) for a token in a document.
 * @param {string} token
 * @param {string[]} documentTokens
 * @returns {number}
 */
function tf(token, documentTokens) {
  return documentTokens.filter(t => t === token).length;
}

/**
 * Calculates inverse document frequency (IDF) for a token across all documents.
 * @param {string} token
 * @param {string[][]} corpusTokens
 * @returns {number}
 */
function idf(token, corpusTokens) {
  const docCount = corpusTokens.length;
  const docsWithToken = corpusTokens.filter(doc => doc.includes(token)).length;
  return Math.log(1 + (docCount - docsWithToken + 0.5) / (docsWithToken + 0.5));
}

/**
 * Calculates BM25 score for a query against a document.
 * @param {string[]} queryTokens
 * @param {string[]} documentTokens
 * @param {string[][]} corpusTokens
 * @param {number} avgDocLength
 * @returns {number}
 */
function calculateBm25(queryTokens, documentTokens, corpusTokens, avgDocLength) {
  let score = 0;
  const docLength = documentTokens.length;

  for (const queryToken of queryTokens) {
    const termFreq = tf(queryToken, documentTokens);
    if (termFreq === 0) continue;

    const idfScore = idf(queryToken, corpusTokens);
    const numerator = termFreq * (K1 + 1);
    const denominator = termFreq + K1 * (1 - B + B * (docLength / avgDocLength));
    score += idfScore * (numerator / denominator);
  }
  return score;
}

/**
 * Finds the best matching FAQ entry for a given query and language.
 * @param {string} query
 * @param {string} lang
 * @returns {object|null} The best matching FAQ entry with scores, or null if no match above threshold.
 */
export function findBestMatch(query, lang) {
  const faqDB = getDB(lang);
  if (!faqDB || faqDB.length === 0) {
    return null;
  }

  const queryTokens = tokenize(query);
  const corpusTokens = faqDB.map(entry => tokenize(entry.q));
  const docLengths = corpusTokens.map(doc => doc.length);
  const avgDocLength = docLengths.reduce((sum, len) => sum + len, 0) / docLengths.length;

  let bestMatch = null;
  let maxCombinedScore = 0;

  for (const entry of faqDB) {
    const documentTokens = tokenize(entry.q);
    const bm25Score = calculateBm25(queryTokens, documentTokens, corpusTokens, avgDocLength);

/**
 * Calculates fuzzy token overlap score for a query against a document.
 * @param {string[]} queryTokens
 * @param {string[]} documentTokens
 * @returns {number}
 */
function calculateFuzzyScore(queryTokens, documentTokens) {
  if (queryTokens.length === 0 || documentTokens.length === 0) {
    return 0;
  }

  const querySet = new Set(queryTokens);
  const documentSet = new Set(documentTokens);

  let overlapCount = 0;
  for (const token of querySet) {
    if (documentSet.has(token)) {
      overlapCount++;
    }
  }

  const uniqueTokens = new Set([...queryTokens, ...documentTokens]);
  return overlapCount / uniqueTokens.size;
}

    const fuzzyScore = calculateFuzzyScore(queryTokens, documentTokens);


    const combinedScore = bm25Score * 0.7 + fuzzyScore * 0.3;

    if (combinedScore > maxCombinedScore) {
      maxCombinedScore = combinedScore;
      bestMatch = {
        ...entry,
        bm25Score,
        fuzzyScore,
        combinedScore,
        tier: 'Tier 1',
        confidence: combinedScore, //  adjusted after fuzzy is implemented
      };
    }
  }

  if (bestMatch && bestMatch.confidence >= CONFIDENCE_THRESHOLD) {
    return bestMatch;
  }
  return null;
}
