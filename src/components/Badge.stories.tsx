import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Бейдж: мітка-«пігулка» з лаймовою крапкою. Використовується як назва секції («Selected work») і як коротка позначка («UI/UX Designer & Front-end Developer»). Вигляд один, щоб усі назви секцій були однакові.

**Параметри**
- \`children\`: текст бейджа.
- \`as\`: HTML-елемент, \`p\` (за замовчуванням), \`h2\` або \`span\`. \`h2\` ставлять, коли бейдж є назвою секції: вигляд не змінюється.

**Варіанти й стани**
Варіант один. Бейдж не інтерактивний, тому станів hover, focus і disabled немає.

**Токени**
- Кольори: \`canvas\` (заливка), \`line\` (межа й обідок крапки), \`accent\` (крапка), \`ink\` (текст).
- Текст: \`text-label\` з \`font-display\`.
- Кути: \`rounded-control\`.
- Відступи: \`py-2 pl-3 pr-4\`, проміжок \`gap-2\`, крапка \`h-3 w-3\`.

**Коли використовувати**
Як назва кожної секції сторінки й як роль біля заголовка героя. Не міняй стиль для окремих секцій.

**Коли не використовувати**
Не для кнопок і посилань (там \`Button\`), не для довгого тексту.

**Як брати в код**
\`\`\`tsx
import { Badge } from "@/components/Badge";

<Badge>UI/UX Designer & Front-end Developer</Badge>
<Badge as="h2">Selected work</Badge>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    children: { control: "text" },
    as: { control: "select", options: ["p", "h2", "span"] },
  },
  args: {
    children: "Selected work",
    as: "p",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
