import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Navigation } from "./Navigation";

const meta = {
  title: "Components/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex justify-end">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Меню сайту: Work, Process, About, Contact. На широкому екрані пункти в ряд, на вузькому меню згортається в кнопку.

**Параметри**
- \`items\`: список пунктів \`{ id, label, href }\`; за замовчуванням чотири пункти сайту.
- \`activeId\`: \`id\` активного пункту; порожнє значення — активного немає.

**Варіанти й стани**
Пункт має стани:
- default: текст \`ink-muted\`.
- hover: заливка \`accent\`, текст \`ink\`.
- focus: контур \`ink\` з відступом, видно при навігації клавішею Tab.
- активний: заливка \`ink\`, текст \`accent\`, атрибут \`aria-current="page"\`.

Вузький екран (менше брейкпоінта \`md\`): пункти сховані, видно кнопку «Menu». Відкрите меню — плашка \`canvas\` з межею \`line\` і кутами \`rounded-card\`, вона лежить поверх контенту й не зсуває сторінку. Закривається клавішею Escape (фокус повертається на кнопку), кліком поза меню, вибором пункту або повторним натисненням кнопки. Кнопка має \`aria-expanded\` і \`aria-controls\`.

**Токени**
- Кольори: \`ink\`, \`ink-muted\`, \`accent\`, \`canvas\`, \`line\`.
- Текст: \`text-label\` з \`font-display\`.
- Кути: \`rounded-control\` (пункти, кнопка), \`rounded-card\` (відкрите меню).
- Відступи: пункт \`px-4 py-3\` (на широкому \`py-2\`), проміжок між пунктами \`gap-2\`, поле плашки \`p-3\`.

**Коли використовувати**
Для головного меню сайту в шапці. Одне меню на сторінку. Кнопка згорнутого меню стоїть праворуч у шапці: відкрите меню вирівнюється по її правому краю.

**Коли не використовувати**
Не клади в меню дії на кшталт «Resume» чи «LinkedIn»: для них є кнопки. Не став більше п'яти пунктів.

**Як брати в код**
\`\`\`tsx
import { Navigation } from "@/components/Navigation";

<Navigation activeId="work" />
\`\`\`

Вузький екран дивись у Storybook через Viewport у тулбарі.
`,
      },
    },
  },
  argTypes: {
    activeId: {
      control: "select",
      options: ["", "work", "process", "about", "contact"],
      name: "activeId (активний пункт)",
    },
    items: { control: false },
  },
  args: {
    activeId: "work",
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
