// Create an index
const index = new FlexSearch({
    encode: "icase",   // case insensitive encoding
    tokenize: "full",  // tokenize all words
    threshold: 4,      // minimum length of a word to be indexed
    resolution: 3,     // indexing resolution (accuracy vs performance)
});
