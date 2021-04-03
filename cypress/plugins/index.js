/* global require, module */
const mdPreprocessor = require('cypress-markdown-preprocessor');
module.exports = (on) => {
  on('file:preprocessor', mdPreprocessor);
};
