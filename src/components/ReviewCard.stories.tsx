import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ReviewCard } from "./ReviewCard";

const meta = {
  title: "Components/ReviewCard",
  component: ReviewCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full md:w-1/3">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
Картка відгуку замовника: текст, ім'я й роль автора. Для секції відгуків.

**Параметри**
- \`quote\`: текст відгуку, одне-два речення.
- \`name\`: ім'я автора.
- \`role\`: роль автора (посада й компанія чи тип бізнесу).

**Варіанти й стани**
Варіант один. Картка не клікабельна, тому станів hover, focus і disabled немає.

**Токени**
- Кольори: \`surface\` (заливка), \`line\` (межа), \`ink\`, \`ink-muted\`.
- Текст: відгук \`text-body\` з \`font-text\`; ім'я \`text-label\` з \`font-display\`; роль \`text-caption\` з \`font-text\`.
- Кути: \`rounded-card\`.
- Відступи: поле картки \`p-6\`, проміжок \`gap-6\` між текстом і автором, \`gap-2\` між іменем і роллю.

**Коли використовувати**
У секції відгуків: три картки в ряд на широкому екрані, одна в колонку на вузькому. Картки в одному ряду розтягуються до однакової висоти.

**Коли не використовувати**
Не для проєктів (там \`WorkCard\`). Не клади в картку кнопки чи посилання: вона не інтерактивна.

**Як брати в код**
\`\`\`tsx
import { ReviewCard } from "@/components/ReviewCard";

<ReviewCard
  quote="Clear, fast and easy to work with."
  name="Name Surname"
  role="Marketing Lead, Agency"
/>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    quote: { control: "text" },
    name: { control: "text" },
    role: { control: "text" },
  },
  args: {
    quote:
      "Tetiana turned a messy brief into a clear, fast website. Our services finally make sense to visitors.",
    name: "Daniel Brooks",
    role: "Operations Manager, logistics company",
  },
} satisfies Meta<typeof ReviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
