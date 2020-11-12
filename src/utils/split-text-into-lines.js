/**
 * Splits a string into a list of strings that do not
 * exceed the given max length
 *
 * @param {string} text Some text to split into multiple lines
 * @param {number} maxLineLength The maximum length of the splitted lines
 *
 * @returns {string[]} A list of lines all under the given max length
 */
export default function splitTextIntoLines(text = "", maxLineLength = 1) {
  if (maxLineLength < 1) {
    throw new Error("Invalid max line length");
  }
  const regexWordSeparator = /\S/;

  const result = [];

  let windowStart = 0;
  let windowEnd = maxLineLength;

  while (windowEnd < text.length) {
    const windowIsSplittingAWord =
      regexWordSeparator.test(text.charAt(windowEnd - 1)) ||
      regexWordSeparator.test(text.charAt(windowEnd));

    if (windowIsSplittingAWord) {
      const regexStartOfSplitWord = /\s\S+$/;
      const currentLine = text.slice(windowStart, windowEnd);
      const wordStartIndex = currentLine.search(regexStartOfSplitWord);
      if (wordStartIndex !== -1) {
        windowEnd = windowStart + wordStartIndex + 1;
      }
    }

    // Save the line according to the window
    const line = text.slice(windowStart, windowEnd);
    result.push(line);

    // Move the window over the next possible substring
    windowStart = windowEnd;
    windowEnd = windowEnd + maxLineLength;
  }

  const lastLine = text.slice(windowStart, windowEnd);
  result.push(lastLine);

  return result;
}
