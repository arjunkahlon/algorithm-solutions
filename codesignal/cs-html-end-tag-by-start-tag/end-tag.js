/* eslint-disable no-unused-vars */

function endTag(startTag) {
  return '</' +
    startTag.slice(startTag.indexOf('<') + 1, startTag.indexOf(' ')) +
    '>';
}
