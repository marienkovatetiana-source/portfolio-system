import type { Preview } from "@storybook/nextjs-vite";
import { dmSans, inter } from "../src/app/fonts";
import "../src/app/globals.css";

// next/font exposes font variables as classes on <html> in the layout.
// Storybook has no layout, so the same classes are put on <html> here.
// Done at module level (not in a decorator) so it also works on MDX docs pages.
document.documentElement.classList.add(dmSans.variable, inter.variable);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
