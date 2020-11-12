import { ThemeProvider, CSSReset } from "@chakra-ui/core";

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <CSSReset />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
