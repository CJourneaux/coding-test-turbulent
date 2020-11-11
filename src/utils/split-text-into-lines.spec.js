import splitTextIntoLines from "./split-text-into-lines";

describe("splitTextIntoLines", () => {
  test("throws when given a non-stricly positive line length", () => {
    expect(() => splitTextIntoLines("0 1 2 3 4 5 6 7 8", 0)).toThrow(
      "Invalid max line length"
    );
  });
  test("when given a maximum line length and a text smaller than this line length, leaves the line intact", () => {
    expect(splitTextIntoLines("0 1 2 3 4 5 6 7 8", 42)).toStrictEqual([
      "0 1 2 3 4 5 6 7 8",
    ]);
  });
  describe("when given a maximum line length and a text exceeding this line length", () => {
    test.todo(
      "splits the original text into multiple lines "
      // () => {
      //   expect(splitTextIntoLines("0 1 2 3 4 5 6 7 8", 6)).toStrictEqual([
      //     "0 1 2 ",
      //     "3 4 5 ",
      //     "6 7 8 ",
      //   ]);
      // }
    );
    test.todo(
      "does not cut a word in the middle should it take the current line over the maximum allowed length"
      //   () => {
      //     expect(splitTextIntoLines("0 123", 4)).toStrictEqual(["0 ", "123"]);
      //   }
    );
    test.todo(
      "when a word exceeds the maximum allowed line length, splits it over the line with a '-'"
      //   () => {
      //     expect(splitTextIntoLines("0 123456", 4)).toStrictEqual(["0 1-", "234-", "56"]);
      //   }
    );
  });
});
