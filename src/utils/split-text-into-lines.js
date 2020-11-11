/**
 * Splits a string into a list of strings that do no exceed the given max length
 *
 * @param {string} text Some text to split into multiple lines
 * @param {number} maxLineLength The maximum length of the splitted lines
 *
 * @returns {string[]} A list of lines all under the given max length
 */
export default function splitTextIntoLines(text, maxLineLength) {
  console.log("text: '", text, "' - & max length: ", maxLineLength);
  if (maxLineLength < 1) {
    throw new Error("Invalid max line length");
  }
  const result = [text];
  return result;
}
