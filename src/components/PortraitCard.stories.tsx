import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import portrait from "@/assets/portrait.webp";
import { PortraitCard } from "./PortraitCard";

const meta = {
  title: "Components/PortraitCard",
  component: PortraitCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full p-8 md:w-1/3">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
Картка з портретом для головного екрана: фото, нахил, плашка з іменем і роллю.

**Параметри**
- \`image\`: портрет, картинка з теки \`assets\`.
- \`alt\`: alt-текст портрета.
- \`name\`: ім'я на плашці.
- \`role\`: роль під іменем.

**Варіанти й стани**
Варіант один, інтерактивних станів немає (картка не клікабельна).

**Токени**
- Кольори: \`surface\` (поки фото завантажується), \`line\`, \`canvas\` з прозорістю (плашка), \`ink\`, \`ink-muted\`.
- Нахил: \`tilt-card\` (токен \`--tilt-card\`).
- Ефекти: \`backdrop-blur-glass\` (\`--blur-glass\`).
- Пропорція: \`aspect-portrait\`.
- Кути: \`rounded-card\`.
- Текст: ім'я \`text-heading\` з \`font-display\`, роль \`text-caption\` з \`font-text\`.
- Відступи: плашка \`px-4 py-3\`, \`gap-2\`, відступ від краю \`inset-x-3 bottom-3\`.

**Коли використовувати**
Один раз на головному екрані поруч із заголовком. Дай навколо запас місця: нахилена картка виступає за свою рамку.

**Коли не використовувати**
Не для списку проєктів (там \`WorkCard\`) і не для кількох фото підряд.

**Як брати в код**
\`\`\`tsx
import portrait from "@/assets/portrait.webp";
import { PortraitCard } from "@/components/PortraitCard";

<PortraitCard
  image={portrait}
  alt="Tetiana Marienkova"
  name="Tetiana Marienkova"
  role="UI/UX Designer & Front-end Developer"
/>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    name: { control: "text" },
    role: { control: "text" },
    alt: { control: "text" },
    image: { control: false },
  },
  args: {
    image: portrait,
    alt: "Tetiana Marienkova, UI/UX designer and front-end developer",
    name: "Tetiana Marienkova",
    role: "UI/UX Designer & Front-end Developer",
  },
} satisfies Meta<typeof PortraitCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
